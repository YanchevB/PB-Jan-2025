function refilVehicle(fuel, quantity) {
  if (fuel !== 'Diesel' && fuel !== 'Gasoline' && fuel !== 'Gas') {
    console.log('Invalid fuel!');
    return;
  } else if (quantity >= 25) {
    console.log(`You have enough ${fuel.toLowerCase()}.`);
  } else if (quantity < 25) {
    console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
  }
}

refilVehicle('Diesel', 10);
refilVehicle('Gasoline', 40);
refilVehicle('Gas', 25);
refilVehicle('Kerosene', 200);
