function calculateHarvestValue(squareMeters, grapePerSqM, requiredLitres, workers) {
  let totalWine = (squareMeters * grapePerSqM) * 0.4 / 2.5;
  if (totalWine >= requiredLitres) {
    let remainingWine = totalWine - requiredLitres;
    let wineForWorkers = (remainingWine) / workers;
    console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
    console.log(`${Math.ceil(remainingWine)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`);
  } else {
    let neededWine = requiredLitres - totalWine;
    console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`);
  }
}

calculateHarvestValue(650, 2, 175, 3);
calculateHarvestValue(1020, 1.5, 425, 4);