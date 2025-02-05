function saveMoneyForVacation(input) {
  let daysPassed = 0;
  let daysSpending = 0;
  let index = 0;
  let neededMoney = Number(input[index]);
  index++;

  let currentMoney = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  while (index < input.length) {
    let moneyAction = Number(input[index]);
    index++;

    if (command === 'spend') {
      currentMoney -= moneyAction;
      daysPassed++;
      daysSpending++;

      if (currentMoney < 0) {
        currentMoney = 0;
      }

      if (daysSpending === 5) {
        console.log("You can't save the money.");
        console.log(`${daysPassed}`);
        break;
      }
      
    } else if (command === 'save') {
      currentMoney += moneyAction;
      daysPassed++;
      daysSpending = 0;
    }

    if (currentMoney >= neededMoney) {
      console.log(`You saved the money for ${daysPassed} days.`);
      break;
    }

    command = input[index];
    index++;
  }
}

saveMoneyForVacation([
  "2000",
  "1000",
  "spend",
  "1200",
  "save",
  "2000"
]);

saveMoneyForVacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10"
]);

saveMoneyForVacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100"
]);
