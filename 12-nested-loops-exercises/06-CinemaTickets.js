function calculateCinemaTickets(input) {
  let kidTickets = 0;
  let studentTickets = 0;
  let standardTickets = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== 'Finish') {
    let movieTitle = command;
    let freeSeats = Number(input[index]);
    index++;
    let seatsTaken = 0;

    let command1 = input[index];
    index++;

    while (command1 !== 'End') {
      let ticketType = command1;
    
      if (ticketType === 'kid') {
        kidTickets++;
      } else if (ticketType === 'student') {
        studentTickets++;
      } else if (ticketType === 'standard') {
        standardTickets++;
      }

      seatsTaken++;
      
      if (freeSeats === seatsTaken) {
        break;
      }
 
      command1 = input[index];
      index++;
    }
    
    console.log(`${movieTitle} - ${((seatsTaken / freeSeats) * 100).toFixed(2)}% full.`);

    command = input[index];
    index++;

  }
  
  let totalTickets = kidTickets + studentTickets + standardTickets;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
  console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

calculateCinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish"
]);
