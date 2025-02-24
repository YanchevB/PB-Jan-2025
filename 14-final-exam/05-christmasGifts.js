function christmasGifts(input) {
  let adults = 0;
  let kids = 0;
  let totalToysPrice = 0;
  let totalSweatersPrice = 0;

  let index = 0;
  let command = input[index];
  index ++;

  while (command !== 'Christmas') {
    let yearsOld = Number(command);

    if (yearsOld <= 16) {
      kids++;
      totalToysPrice += 5;
    } else {
      adults++;
      totalSweatersPrice += 15;
    }

    command = input[index];
    index++;
  }

  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${totalToysPrice}`);
  console.log(`Money for sweaters: ${totalSweatersPrice}`);
}

christmasGifts([
  "16",
  "20",
  "46",
  "12",
  "8",
  "20",
  "49",
  "Christmas"
]);

christmasGifts([
  "16",
  "16",
  "16",
  "16",
  "16",
  "Christmas"
]);
