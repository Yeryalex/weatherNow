// const response = await fetch(
//   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=JM493VKPPG6RPM2PKS42SNZJP"
// ).then((response) => response.json());

async function cityWeather() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=JM493VKPPG6RPM2PKS42SNZJP"
  );
  let result = null;
  response.json().then((response) => {
    result = response;
  });
  return result;
}

// console.log(response);
export { cityWeather };
