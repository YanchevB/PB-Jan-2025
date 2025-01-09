// Разхода на зелената боя е 1 литър за 3.4 м2, а на червената – 1 литър за 4.3 м2.

// •	Предната и задната стена са квадрати със страна „x“
//  o	на предната стена има правоъгълна врата с широчина 1.2м и височина 2м
// •	Страничните стени са правоъгълници със страни „x“ и „y“
//  o	и на двете странични стени има по един квадратен прозорец със страна 1.5м
//  Покривът има следните размери:
// •	Два правоъгълника със страни „x“ и „y“
// •	Два равностранни триъгълника със страна „x“ и височина „h“


function calculateTotalPaint(x, y, h) {
  let frontAndBackWall = ((x * x) * 2) - (1.2 * 2);
  let sideWalls = 2 * (x * y) - 2 * (1.5 * 1.5);
  let roof = (x * y) * 2 + ((x * h) / 2) * 2;
  let totalBluePaint = ((frontAndBackWall + sideWalls) / 3.4).toFixed(2);
  let totalRedPaint = (roof / 4.3).toFixed(2);
  console.log(totalBluePaint);
  console.log(totalRedPaint);
}

calculateTotalPaint(6, 10, 5.2)