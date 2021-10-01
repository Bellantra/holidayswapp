const { Router } = require('express');
const express = require('express');


const createFavourite = require('../controllers/favourite/createFavourite');
const deleteFavourite = require('../controllers/favourite/deleteFavourite');
const getAllFavourites = require('../controllers/favourite/getAllFavourites');

const router = Router();
router.use(express.json());

router.get('/', getAllFavourites);
router.post('/', createFavourite);
router.delete('/:id', deleteFavourite);






module.exports = router;






