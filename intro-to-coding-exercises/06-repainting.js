// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър

// Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.

// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

function calculateRepaintingCost(nylonSquareMeters, paintLitres, thinnerLitres, hoursLabour) {
  let totalNylonCost = (nylonSquareMeters + 2) * 1.50;
  let totalPaintCost = (paintLitres + (0.1 * paintLitres)) * 14.50;
  let totalThinnerCost = thinnerLitres * 5;
  let totalMaterialCost = totalNylonCost + totalPaintCost + totalThinnerCost + 0.40;
  let totalLabourCost = (totalMaterialCost * 0.3) * hoursLabour;
  let totalCost = totalLabourCost + totalMaterialCost;
  console.log(totalCost);
};

calculateRepaintingCost(10, 11, 4, 8);