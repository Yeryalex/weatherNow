import "./style.css";
import { cityWeather } from "./modules/weatherAPI.js";

const form = document.querySelector("form");
const chosenCity = document.querySelector("#city");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = chosenCity.value;
  const cityInfo = await cityWeather(city);

  console.log(cityInfo);
});
