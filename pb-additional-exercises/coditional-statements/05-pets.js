function calculateFoodForPets(daysAway, foodInKg, foodDog, foodCat, foodTurtle) {
  let totalFoodDog = foodDog * daysAway;
  let totalFoodCat = foodCat * daysAway;
  let totalFoodTurtle = (foodTurtle * daysAway) / 1000;
  let totalFood = totalFoodDog + totalFoodCat + totalFoodTurtle;

  if (foodInKg >= totalFood) {
    let leftoverFood = foodInKg - totalFood;
    console.log(`${Math.floor(leftoverFood)} kilos of food left.`);
  } else {
    let neededFood = totalFood - foodInKg;
    console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
  }
}

calculateFoodForPets(2, 10, 1, 1, 1200);
calculateFoodForPets(5, 10, 2.1, 0.8, 321);