import "./style.css";
import { cityWeather } from "./modules/weatherAPI.js";

const cityInfo = await cityWeather();

console.log(cityInfo.address);
