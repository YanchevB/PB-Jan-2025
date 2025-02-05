function smallShop(product, city, quantity) {
  let cost = 0;

  switch (city) {
    case 'Sofia' :
      if (product === 'coffee') {
        cost = quantity * 0.5;
      } else if (product === 'water') {
        cost = quantity * 0.8;
      } else if (product === 'beer') {
        cost = quantity * 1.2;
      } else if (product === 'sweets') {
        cost = quantity * 1.45;
      } else if (product === 'peanuts') {
        cost = quantity * 1.6;
      }
      break;
    case 'Plovdiv' :
      if (product === 'coffee') {
        cost = quantity * 0.4;
      } else if (product === 'water') {
        cost = quantity * 0.7;
      } else if (product === 'beer') {
        cost = quantity * 1.15;
      } else if (product === 'sweets') {
        cost = quantity * 1.30;
      } else if (product === 'peanuts') {
        cost = quantity * 1.5;
      }
      break;
    case 'Varna' :
      if (product === 'coffee') {
        cost = quantity * 0.45;
      } else if (product === 'water') {
        cost = quantity * 0.7;
      } else if (product === 'beer') {
        cost = quantity * 1.10;
      } else if (product === 'sweets') {
        cost = quantity * 1.35;
      } else if (product === 'peanuts') {
        cost = quantity * 1.55;
      }
      break;
    default : console.log('Error');
  }

  console.log(cost);
}

smallShop("coffee", "Varna", 2);
smallShop("peanuts", "Plovdiv", 1);
smallShop("beer", "Sofia", 2);
smallShop("water", "Plovdiv", 2);
smallShop("sweets", "Sofia", 2.23)