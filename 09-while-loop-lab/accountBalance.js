function accountBalance(input) {
  let index = 0;
  let balance = 0;
  let command = input[index];
  index++;

  while (command !== 'NoMoreMoney') {
    let moneyAdded = Number(command);

    if (moneyAdded < 0){
      console.log('Invalid operation!')
      break;
    }

    balance += moneyAdded; 
    console.log(`Increase: ${moneyAdded.toFixed(2)}`);

    command = input[index];
    index++;
  }

  console.log(`Total: ${balance.toFixed(2)}`)
}

accountBalance([
  "5.51", 
  "69.42",
  "100",
  "NoMoreMoney"
]);

accountBalance([
  "120",
  "45.55",
  "-150"
])


