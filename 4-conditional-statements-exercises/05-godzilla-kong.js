// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

function calculateBudget(budget, extrasCount, costumeCost) {
  let setCost = budget * 0.1;

  if (extrasCount > 150) {
    costumeCost *= 0.9;
  }

  let totalCostumeCost = extrasCount * costumeCost;
  let totalCost = setCost + totalCostumeCost;

  if (totalCost > budget) {
    let moneyNeeded = totalCost - budget;
    console.log('Not enough money!');
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
  } else {
    let moneyLeft = budget - totalCost;
    console.log('Action!');
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
  }
}

calculateBudget(20000, 120, 55.5);
calculateBudget(15437.62, 186, 57.99)
calculateBudget(9587.88, 222, 55.68)