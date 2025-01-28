function yardGreening(squareMeters) {
  let price = squareMeters * 7.61;
  let discountPrice = price * 0.18;
  let finalPrice = price - discountPrice;
  console.log(`The final price is: ${finalPrice} lv.`)
  console.log(`The discount is: ${discountPrice} lv.`)
}

yardGreening(550)