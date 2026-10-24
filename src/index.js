import "./style.css";
import { cityWeather } from "./modules/weatherAPI.js";

cityWeather().then((response) => console.log(response.address));
