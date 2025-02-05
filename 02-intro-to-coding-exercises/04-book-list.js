// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function bookListHours(totalPages, pagesPerHour, remainingDays) {
  let pagesPerDayHours = totalPages / pagesPerHour;
  let hoursPerDay = pagesPerDayHours / remainingDays;
  console.log(hoursPerDay);
};

bookListHours(212, 20, 2)