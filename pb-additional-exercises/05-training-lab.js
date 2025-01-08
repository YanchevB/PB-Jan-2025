function calculateWorkingSpaces(wInMetres, hInMetres) {
  let wInCm = wInMetres * 100;
  let hInCm = hInMetres * 100;
  let spacesWidth = Math.floor((hInCm - 100) / 70); //round down
  let spacesHeight = Math.floor(wInCm / 120); //round down
  let totalSpace = (spacesHeight * spacesWidth) - 3;
  console.log(totalSpace);
};

calculateWorkingSpaces(15, 8.9);