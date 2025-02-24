function sumAndProducts(n) {
  let isFound = false;

  for (let a = 1; a <= 9; a++) {
    if (isFound) {
      break;
    }

    for (let b = 9; b >= a; b--) {
      if (isFound) {
        break;
      }

      for (let c = 0; c <= 9; c++) {
        if (isFound) {
          break;
        }

        for (let d = 9; d >= c; d--) {
          let sum = a + b + c + d;
          let multiply = a * b * c * d;

          if (sum === multiply && n % 10 === 5) {
            isFound = true;
            console.log(`${a}${b}${c}${d}`);
            break;
          } 

          if (Math.trunc(multiply / sum) === 3 && n % 3 === 0) {
            isFound = true;
            console.log(`${d}${c}${b}${a}`);
            break;
          }
        }
      }
    }
  }
  if (!isFound) {
    console.log('Nothing found');
  }
}

sumAndProducts(123);
sumAndProducts(145);
sumAndProducts(214);