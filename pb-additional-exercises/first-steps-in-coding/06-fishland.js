// •	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
// •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
// •	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
// •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
// •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]


function calculateTotal(priceMackerelPerKg, priceSpratPerKg, bonitoKg, scadKg, musselsKg) {
  let totalPriceBonito = ((priceMackerelPerKg + (priceMackerelPerKg * 0.60)) * bonitoKg);
  let totalPriceScad = ((priceSpratPerKg + (priceSpratPerKg * 0.80)) * scadKg);
  let totalPriceMussels = (7.50 * musselsKg);
  let totalPrice = (totalPriceBonito + totalPriceScad + totalPriceMussels).toFixed(2)
  console.log(totalPrice);
};

calculateTotal(6.90, 4.20, 1.5, 2.5, 1);

