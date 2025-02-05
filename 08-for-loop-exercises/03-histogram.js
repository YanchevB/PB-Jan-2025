function histogram(array) {
  let totalNum = array[0];

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= totalNum; i++) {
    let currentNum = array[i];

    if (currentNum < 200) {
      p1++;
    } else if (currentNum <= 399) {
      p2++;
    } else if (currentNum <= 599) {
      p3++;
    } else if (currentNum <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  
  let totalP1 = (p1 / totalNum) * 100;
  let totalP2 = (p2 / totalNum) * 100;
  let totalP3 = (p3 / totalNum) * 100;
  let totalP4 = (p4 / totalNum) * 100;
  let totalP5 = (p5 / totalNum) * 100;
  
  console.log(`${totalP1.toFixed(2)}%`);
  console.log(`${totalP2.toFixed(2)}%`);
  console.log(`${totalP3.toFixed(2)}%`);
  console.log(`${totalP4.toFixed(2)}%`);
  console.log(`${totalP5.toFixed(2)}%`);
}

histogram([3, 1, 2, 999]);