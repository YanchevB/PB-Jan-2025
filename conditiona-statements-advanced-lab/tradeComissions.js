function tradeComissions(city, sales) {
  let comission = 0;
  switch (city) {
    case 'Sofia' :
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.05;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.07;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.08;
      } else if (sales > 10000) {
        comission = sales * 0.12;
      } else {
        console.log('error');
        return;
      }
      console.log(comission.toFixed(2));
      break;
    case 'Varna' :
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.045;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.075;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.1;
      } else if (sales > 10000) {
        comission = sales * 0.13;
      } else {
        console.log('error');
        return;
      }
      console.log(comission.toFixed(2));
      break;
    case 'Plovdiv' :
      if (sales >= 0 && sales <= 500) {
        comission = sales * 0.055;
      } else if (sales > 500 && sales <= 1000) {
        comission = sales * 0.08;
      } else if (sales > 1000 && sales <= 10000) {
        comission = sales * 0.12;
      } else if (sales > 10000) {
        comission = sales * 0.145;
      } else {
        console.log('error');
        return;
      }
      console.log(comission.toFixed(2));
      break;
    default : console.log('error');
  }
}

tradeComissions('Sofia', 1500);
tradeComissions('Plovdiv', 499.99);
tradeComissions('Varna', 3874.50);
tradeComissions('Kaspichan', -50);