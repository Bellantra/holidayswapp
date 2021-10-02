import axios from "axios";
import * as types from "../types/postTypes";

export function getHouses() {
    return async function (dispatch) {
      try {       
        const json = await axios.get("http://localhost:3001/announcement")   
        return dispatch({
          type: types.GET_HOUSES, payload: json.data});
      } catch (error) {
        console.log(error);
        alert("City not found");
      }
    };
  }

export function getHouseID(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/announcement/${id}`);
      return dispatch({ 
        type: types.GET_HOUSES_ID, payload: json.data})
    } catch(error) {
      console.log(error)
      alert('Place not found')
    }
  }
}

export function getHouseCity(city) {
  return async function(dispatch) {
      try {
          const json = await axios.get(`http://localhost:3001/announcement?name=${city}`);
          return dispatch({ type: types.GET_HOUSE_CITY, payload: json.data})
      } catch(error) {
          console.log(error)
          alert("There's not houses avalaible on this city")
      }
  }
}
