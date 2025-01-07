function validateTriangle(a, b, c) {
  if (a < c + b && b < a + c && c < a + b) {
    console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} has been validated. Pen4o, you may begin your journey!`);
  } else {
    console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} is invalid. Pen4o remains stuck!`);
  };
};

validateTriangle(1, 2, 3);
validateTriangle(3, 4, 5);

