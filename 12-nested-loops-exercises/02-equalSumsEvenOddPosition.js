function evenOddPositionsSums(firstNum, lastNum) {
  let equalSums = '';
  for (let i = firstNum; i <= lastNum; i++) {
    let currentNum = '' + i;
    let evenSum = 0;
    let oddSum = 0;
    for (let j = 0; j < currentNum.length; j++) {
      if (j % 2 === 0) {
        oddSum += Number(currentNum[j]);
      } else {
        evenSum += Number(currentNum[j]);
      }
    }
    if (oddSum === evenSum) {
      equalSums += currentNum + ' ';
    }
  }
  console.log(equalSums);
}

evenOddPositionsSums(100000, 100050);