function calculateChangeCoins(change) {
  let totalChange = Math.round(change * 100);
  let totalCoins = 0;

  while (totalChange !== 0) {
    if (totalChange >= 200) {
      totalChange -= 200;
    } else if (totalChange >= 100) {
      totalChange -= 100;
    } else if (totalChange >= 50) {
      totalChange -= 50;
    } else if (totalChange >= 20) {
      totalChange -= 20;
    } else if (totalChange >= 10) {
      totalChange -= 10;
    } else if (totalChange >= 5) {
      totalChange -= 5;
    } else if (totalChange >= 2) {
      totalChange -= 2;
    } else if (totalChange >= 1) {
      totalChange -= 1;
    }
    totalCoins++;
  }
  console.log(totalCoins);
}

calculateChangeCoins(1.23);
calculateChangeCoins(2.73);
calculateChangeCoins(0.56);