function calculateChristmasSpend(wrapPaper, cloth, glue, discount) {
  let wrapPaperCost = wrapPaper * 5.80;
  let clothCost = cloth * 7.20;
  let glueCost = glue * 1.20;

  let totalCost = wrapPaperCost + clothCost + glueCost;

  let totalDiscount = totalCost * (discount / 100);
  let finalCost = totalCost - totalDiscount;

  console.log(finalCost.toFixed(3));
}

calculateChristmasSpend(2, 3, 2.5, 25);