// 	W - ако е победител получава 2000 точки
// 	F - ако е финалист получава 1200 точки
// 	SF - ако е полуфиналист получава 720 точки

function tennisRanklist(array) {
  let tournaments = Number(array[0]);
  let startingPoints = Number(array[1]);
  let pointsWon = 0;
  let wonTournaments = 0;

  for (let i = 2; i < tournaments + 2; i++) {
    if (array[i] === 'W') {
      pointsWon += 2000;
      wonTournaments++;
    } else if (array[i] === 'F') {
      pointsWon += 1200;
    } else if (array[i] === 'SF') {
      pointsWon += 720;
    }
  }
  let totalPoints = pointsWon + startingPoints;
  let avgPoints = pointsWon / tournaments;
  let percentageWon = wonTournaments / tournaments * 100;
  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(`${percentageWon.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);

