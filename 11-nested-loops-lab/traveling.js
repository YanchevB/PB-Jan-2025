function travelling(input) {
  let index = 0;
  let savedMoney = 0;

  let command = input[index];
  index++;

  while (command !== 'End') {
    let destination = command;
    let moneyNeeded = Number(input[index]);
    index++;

    while (savedMoney < moneyNeeded) {
      let currentSum = Number(input[index]);
      savedMoney += currentSum;

      if (savedMoney >= moneyNeeded) {
        console.log(`Going to ${destination}!`);
        savedMoney = 0;
        command = input[index];
        index++;
        break;
      }

      command = input[index];
      index++
    }
    
    command = input[index];
    index++;
  }
}

travelling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End"
]);

travelling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End"
]);

