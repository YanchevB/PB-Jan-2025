function goldMine(input) {
  let index = 0;
  let totalLocations = Number(input[index]);
  index++;

  for (let i = 1; i <= totalLocations; i++) {
    let goldMined = 0;

    let expectedYield = Number(input[index]);
    index++;

    let daysInMine = Number(input[index]);
    index++;

    for (let d = 1; d <= daysInMine; d++) {
      let dailyYield = Number(input[index]);
      goldMined += dailyYield;
      
      index++;
    }

    let avgGold = goldMined / daysInMine;

    if (avgGold >= expectedYield) {
      console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
    } else {
      console.log(`You need ${(expectedYield - avgGold).toFixed(2)} gold.`);
    }
  }
}

goldMine([
  "2",
  "10",
  "3",
  "10",
  "10",
  "11",
  "20",
  "2",
  "20",
  "10"
]);

// goldMine([
//   "1",
//   "5",
//   "3",
//   "10",
//   "1",
//   "3"
// ]);
