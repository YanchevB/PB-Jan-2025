function areaOfFigures(type, side1, side2) {
  let area = 0;
  if (type === 'square') {
    area = side1 * side1;
    console.log(area.toFixed(3));
  } else if (type === 'rectangle') {
    area = side1 * side2;
    console.log(area.toFixed(3));
  } else if (type === 'circle') {
    area = Math.PI * Math.pow(side1, 2);
    console.log(area.toFixed(3));
  } else if (type === 'triangle') {
    area = (side1 * side2) / 2;
    console.log(area.toFixed(3))
  }
}

areaOfFigures('square', 5);
areaOfFigures('rectangle', 7, 2.5);
areaOfFigures('circle', 6);
areaOfFigures('triangle', 4.5, 20)