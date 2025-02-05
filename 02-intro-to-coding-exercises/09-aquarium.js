// 1.	Дължина в см – цяло число в интервала [10 … 500]
// 2.	Широчина в см – цяло число в интервала [10 … 300]
// 3.	Височина в см – цяло число в интервала [10… 200]
// 4.	Процент  – реално число в интервала [0.000 … 100.000]

// Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/

function calculateLitres(lengthInCm, widthInCm, heightInCm, perCentOccupied) {
  let volume = lengthInCm * widthInCm * heightInCm;
  let volumeInDecimeter = volume / 1000; 
  let occupiedSpace = perCentOccupied / 100;
  let finalLitres = volumeInDecimeter * (1 - occupiedSpace); // 1 е всъщност 100%, демек от цялото пространство махаме заетото и ни остава остатъчното свободно пространство
  console.log(finalLitres);
};

calculateLitres(85, 75, 47, 17)