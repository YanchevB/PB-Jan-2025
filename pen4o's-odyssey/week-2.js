function generateCorrectDoor() {
  const randomNumber = Math.random();
  let doorNumber;

  if (randomNumber < 1/3) {
    doorNumber = 1;
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    doorNumber = 2;
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    doorNumber = 3;
  }
  console.log(doorNumber) //Проверка на цифрата, за да се уверя, че следващият код ще проработи
  return doorNumber;
}

function guessTreasureDoor(number) {
  const doorNumber = generateCorrectDoor();

  if (number > 3) {
    console.log('Invalid choice. Please select Door 1, 2, or 3.');
    return;
  } else if (number === doorNumber) {
    console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNumber}!`);
  } else {
    console.log('A bucket of cold water splashes on you! Unlucky Pen4o!');
  }
}

guessTreasureDoor(1);

