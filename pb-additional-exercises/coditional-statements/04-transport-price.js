function calculateTransportPrice(kilometers, timeOfDay) {
  let taxiPriceDay = 0.70 + 0.79 * kilometers;
  let taxiPriceNight = 0.70 + 0.90 * kilometers;
  let busPrice = 0.09 * kilometers; //only for 20km min
  let trainPrice = 0.06 * kilometers; //only for 100km min

  if (kilometers < 20 && timeOfDay === 'day') {
    console.log(taxiPriceDay.toFixed(2));
  } else if (kilometers < 20 && timeOfDay === 'night') {
    console.log(taxiPriceNight.toFixed(2));
  } else if (kilometers >= 20 && kilometers < 100) {
    console.log(busPrice.toFixed(2));
  } else if (kilometers >= 100) {
    console.log(trainPrice.toFixed(2));
  }
}

calculateTransportPrice(5, 'day');
calculateTransportPrice(7, 'night');
calculateTransportPrice(25, 'day');
calculateTransportPrice(180, 'night');