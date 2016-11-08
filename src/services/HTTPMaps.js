import axios from 'axios';

const API_KEY = "AIzaSyBF6EBhp2X0tJJDQMVLlOM8tBAMfl5gsWM";
const HOST = "https://maps.googleapis.com/maps/api/directions/json";

const HTTPMaps = {
  findLocations(origin, destination) {
    console.log(`Sending Request to ${HOST}?origin=${origin}&destination=${destination}&key=${API_KEY}`);
    return axios.get(`${HOST}?origin=${origin}&destination=${destination}&key=${API_KEY}`);
  }
};

export default HTTPMaps;
