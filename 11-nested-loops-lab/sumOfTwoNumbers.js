function sumOfTwoNums(start, finish, result) {
  let currentCombination = 0;
  let combinationFound = false;
  let magicNumber = result;

  for (let x = start; x <= finish; x++) {
    for (let y = start; y <= finish; y++) {
      currentCombination++;
      if (x + y === magicNumber) {
        combinationFound = true;
        console.log(`Combination N:${currentCombination} (${x} + ${y} = ${magicNumber})`);
        break;
      }
    }

    if (combinationFound) {
      break;
    }
  }

  if (!combinationFound) {
    console.log(`${currentCombination} combinations - neither equals ${magicNumber}`);
  }   
}

sumOfTwoNums(1, 10, 5);
sumOfTwoNums(23, 24, 20);