function flowerCost(flower, quantity, budget) {
  let cost = 0;

  switch (flower) {
    case 'Roses': 
      cost = quantity * 5;
      break;
    case 'Dahlias' :
      cost = quantity * 3.8;
      break;
    case 'Tulips' :
      cost = quantity * 2.8
      break;
    case 'Narcissus' :
      cost = quantity * 3;
      break;
    case 'Gladiolus' :
      cost = quantity * 2.5;
      break;
  }

  if (flower === 'Roses' && quantity > 80) {
    cost *= 0.9;
  } else if (flower === 'Dahlias' && quantity > 90) {
    cost *= 0.85;
  } else if (flower === 'Tulips' && quantity > 80) {
    cost *= 0.85;
  } else if (flower === 'Narcissus' && quantity < 120) {
    cost *= 1.15;
  } else if (flower === 'Gladiolus' && quantity < 80) {
    cost *= 1.20;
  }

  if (cost > budget) {
    let neededMoney = cost - budget;
    console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = budget - cost;
    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
  }
}

flowerCost("Roses", 55, 250);