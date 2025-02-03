function maxNumber(input) {
  let index = 0;
  let command = input[index];
  index++;

  let max = Number.MIN_SAFE_INTEGER;

  while (command !== 'Stop') {
    let currentNum = Number(command);
    if (currentNum > max) {
      max = currentNum;
    }

    command = input[index];
    index++;
  }
  console.log(max);
}

maxNumber([
  "10",
  "99",
  "80",
  "70",
  "Stop"
]);

maxNumber(["-1",
"-2",
"Stop"])



