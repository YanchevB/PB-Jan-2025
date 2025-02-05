function calculateCinemaTickets(screening, rows, columns) {
  let cost = 0;

  if (screening === 'Premiere') {
    cost = rows * columns * 12;
  } else if (screening === 'Normal') {
    cost = rows * columns * 7.5;
  } else if (screening === 'Discount') {
    cost = rows * columns * 5;
  }

  console.log(`${cost.toFixed(2)} leva`);
}

calculateCinemaTickets("Premiere", 10, 12);