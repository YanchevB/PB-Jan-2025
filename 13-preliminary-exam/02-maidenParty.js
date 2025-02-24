function maidenParty(maidenPartyCost, loveLetters, waxRoses, keychains, caricatures, fortuneCookies) {
  let loveLettersCost = loveLetters * 0.60;
  let waxRosesCost = waxRoses * 7.20;
  let keychainCost = keychains * 3.60;
  let caricatureCost = caricatures * 18.20;
  let fortuneCookiesCost = fortuneCookies * 22;

  let totalArticules = loveLetters + waxRoses + keychains + caricatures + fortuneCookies;
  let totalRevenue = (loveLettersCost + waxRosesCost + keychainCost + caricatureCost + fortuneCookiesCost);

  if (totalArticules >= 25) {
    totalRevenue *= 0.65;
  }

  let hostingCost = totalRevenue * 0.1;

  let finalRevenue = totalRevenue - hostingCost;

  if (maidenPartyCost <= finalRevenue) {
    let remainingMoney = finalRevenue - maidenPartyCost;
    console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
  } else {
    let moneyNeeded = maidenPartyCost - finalRevenue;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
  }

}

maidenParty(320, 8, 2, 5, 5, 1);