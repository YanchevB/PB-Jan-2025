// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 

// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
// Цената на доставка е 2.50 лв и се начислява най-накрая.  

// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]

function calculateFoodDelivery(chickenMenus, fishMenus, vegMenus) {
  let totalSumChicken = chickenMenus * 10.35;
  let totalSumFish = fishMenus * 12.40;
  let totalSumVeg = vegMenus * 8.15;
  let totalDessert = (totalSumChicken + totalSumFish + totalSumVeg) * 0.2;
  let totalSum = totalDessert + totalSumChicken + totalSumFish + totalSumVeg;
  let finalSum = totalSum + 2.50;
  console.log(finalSum);
}

calculateFoodDelivery(2, 4, 3)
