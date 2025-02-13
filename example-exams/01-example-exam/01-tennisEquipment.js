function calculateEquipmentCost(racquetCost, racquetN, shoesN) {
  let shoesCost = racquetCost / 6;
  let totalShoes = shoesCost * shoesN;
  let totalRacquet = racquetCost * racquetN
  let otherEquipmentCost = (totalShoes + totalRacquet) * 0.2;

  let totalEqupment = otherEquipmentCost + totalRacquet + totalShoes;
  let djokovicPayment = totalEqupment / 8;
  let sponsorPayment = (totalEqupment * 7) / 8;

  console.log(`Price to be paid by Djokovic ${Math.floor(djokovicPayment)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(sponsorPayment)}`);
}

calculateEquipmentCost(850, 4, 2);
calculateEquipmentCost(386, 7, 4);