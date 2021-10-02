import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import miami from "../Photographs/miami.jpg";
import bali from "../Photographs/bali.jpg";
import paris from "../Photographs/paris.jpg";
import rome from "../Photographs/roma.jpg";
import moscow from "../Photographs/moscow.jpg";
import riodejaneiro from "../Photographs/riodejaneiro.jpg";
import Amsterdam from "../Photographs/Amsterdam.jpg";
import Reikiavik from "../Photographs/Reikiavik.jpg";
import Salta from "../Photographs/statics/salta.jpg"
import Plane from  "../Photographs/statics/plane.png"
import Location from "../Photographs/statics/Location.png"
import navigation from  "../Photographs/statics/navigation.png"
import Cycling from "../Photographs/statics/Cycling.png"
import handHeart from  "../Photographs/statics/handHeart.png"
import regular from  "../Photographs/statics/regular.png"
import handright from  "../Photographs/statics/handright.png"
import "../Home/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="cities">
      <Link to>               
          <img src={miami} alt="miami" width="250em" height="200em" />
          <h3>Miami</h3>          
        </Link>
        
        <p>
          <img src={paris} alt="paris" width="250em" height="200em" />
          <h3>Paris</h3>
        </p>
        <p>
          <img src={bali} alt="bali" width="250em" height="200em" />
          <h3>Bali</h3>
        </p>
        <p>
          <img src={rome} alt="rome" width="250em" height="200em" />
          <h3>Rome</h3>
        </p>
        <p>
        <img src={riodejaneiro} alt="riodejaneiro" width="250em" height="200em"/>
        <h3>Rio de Janeiro</h3>
        </p>
        <p>
        <img src={moscow} alt="moscow" width="250em" height="200em" />
        <h3>Moscow</h3>
        </p>
        <p>
        <img src={Amsterdam} alt="Amsterdam" width="250em" height="200em" />
        <h3>Amsterdam</h3>
        </p>
        <p>
        <img src={Reikiavik} alt="Reikiavik" width="250em" height="200em" />
        <h3>Reikiavik</h3>
        </p>
      </div>
      <div className="places">
        <h3>Places you may like</h3>
      </div>
      <div className="sms">
        <h2>it's official... we're the best home swapping platform </h2>
      </div>
      <div className="motivation">
      <img src={Salta} alt="Salta" width="450em" height="400em" />
      <div className="icons">
      <div className="prayer">
        <img src={Plane} alt="Plane" />
        <h5>Once a year travel to a place you've never been before</h5>
      </div>
      <div className="prayer">
        <img src={navigation} alt="navigation" />
        <h5>Don't tell me how old you are or how well educated you are. Tell me how much you have traveled and I will tell you how much you know</h5>
      </div>
      <div className="prayer">
        <img src={Location} alt="Location" />
        <h5>Life is a journey and whoever travels lives twice</h5>
      </div>
      <div className="prayer">
        <img src={Cycling} alt="Cycling" />
        <h5>Once the traveling virus bites you, there is no possible antidote and I know that I will be happily infected for the rest of my life.</h5>
      </div>
      <div className="prayer">
        <img src={handright} alt="handright" />
        <h5>Those who say it's impossible shouldn't interrupt those of us who are trying</h5>
      </div>
      <div className="prayer">
        <img src={handHeart} alt="handHeart" />
        <h5>In my case, I do not travel to go to a particular place, but to go. I travel for the pleasure of traveling. The question is to move</h5>
      </div>
      <div className="prayer">
        <img src={regular} alt="regular" />
        <h5>Travel is part of education in youth and part of experience in old age</h5>
      </div>
        
      </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
