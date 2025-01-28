// Late", ако студентът пристига по-късно от часа на изпита.
// •	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
// •	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
// Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
// •	"mm minutes before the start" за идване по-рано с по-малко от 1.
// •	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
// •	 "mm minutes after the start" за закъснение под час.
// •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".


function onTimeForExam(hourExam, minutesExam, hourArrival, minutesArrival) {
  let totalExamTime = hourExam * 60 + minutesExam;
  let totalArrivalTime = hourArrival * 60 + minutesArrival;
  let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
  let diffHour = Math.floor(totalDiffTime / 60);;
  let diffMinutes = (totalDiffTime) % 60;

  if (totalExamTime < totalArrivalTime) {
    console.log('Late');
    if (totalDiffTime < 60) {
      console.log(`${diffMinutes} minutes after the start`);
    } else {
        if (diffMinutes < 10) {
          console.log(`${diffHour}:0${diffMinutes} hours after the start`);
        } else {
          console.log(`${diffHour}:${diffMinutes} hours after the start`);
        }
    }

  } else if (totalExamTime === totalArrivalTime) {
    console.log('On time');

  } else {
    if (totalDiffTime <= 30) {
      console.log('On time');
      console.log(`${totalDiffTime} minutes before the start`);
    } else {
      console.log('Early');

      if (totalDiffTime < 60) {
        console.log(`${diffMinutes} minutes before the start`);
      } else {
          if (diffMinutes < 10) {
            console.log(`${diffHour}:0${diffMinutes} hours before the start`);
          } else {
            console.log(`${diffHour}:${diffMinutes} hours before the start`);
          }
      }
    } 
  }
}

onTimeForExam(9, 30, 9, 50);
onTimeForExam(9, 0, 10, 30);
onTimeForExam(11, 30, 8, 12);