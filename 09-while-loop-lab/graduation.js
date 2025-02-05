function graduation(input) {
  let index = 0;
  let studentName = input[index];
  index++;

  let badGradeCount = 0;
  let avgGrade = 0;
  let isExcluded = false;

  let i = 1;
  while (i <= 12) {
    let grade = Number(input[index]);
    index++; 

    if (grade < 4) {
      badGradeCount++;
      if (badGradeCount === 2){
        isExcluded = true;
        console.log(`${studentName} has been excluded at ${i} grade`);
        break;
      }
      continue;
    }

    avgGrade += grade;
    i++;
  }

  if (isExcluded === false){
    console.log(`${studentName} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`);
  }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


