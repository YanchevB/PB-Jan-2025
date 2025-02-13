function fitnessCenter(input) {
  let chestTraining = 0;
  let backTraining = 0;
  let legsTraining = 0;
  let absTraining = 0;

  let proteinShake = 0;
  let proteinBar = 0;

  let visitors = input[0];
  let workingOut = 0;
  let proteinUsers = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === 'Chest') {
      chestTraining++;
      workingOut++;
    } else if (input[i] === 'Back') {
      backTraining++;
      workingOut++;
    } else if (input[i] === 'Legs') {
      legsTraining++;
      workingOut++;
    } else if (input[i] === 'Abs') {
      absTraining++;
      workingOut++;
    } else if (input[i] === 'Protein shake') {
      proteinShake++;
      proteinUsers++;
    } else if (input[i] === 'Protein bar') {
      proteinBar++;
      proteinUsers++;
    }
  }

  let workingOutPercent = workingOut / visitors * 100;
  let proteinUsersPercent = proteinUsers / visitors * 100;

  console.log(`${backTraining} - back`);
  console.log(`${chestTraining} - chest`);
  console.log(`${legsTraining} - legs`);
  console.log(`${absTraining} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${workingOutPercent.toFixed(2)}% - work out`);
  console.log(`${proteinUsersPercent.toFixed(2)}% - protein`);
}

fitnessCenter([10, 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar' , 'Protein shake', 'Protein bar', 'Legs', 'Abs']);