function findSpecialNumbers(n) {
  let specialNumbers = '';
  
  for (let i = 1111; i <= 9999; i++) {
    let currentNum = '' + i;
    let divisorCount = 0;

    for (let j = 0; j < currentNum.length; j++) {
      let currentDigit = Number(currentNum[j]);
      let divisor = currentDigit;

      if (n % divisor === 0) {
        divisorCount++;
        if (divisorCount === 4) {
          specialNumbers += `${currentNum} `;
        }
      }
    }
  }

  console.log(specialNumbers);
}

findSpecialNumbers(3);