function calculateMoney(magnolias, hyacinths, roses, cacti, priceOfGift) {
  let magnoliaPrice = magnolias * 3.25;
  let hyacinthPrice = hyacinths * 4;
  let rosePrice = roses * 3.5;
  let cactusPrice = cacti * 8;
  let totalMoney = (magnoliaPrice + hyacinthPrice + rosePrice + cactusPrice) * 0.95;

  if (totalMoney >= priceOfGift) {
    let remainingMoney = totalMoney - priceOfGift;
    console.log(`She is left with ${Math.floor(remainingMoney)} leva.`);
  } else {
    let neededMoney = priceOfGift - totalMoney;
    console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
  }
}

calculateMoney(2, 3, 5, 1, 50);
calculateMoney(15, 7, 5, 10, 100);