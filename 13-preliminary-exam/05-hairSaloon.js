function hairSaloon(input) {
  let index = 0;
  let goal = Number(input[index]);
  index++;

  let revenue = 0;
  let goalReched = false;

  let command = input[index];
  index++;

  while (command !== 'closed') {
    let typeOfService = command;

    if (typeOfService === 'haircut') {
      let typeOfHaircut = input[index];
      index++;

      if (typeOfHaircut === 'mens') {
        revenue += 15;
      } else if (typeOfHaircut === 'ladies') {
        revenue += 20;
      } else if (typeOfHaircut === 'kids') {
        revenue += 10;
      }
    } else if (typeOfService === 'color') {
      let typeOfColor = input[index];
      index++;

      if (typeOfColor === 'touch up') {
        revenue += 20;
      } else if (typeOfColor === 'full color') {
        revenue += 30;
      }
    }

    if (revenue >= goal) {
      goalReched = true;
      break;
    }

    command = input[index];
    index++;
  }

  if (goalReched) {
    console.log('You have reached your target for the day!');
    console.log(`Earned money: ${revenue}lv.`);
  } else {
    let neededMoney = goal - revenue;
    console.log(`Target not reached! You need ${neededMoney}lv. more.`);
    console.log(`Earned money: ${revenue}lv.`);
  }
}

hairSaloon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color", 
"touch up",
"closed"]);

hairSaloon(["50",
"color",
"full color",
"haircut",
"ladies"]);