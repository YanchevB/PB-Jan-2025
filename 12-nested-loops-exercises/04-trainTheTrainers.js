function trainTheTrainers(input) {
  let index = 0;
  let numberOfJury = Number(input[index]);
  index++;

  let presentationCount = 0;
  let totalAvg = 0;

  let command = input[index];
  index++;

  while (command !== 'Finish') {
    let presentation = command; 
    presentationCount++;
    let gradeAvg = 0;

    for (let j = 1; j <= numberOfJury; j++) {
      let grade = Number(input[index]);
      gradeAvg += grade;
      index++;
    }

    command = input[index];
    index++;
    totalAvg += gradeAvg / numberOfJury;
    console.log(`${presentation} - ${(gradeAvg / numberOfJury).toFixed(2)}.`);
  }

  console.log(`Student's final assessment is ${(totalAvg / presentationCount).toFixed(2)}.`);
}

trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish"
]);