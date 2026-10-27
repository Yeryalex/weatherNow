import sunny from "../assets/videos/sunny_day.mp4";
import cloudy from "../assets/videos/cloudy.mp4";
import rainy from "../assets/videos/rainy.mp4";
import storm from "../assets/videos/storm.mp4";
import snow from "../assets/videos/snow_fall.mp4";
import overcast from "../assets/videos/overcast.mp4";
import windy from "../assets/videos/windy.mp4";

function objectWeather(weather, color) {
  return { weather, color };
}

function videoConditions(conditions) {
  if (conditions.includes("Sunny") || conditions.includes("Clear"))
    return objectWeather(sunny, "#114d8533");
  if (conditions.includes("cloudy")) return objectWeather(cloudy, "#87898933");
  if (conditions.includes("Overcast"))
    return objectWeather(overcast, "#25306733");
  if (conditions.includes("Rain")) return objectWeather(rainy, "#2e4b62b7");
  if (conditions.includes("Storm") || conditions.includes("thunder"))
    return objectWeather(storm, "#50515243");
  if (conditions.includes("snow")) return objectWeather(snow, "#3a53514d");
  if (conditions.includes("wind") || conditions.includes("windy"))
    return objectWeather(windy, "#2e4b627e");

  return objectWeather(windy, "#2e4b627e");
}

export { videoConditions };
