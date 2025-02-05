function calculateLivingSpace(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;
  let height = Number(input[index]);
  index++;

  let livingSpace = width * length * height;

  let command = input[index];
  index++;

  while (command !== 'Done') {
    let box = Number(command);

    livingSpace -= box;

    if (livingSpace <= 0) {
      console.log(`No more free space! You need ${Math.abs(livingSpace)} Cubic meters more.`);
      break;
    }

    command = input[index];
    index++;
  }

  if (livingSpace > 0) {
    console.log(`${livingSpace} Cubic meters left.`);
  }
}

calculateLivingSpace([
  "10", 
  "10",
  "2",
  "20",
  "20",
  "20",
  "20",
  "122"
]);

calculateLivingSpace([
  "10", 
  "1",
  "2",
  "4", 
  "6",
  "Done"
]);
