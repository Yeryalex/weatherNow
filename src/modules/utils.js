function FtoCelsius(temp) {
  const celsius = (temp - 32) * (5 / 9);
  return celsius;
}

function CtoFahrenheit(temp) {
  const fahrenheit = temp * (9 / 5) + 32;
  return fahrenheit;
}

export { FtoCelsius, CtoFahrenheit };
