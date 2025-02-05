function examPreparation(input) {
  let index = 0;
  let totalBadGrades = Number(input[index]);
  index++;

  let badGradesCount = 0;
  let totalGrades = 0;
  let totalExercises = 0;
  let lastExercise = '';

  let hasFailed = false;
  
  let currentExercise = input[index];
  index++;

  while (currentExercise !== 'Enough') {
    lastExercise = currentExercise;
    let grade = Number(input[index]);
    index++;

    if (grade <= 4) {
      badGradesCount++;

      if (totalBadGrades === badGradesCount) {
        hasFailed = true;
        break;
      }
    }

    totalExercises++;
    totalGrades += grade;

    currentExercise = input[index];
    index++;
  }

  if (!hasFailed) {
    let avgScore = totalGrades / totalExercises;
    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${totalExercises}`);
    console.log(`Last problem: ${lastExercise}`);
  } else {
    console.log(`You need a break, ${badGradesCount} poor grades.`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Bus",
  "6",
  "Enough"
]);

examPreparation([
  "2",
  "Income",
  "3",
  "Game Info",
  "6",
  "Best Player",
  "4"
]);
