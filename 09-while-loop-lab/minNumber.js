function minNumber(input) {
  let index = 0;
  let command = input[index];
  index++;

  let min = Number.MAX_SAFE_INTEGER;

  while (command !== 'Stop') {
    let currentNum = Number(command);
    if (min > currentNum) {
      min = currentNum;
    }

    command = input[index];
    index++;
  }
  console.log(min);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
