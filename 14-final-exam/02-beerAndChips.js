function beerAndChips(fanName, budget, totalBeer, totalChips) {
  let beerPrice = totalBeer * 1.20;
  let chipsPrice = Math.ceil(totalChips * (0.45 * beerPrice));
  let totalSpend = beerPrice + chipsPrice;

  if (budget >= totalSpend) {
    console.log(`${fanName} bought a snack and has ${(budget - totalSpend).toFixed(2)} leva left.`);
  } else {
    console.log(`${fanName} needs ${(totalSpend - budget).toFixed(2)} more leva!`);
  }
}

beerAndChips('George', 10, 2, 3);
beerAndChips('Valentin', 5, 2, 4);