// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест

function trekkingMania(array) {
  let groupsTotal = Number(array[0]);

  let musalaGroups = 0;
  let montblancGroups = 0;
  let kilimanjaroGroups = 0;
  let k2Groups = 0;
  let everestGroups = 0;
  let totalPeople = 0;

  for (i = 1; i < groupsTotal + 1; i++) {
    let currentGroup = Number(array[i]);

    if (currentGroup <= 5) {
      musalaGroups += currentGroup;
      totalPeople += currentGroup;
    } else if (currentGroup <= 12) {
      montblancGroups += currentGroup;
      totalPeople += currentGroup;
    } else if (currentGroup <= 25) {
      kilimanjaroGroups += currentGroup;
      totalPeople += currentGroup;
    } else if (currentGroup <= 40) {
      k2Groups += currentGroup;
      totalPeople += currentGroup;
    } else {
      everestGroups += currentGroup;
      totalPeople += currentGroup;
    }
  }

  let totalMusala = (musalaGroups / totalPeople) * 100;
  let totalMontblanc = (montblancGroups / totalPeople) * 100;
  let totalKilimanjaro = (kilimanjaroGroups / totalPeople) * 100;
  let totalK2 = (k2Groups / totalPeople) * 100;
  let totalEverest = (everestGroups / totalPeople) * 100;

  console.log(`${totalMusala.toFixed(2)}%`);
  console.log(`${totalMontblanc.toFixed(2)}%`);
  console.log(`${totalKilimanjaro.toFixed(2)}%`);
  console.log(`${totalK2.toFixed(2)}%`);
  console.log(`${totalEverest.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
