function palindromeCheck(num) {
  let numToStr = num.toString();
  let reversedStr = numToStr.split('').reverse().join('');
  return numToStr === reversedStr;
}

function findHappyNumber(num1, num2) {
  let result = false;

  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0 && i % 3 === 0 && palindromeCheck(i)) {
      result = true;
      console.log(i);
    } 
  }
  if (result === false) {
    console.log('The statues remain silent…');
  }
}

findHappyNumber(1, 50);
findHappyNumber(10, 300);
findHappyNumber(50, 60);
