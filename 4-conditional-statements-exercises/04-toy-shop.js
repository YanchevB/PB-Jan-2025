// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]

// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.


function vacationCost(vacationCost, puzzles, dolls, bears, minions, trucks) {
  let totalToys = puzzles + dolls + bears + minions + trucks;
  let totalRevenue = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

  if (totalToys >= 50) {
    totalRevenue *= 0.75;
  }

  totalRevenue *= 0.9;

  if (totalRevenue >= vacationCost) {
    let remainingMoney = totalRevenue - vacationCost
    console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`)
  } else {
    let neededMoney = vacationCost - totalRevenue;
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`)
  } 
}

vacationCost(40.8, 20, 25, 30, 50, 10);
vacationCost(320, 8, 2, 5, 5, 1);