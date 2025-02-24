function excursionCalculator(totalPeople, season) {
  let cost = 0;

  switch (season) {
    case 'spring':
      if (totalPeople <= 5) {
        cost += 50 * totalPeople;
      } else {
        cost += 48 * totalPeople;
      }
      break;
    case 'summer':
      if (totalPeople <= 5) {
        cost += (48.50 * totalPeople) * 0.85;
      } else {
        cost += (45 * totalPeople) * 0.85;
      }
      break;
    case 'autumn':
      if (totalPeople <= 5) {
        cost += 60 * totalPeople;
      } else {
        cost += 49.50 * totalPeople;
      }
      break;
    case 'winter':
      if (totalPeople <= 5) {
        cost += (86 * totalPeople) * 1.08;
      } else {
        cost += (85 * totalPeople) * 1.08;
      }
      break;
  }

  console.log(`${cost.toFixed(2)} leva.`);
}

excursionCalculator(5, 'spring');
excursionCalculator(10, 'summer');
excursionCalculator(15, 'autumn');
excursionCalculator(20, 'winter');