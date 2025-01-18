function calculateFuelCost(fuel, quantity, clubCard) {
  let gasolinePrice = 2.22 * quantity;
  let dieselPrice = 2.33 * quantity;
  let gasPrice = 0.93 * quantity;

  if (fuel === 'Gasoline') {
    if (clubCard === 'Yes') {
      gasolinePrice = 2.04 * quantity;
      if (quantity >= 20 && quantity <= 25) {
        gasolinePrice *= 0.92;
      } else if (quantity > 25) {
        gasolinePrice *= 0.90;
      }
    } else if (clubCard === 'No') {
      if (quantity >= 20 && quantity <= 25) {
        gasolinePrice *= 0.92;
      } else if (quantity > 25) {
        gasolinePrice *= 0.90;
      }
    }
    console.log(`${gasolinePrice.toFixed(2)} lv.`);

  } else if (fuel === 'Diesel') {
    if (clubCard === 'Yes') {
      dieselPrice = 2.21 * quantity;
      if (quantity >= 20 && quantity <= 25) {
        dieselPrice *= 0.92;
      } else if (quantity > 25) {
        dieselPrice *= 0.90;
      }
    } else if (clubCard === 'No') {
      if (quantity >= 20 && quantity <= 25) {
        dieselPrice *= 0.92;
      } else if (quantity > 25) {
        dieselPrice *= 0.90;
      }
    }
    console.log(`${dieselPrice.toFixed(2)} lv.`);

  } else if (fuel === 'Gas') {
    if (clubCard === 'Yes') {
      gasPrice = 0.85 * quantity;
      if (quantity >= 20 && quantity <= 25) {
        gasPrice *= 0.92;
      } else if (quantity > 25) {
        gasPrice *= 0.90;
      }
    } else if (clubCard === 'No') {
      if (quantity >= 20 && quantity <= 25) {
        gasPrice *= 0.92;
      } else if (quantity > 25) {
        gasPrice *= 0.90;
      }
    }
    console.log(`${gasPrice.toFixed(2)} lv.`);
  }
}

calculateFuelCost('Gas', 30, 'Yes');
calculateFuelCost('Gasoline', 25, 'No');
calculateFuelCost('Diesel', 19, 'No');