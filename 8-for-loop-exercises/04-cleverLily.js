function calculateTotalMoney(age, washingMachinePrice, moneyPerToy) {
  let totalMoney = 0;
  let givenMoney = 10;

  for (let birthday = 1; birthday <= age; birthday++) {
    if (birthday % 2 === 0) {
      totalMoney += givenMoney - 1;
      givenMoney += 10;
    } else {
      totalMoney += moneyPerToy;
    }
  }

  if (totalMoney >= washingMachinePrice) {
    let moneyLeft = totalMoney - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeeded = washingMachinePrice - totalMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}

calculateTotalMoney(10, 170.00, 6);
calculateTotalMoney(21, 1570.98, 3);