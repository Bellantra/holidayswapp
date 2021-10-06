const { Router } = require("express");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { SECRET_KEY } = process.env;
var LocalStrategy = require("passport-local").Strategy;
require("../utils/auth/passport")(passport);

const router = Router();
router.use(express.json());


router.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      const token=await jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin,
          isDeleted: user.isDeleted,
        },
        SECRET_KEY,
        { expiresIn: "24hr" }
      )
      console.log(token)
      return res.json({id:user.id,isAdmin:user.isAdmin,isDeleted:user.isDeleted,token});
    }
  })(req, res, next);
});



router.get('/user', 
  passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json(req.user);
  });


router.get("/logout", (req, res, next) => {
  req.logOut();
  req.session = null;
  res.send("Logged out");
});

module.exports = router;
