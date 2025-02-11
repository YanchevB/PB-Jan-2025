function pyramid(n) {
  let current = 1;
  let isBigger = false;
  let rowNumbers = '';

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      rowNumbers += current + ' ';
      current++;
    }

    console.log(rowNumbers);
    rowNumbers = '';
    if (isBigger) {
      break;
    }
  }
}

pyramid(7);