// Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две. 
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.

function calculateOscarPoints(array) {
  let actorName = array[0];
  let startingPoints = Number(array[1]);
  let numOfJury = Number(array[2]);
  let totalPoints = startingPoints;

  for (let i = 3; i < numOfJury * 2 + 3; i += 2) {
    let pointsAwarded = (array[i].length * Number(array[i + 1])) / 2;
    totalPoints += pointsAwarded;

    if (totalPoints >= 1250.5) {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
      return;
    }
  }

  if (totalPoints < 1250.5) {
    let pointsNeeded = 1250.5 - totalPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
  }
}

calculateOscarPoints(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
