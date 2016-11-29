import axios from 'axios';

const API_KEY = "AIzaSyBF6EBhp2X0tJJDQMVLlOM8tBAMfl5gsWM";
const HOST_DIRECTIONS = "https://maps.googleapis.com/maps/api/directions/json";
const HOST_PLACES = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

const HTTPMaps = {
  getDirection(origin, destination) {
    console.log(`Sending Request to ${HOST_DIRECTIONS}?origin=place_id:${origin}&destination=place_id:${destination}&key=${API_KEY}`);
    return axios.get(`${HOST_DIRECTIONS}?origin=place_id:${origin}&destination=place_id:${destination}&key=${API_KEY}`);
  },
  getPlaces(input) {
    console.log(`Sending Request to ${HOST_PLACES}?input=${input}&key=${API_KEY}`);
    return axios.get(`${HOST_PLACES}?input=${input}&key=${API_KEY}`);
  }

};

export default HTTPMaps;
