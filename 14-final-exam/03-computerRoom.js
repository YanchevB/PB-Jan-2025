function computerRoom(month, totalHours, totalPeople, timeOfDay) {
  let price = 0;

  switch (month) {
    case 'march':
    case 'april':
    case 'may': 
      if (totalPeople < 4 && timeOfDay === 'day') {
      price += 10.50; 
        if (totalHours >= 5) {
          price *= 0.50;
        }
      } else if (totalPeople >= 4 && timeOfDay === 'day') {
        price += 10.50 * 0.90;
        if (totalHours >= 5) {
          price *= 0.50;
        }
      } else if (totalPeople < 4 && timeOfDay === 'night') {
        price += 8.40;
        if (totalHours >= 5) {
          price *= 0.50;
        }
      } else if (totalPeople >= 4 && timeOfDay === 'night') {
        price += 8.40 * 0.90
        if (totalHours >= 5) {
          price *= 0.50;
        }
      }
      break;
    case 'june':
    case 'july':
    case 'august': 
      if (totalPeople < 4 && timeOfDay === 'day') {
      price += 12.60;
        if (totalHours >= 5) {
          price *= 0.50;
        }
      } else if (totalPeople >= 4 && timeOfDay === 'day') {
        price += 12.60 * 0.90;
        if (totalHours >= 5) {
          price *= 0.50;
        }
      } else if (totalPeople < 4 && timeOfDay === 'night') {
        price += 10.20;
        if (totalHours >= 5) {
          price *= 0.50;
        }
      } else if (totalPeople >= 4 && timeOfDay === 'night') {
        price += 10.20 * 0.90
        if (totalHours >= 5) {
          price *= 0.50;
        }
      }
      break;
  }

  let totalPrice = price * totalHours * totalPeople;

  console.log(`Price per person for one hour: ${price.toFixed(2)}`);
  console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}

computerRoom('march', 3, 3, 'day');
computerRoom('july', 5, 5, 'night');