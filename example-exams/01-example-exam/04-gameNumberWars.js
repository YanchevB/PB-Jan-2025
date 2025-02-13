function numberWarsPoints(input) {
  let player1Points = 0;
  let player2Points = 0;

  let index = 0;
  let player1Name = input[index];
  index++;
  let player2Name = input[index];
  index++;
  let command = input[index];
  index++;

  while (command !== 'End of game') {
    let player1Move = Number(command);
    let player2Move = Number(input[index]);
    index++;

    if (player1Move > player2Move) {
      player1Points += player1Move - player2Move;
    } else if (player1Move < player2Move) {
      player2Points += player2Move - player1Move;
    } else if (player1Move === player2Move) {
      console.log('Number wars!');

      player1Move = Number(input[index])
      index++;
      player2Move = Number(input[index]);
      index++;

      if (player1Move > player2Move) {
        console.log(`${player1Name} is winner with ${player1Points} points`);
        break;
      } else if (player2Move > player1Move) {
        console.log(`${player2Name} is winner with ${player2Points} points`);
        break;
      }
    }

    command = input[index];
    index++;
  }

  if (command === 'End of game') {
    console.log(`${player1Name} has ${player1Points} points`);
    console.log(`${player2Name} has ${player2Points} points`);
  }
}

numberWarsPoints(['Desi', 'Niki', 7, 5, 3, 4, 3, 3, 5, 3]);
numberWarsPoints(['Elena', 'Simeon', 6, 3, 2, 5, 8, 9, 'End of game']);
numberWarsPoints(['Aleks', 'Georgi', 4, 5, 3, 2, 4, 3, 4, 4, 5, 2]);