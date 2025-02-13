function displayFootballResults(game1, game2, game3) {
  let gamesWon = 0;
  let gamesDrawn = 0;
  let gamesLost = 0;

  if (game1[0] > game1[2]) {
    gamesWon++;
  } else if (game1[0] < game1[2]) {
    gamesLost++;
  } else {
    gamesDrawn++;
  }

  if (game2[0] > game2[2]) {
    gamesWon++;
  } else if (game2[0] < game2[2]) {
    gamesLost++;
  } else {
    gamesDrawn++;
  }
  
  if (game3[0] > game3[2]) {
    gamesWon++;
  } else if (game3[0] < game3[2]) {
    gamesLost++;
  } else {
    gamesDrawn++;
  }
  
  console.log(`Team won ${gamesWon} games.`);
  console.log(`Team lost ${gamesLost} games.`);
  console.log(`Drawn games: ${gamesDrawn}`);
}

displayFootballResults('3:1', '0:2', '0:0');
displayFootballResults('4:2', '0:3', '1:0');
displayFootballResults('0:2', '0:1', '3:3');