async function cityWeather(city) {
  try {
    const apiKey = "JM493VKPPG6RPM2PKS42SNZJP";
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Retrieve data failed. Status: ${response.status}`);
    }
    const weatherCity = await response.json();
    return weatherCity;
  } catch (error) {
    alert(error);
  }
}

export { cityWeather };
