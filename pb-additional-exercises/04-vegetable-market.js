// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]


function calculateRevenue(priceVeg, priceFruit, totalKgVeg, totalKgFruit) {
  let totalPriceVeg = priceVeg * totalKgVeg;
  let totalPriceFruit = priceFruit * totalKgFruit;
  let totalRevenue = totalPriceFruit + totalPriceVeg;
  let revenueEuros = (totalRevenue / 1.94).toFixed(2);
  console.log(revenueEuros);
}

calculateRevenue(0.194, 19.4, 10, 10)