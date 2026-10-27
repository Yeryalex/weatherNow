import "./style.css";
import { cityWeather } from "./modules/weatherAPI.js";
import { FtoCelsius, CtoFahrenheit } from "./modules/utils.js";
import weather from "./modules/videoDisplay.js";

const video = document.querySelector(".bg-video");

const form = document.querySelector("form");
const chosenCity = document.querySelector("#city");
const cityName = document.querySelector(".city-name");
const tempValue = document.querySelector(".temp-value");
const buttonTemp = document.querySelector(".button-temp");
const weatherDescription = document.querySelector(".weather-description");
let temperature = null;

video.src = weather[0];
video.playbackRate = 0.8;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = chosenCity.value;
  const cityInfo = await cityWeather(city);
  const formattedCityName = cityInfo.resolvedAddress.split(",");
  temperature = cityInfo.currentConditions.temp;

  buttonTemp.className = "Fahrenheit";
  buttonTemp.textContent = "Fº";

  cityName.textContent = formattedCityName[0];
  weatherDescription.textContent = cityInfo.currentConditions.conditions;
  tempValue.textContent = parseInt(temperature);

  form.reset();
  console.log(cityInfo);
});

buttonTemp.addEventListener("click", () => {
  if (buttonTemp.className === "Fahrenheit") {
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
