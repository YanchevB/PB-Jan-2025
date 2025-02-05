// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.

function calculateShoppingBudget(budget, n, m, p) {
  let nCost = n * 250;
  let mCost = m * (0.35 * nCost);
  let pCost = p * (0.1 * nCost);
  let totalCost = nCost + mCost + pCost;
 
  if (n > m) {
    totalCost *= 0.85;
  }

  if (budget >= totalCost) {
    let remainingMoney = budget - totalCost;
    console.log(`You have ${remainingMoney.toFixed(2)} leva left!`);
  } else {
    let neededMoney = totalCost - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
  }
}

calculateShoppingBudget(900, 2, 1, 3);
calculateShoppingBudget(920.45, 3, 1, 1);