function sumOfNumbers(char) {
  let sum = 0;

  for (let i = 0; i < char.length; i++) {
    sum += Number(char[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers('564891');