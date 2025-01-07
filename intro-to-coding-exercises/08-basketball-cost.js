// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function calculateBasketballEquipment(yearlyCost) {
  let sneakers = yearlyCost * 0.6;
  let jersey = sneakers * 0.8;
  let ball = jersey * (1 / 4);
  let accessories = ball * (1 / 5);
  let totalCost = sneakers + jersey + ball + accessories + yearlyCost;
  console.log(totalCost);
};

calculateBasketballEquipment(365)
