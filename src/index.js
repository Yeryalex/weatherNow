import "./style.css";
import { cityWeather } from "./modules/weatherAPI.js";
import { FtoCelsius, CtoFahrenheit } from "./modules/utils.js";
import { videoConditions } from "./modules/videoDisplay.js";
import windy from "./assets/videos/windy.mp4";

const video = document.querySelector(".bg-video");
const form = document.querySelector("form");
const chosenCity = document.querySelector("#city");
const cityName = document.querySelector(".city-name");
const tempValue = document.querySelector(".temp-value");
const buttonTemp = document.querySelector(".button-temp");
const weatherDescription = document.querySelector(".weather-description");
const weatherContainer = document.querySelector(".weather-container");
const generalInfo = document.querySelector(".general-info");

let temperature = null;
video.src = windy;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = chosenCity.value;
  const cityInfo = await cityWeather(city);
  if (!cityInfo) {
    form.reset();
    return;
  }
  const formattedCityName = cityInfo.resolvedAddress.split(",");
  temperature = cityInfo.currentConditions.temp;
  buttonTemp.textContent = "Fº";
  buttonTemp.classList.add("Fahrenheit");

  cityName.textContent = formattedCityName[0];
  const conditions = cityInfo.currentConditions.conditions.split(",")[0];
  weatherDescription.textContent = conditions;

  const conditionInfo = videoConditions(conditions);

  video.src = conditionInfo.weather;
  weatherContainer.style.backgroundColor = conditionInfo.color;
  video.playbackRate = 0.8;

  tempValue.textContent = parseInt(temperature);
  buttonTemp.style.display = "block";
  generalInfo.style.display = "grid";
  form.reset();
});

buttonTemp.addEventListener("click", () => {
  if (buttonTemp.classList.contains("Fahrenheit")) {
    temperature = FtoCelsius(temperature);
    tempValue.textContent = Math.trunc(temperature);
    buttonTemp.textContent = "Cº";
    buttonTemp.classList.toggle("Fahrenheit");
  } else {
    temperature = CtoFahrenheit(temperature);
    tempValue.textContent = Math.trunc(temperature);
    buttonTemp.textContent = "Fº";
    buttonTemp.classList.toggle("Fahrenheit");
  }
});
