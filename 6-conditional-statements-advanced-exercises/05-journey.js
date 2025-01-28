function findJourneyLocation(budget, season) {
  let cost = 0;
  let location = '';
  let typeOfVacation = '';

  if (budget <= 100) {
    switch (season) {
      case 'summer':
        cost = budget * 0.3;
        typeOfVacation = 'Camp';
        break;
      case 'winter':
        cost = budget * 0.7;
        typeOfVacation = 'Hotel';
        break;
    }
    location = 'Bulgaria';

  } else if (budget <= 1000) {
    switch (season) {
      case 'summer':
        cost = budget * 0.4;
        typeOfVacation = 'Camp';
        break;
      case 'winter':
        cost = budget * 0.8;
        typeOfVacation = 'Hotel';
        break;
    }
    location = 'Balkans'

  } else {
    switch (season) {
      case 'summer':
        cost = budget * 0.9;
        typeOfVacation = 'Hotel';
        break;
      case 'winter':
        cost = budget * 0.9;
        typeOfVacation = 'Hotel';
        break;
    }
    location = 'Europe'
  }

  console.log(`Somewhere in ${location}`);
  console.log(`${typeOfVacation} - ${cost.toFixed(2)}`);
}

findJourneyLocation(50, "summer");