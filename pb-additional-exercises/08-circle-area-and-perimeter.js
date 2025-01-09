function calculateCircleAandP(r) {
  let calculatedArea = (Math.PI * (r * r)).toFixed(2);
  let calculatedPerimeter = (2 * r * Math.PI).toFixed(2);
  console.log(calculatedArea);
  console.log(calculatedPerimeter)
}

calculateCircleAandP(3)