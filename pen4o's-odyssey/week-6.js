function findHiddenCode(n, m) {
  let rows = n;
  let cols = m;

  for (let r = 1; r <= rows; r++) {
    let lightPattern = ''
    for (let c = 1; c <= cols; c++) {
      let result = r + c;
      if (result % 2 === 0) {
        lightPattern += '*';
      } else {
        lightPattern += '.';
      }
    }
    console.log(lightPattern);
  }
  console.log('Pen4o\'s Odyssey has come to an end, but your programming journey is just beginning. The world of code awaits you!');
}

findHiddenCode(3, 4);

findHiddenCode(5, 5);