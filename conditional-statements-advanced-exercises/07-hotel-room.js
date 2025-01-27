function calculateCost(month, nights) {
  let studioCost = 0;
  let apartmentCost = 0;

  switch (month) {
    case 'May':
    case 'October':
      studioCost = 50 * nights;
      apartmentCost = 65 * nights;
      
      if (nights > 7 && nights <= 14) {
        studioCost *= 0.95;
      } else if (nights > 14) {
        studioCost *= 0.7;
      }
      break;

    case 'June':
    case 'September':
      studioCost = 75.2 * nights;
      apartmentCost = 68.7 * nights;
      
      if (nights > 14) {
        studioCost *= 0.8;
      }
      break;

    case 'July':
    case 'August':
      studioCost = 76 * nights;
      apartmentCost = 77 * nights;
      break;
  }

  if (nights > 14) {
    apartmentCost *= 0.9;
  }

  console.log(`Apartment: ${apartmentCost.toFixed(2)} lv.`);
  console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}

calculateCost("May", 15);
calculateCost("June", 14);
calculateCost("August", 20)