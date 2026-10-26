async function cityWeather(city) {
  const apiKey = "JM493VKPPG6RPM2PKS42SNZJP";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`
  );
  const weatherCity = await response.json();

  return weatherCity;
}

export { cityWeather };
