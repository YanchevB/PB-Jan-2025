function displayWeather(weather) {
  if (weather === 'sunny') {
    console.log("It's warm outside!");
  } else {
    console.log("It's cold outside!");
  }
}

displayWeather('sunny');
displayWeather('cloudy');
displayWeather('snowy')