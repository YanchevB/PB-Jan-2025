function calculateCakePieces(input) {
  let index = 0;
  let width = Number(input[index]);
  index++;
  let length = Number(input[index]);
  index++;

  let totalPieces = width * length;

  let command = input[index];
  index++;

  while (command !== 'STOP') {
    let piecesForGuests = Number(command);
    totalPieces -= piecesForGuests;

    if (totalPieces <= 0) {
      break;
    }
    command = input[index];
    index++;
  }

  if (totalPieces <= 0) {
    console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
  } else {
    console.log(`${totalPieces} pieces are left.`);
  }
}

calculateCakePieces([
  "10",
  "10",
  "20",
  "20",
  "20",
  "20",
  "21"
]);

calculateCakePieces([
  "10",
  "2",
  "2",
  "4",
  "6",
  "STOP"
]);
