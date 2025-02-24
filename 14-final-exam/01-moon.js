function calculateTripToMoon(speed, fuelFor100Km) {
  let distance = 384400;
  let totalDistance = distance * 2;
  let time = totalDistance / speed;
  let totalTime = time + 3;
  let totalFuel = (fuelFor100Km * totalDistance) / 100;

  console.log(Math.ceil(totalTime));
  console.log(totalFuel);
}

calculateTripToMoon(10000, 5);
calculateTripToMoon(5000, 7);