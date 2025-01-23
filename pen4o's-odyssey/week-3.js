function revealNextLocation(symbols) {
  let totalPower = 0;
  let currentNumber = '';
  let swapCase = '';

  for (let i = 0; i < symbols.length; i++) {
    const char = symbols[i];

    //Swap case logic
    if (char === char.toLowerCase()) {
      swapCase += char.toUpperCase()
    } else {
      swapCase += char.toLowerCase();
    }

    //Adding numbers in the string logic
    if (!isNaN(char)) {
      currentNumber += char;
    } else if (currentNumber) {
      totalPower += parseFloat(currentNumber);
      currentNumber = '';
    }

    //If string finishes with a number, add it
    if (currentNumber) {
      totalPower += parseFloat(currentNumber);
      currentNumber = '';
    }
  }

  console.log(swapCase);
  if (totalPower <= 20) {
    console.log(`The map warns of danger! Total power: ${totalPower}`);
  } else {
    console.log(`The map reveals the your next location! Total power: ${totalPower}`);
  }
}

revealNextLocation('T3r4p_M4p');
revealNextLocation('SecreT_tRe4sure!557');