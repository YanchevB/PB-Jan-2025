function sumNumbers(input) {
  let index = 0;
  let finalSum = Number(input[index]);
  index++;

  let currentSum = 0;
  

  while (finalSum > currentSum) {
    let currentNum = Number(input[index]);
    index++;
    
    currentSum += currentNum;
  }

  console.log(`${currentSum}`);
}

sumNumbers([
  "20",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6"
]);

