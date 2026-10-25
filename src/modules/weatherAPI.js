async function cityWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=JM493VKPPG6RPM2PKS42SNZJP"
  );
  const weatherCity = await response.json();

  return weatherCity;
}

export { cityWeather };
