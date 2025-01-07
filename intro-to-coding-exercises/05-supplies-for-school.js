// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)

// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]

function calculateSuppliesSum(totalPens, totalMarkers, totalCleanerLitres, discount) {
  let penCost = totalPens * 5.80;
  let markerCost = totalMarkers * 7.20;
  let cleanerCost = totalCleanerLitres * 1.20;
  let totalDiscount = discount / 100;
  let totalCost = penCost + markerCost + cleanerCost;
  let costWithDiscount = totalCost - (totalCost * totalDiscount);
  console.log(costWithDiscount);
};

calculateSuppliesSum(2, 3, 4, 25)