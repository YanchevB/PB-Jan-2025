function fishingBoatCost(budget, season, people) {
  let cost = 0;

  switch (season) {
    case 'Spring':
      cost = 3000;
      break;
    case 'Summer' :
    case 'Autumn' :
      cost = 4200;
      break;
    case 'Winter' :
      cost = 2600;
  }

  if (people <= 6) {
    cost *= 0.9;
  } else if (people <= 11) {
    cost *= 0.85;
  } else {
    cost *= 0.75;
  }

  if (people % 2 === 0 && season !== 'Autumn') {
    cost *= 0.95
  }

  if (budget >= cost) {
    let moneyLeft = budget - cost;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = cost - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingBoatCost(3000, "Summer", 11);
fishingBoatCost(3600, "Autumn", 6);
fishingBoatCost(2000, "Winter", 13);