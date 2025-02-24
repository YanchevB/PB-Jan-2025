function computerFirm(input) {
  let index = 0;
  let totalComputers = Number(input[index]);
  index++;

  let totalSales = 0;
  let totalRating = 0;
  
  let typeOfModel = input[index];
  index++;

  for (let i = 1; i < input.length; i++) {
    let rating = Number(typeOfModel) % 10;
    let sales = typeOfModel[0] + typeOfModel[1];

    if (rating === 3) {
      totalSales += Number(sales) * 0.5;
    } else if (rating === 4) {
      totalSales += Number(sales) * 0.7;
    } else if (rating === 5) {
      totalSales += Number(sales) * 0.85;
    } else if (rating === 6) {
      totalSales += Number(sales);
    }

    totalRating += rating;

    typeOfModel = input[index];
    index++;
  }

  console.log(totalSales.toFixed(2));
  console.log((totalRating / totalComputers).toFixed(2));
}

computerFirm([
  "3",
  "103",
  "103",
  "103"
]);

computerFirm(["2",
"204",
"206"])
;