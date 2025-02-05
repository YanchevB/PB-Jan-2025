function calculateSteps(input) {
  let index = 0;
  let command = input[index];
  index++;

  let totalSteps = 0;
  let stepsGoal = 10000;

  while (command !== 'Going home') {
    let currentSteps = Number(command);
    totalSteps += currentSteps;

    if (totalSteps >= stepsGoal) {
      console.log('Goal reached! Good job!');
      console.log(`${totalSteps - stepsGoal} steps over the goal!`);
      break;
    }

    command = input[index];
    index++;
  }

  if (command === 'Going home') {
    let stepsToHome = Number(input[index]);
    totalSteps += stepsToHome;

    if (totalSteps < stepsGoal) {
      console.log(`${stepsGoal - totalSteps} more steps to reach goal.`);
    } else {
      console.log('Goal reached! Good job!');
      console.log(`${totalSteps - stepsGoal} steps over the goal!`);
    }
  }
}

calculateSteps([
  "1000",
  "1500",
  "2000",
  "6500"
]);

calculateSteps([
  "1500",
  "3000",
  "250",
  "1548",
  "2000",
  "Going home",
  "2000"
]);

calculateSteps([
  "1500",
  "300",
  "2500",
  "3000",
  "Going home",
  "200"
]);

