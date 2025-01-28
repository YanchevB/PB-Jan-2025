//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
// 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

function depositCalculator(depositSum, depositTerm, annualInterestRate) {
  let annualInterestDecimal = annualInterestRate / 100
  let totalSum = depositSum + depositTerm * ((depositSum * annualInterestDecimal) / 12);
  console.log(totalSum);
};

depositCalculator(200, 3, 5.7);
