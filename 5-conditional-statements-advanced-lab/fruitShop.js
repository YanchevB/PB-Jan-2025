function fruitShop(fruit, day, quantity) {
  let cost = 0;

  switch (day) {
    default: console.log('error');
      break;
    case 'Monday' :
    case 'Tuesday' :
    case 'Wednesday' :
    case 'Thursday' :
    case 'Friday' : 
      if (fruit === 'banana') {
        cost = quantity * 2.5;
      } else if (fruit === 'apple') {
        cost = quantity * 1.2;
      } else if (fruit === 'orange') {
        cost = quantity * 0.85;
      } else if (fruit === 'grapefruit') {
        cost = quantity * 1.45;
      } else if (fruit === 'kiwi') {
        cost = quantity * 2.7;
      } else if (fruit === 'pineapple') {
        cost = quantity * 5.50;
      } else if (fruit === 'grapes') {
        cost = quantity * 3.85;
      } else {
        console.log('error');
        return;
      }
      console.log(cost.toFixed(2));
      break;
    case 'Saturday' : 
    case 'Sunday' :
      if (fruit === 'banana') {
        cost = quantity * 2.7;
      } else if (fruit === 'apple') {
        cost = quantity * 1.25;
      } else if (fruit === 'orange') {
        cost = quantity * 0.9;
      } else if (fruit === 'grapefruit') {
        cost = quantity * 1.6;
      } else if (fruit === 'kiwi') {
        cost = quantity * 3;
      } else if (fruit === 'pineapple') {
        cost = quantity * 5.6;
      } else if (fruit === 'grapes') {
        cost = quantity * 4.2;
      } else {
        console.log('error');
        return;
      }
      console.log(cost.toFixed(2))
      break;
  }
}

fruitShop('apple', 'Tuesday', 2);
fruitShop('tomato', 'Monday', 0.5);

