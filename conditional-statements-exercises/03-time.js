function timeAfter15Min(hours, minutes) {
  let totalMin = hours * 60 + minutes;
  let finalTime = totalMin + 15;
  let finalHour = Math.floor(finalTime / 60);
  let finalMinutes = finalTime % 60;

  if (finalHour === 24) {
    finalHour = 0;
  }

  if (finalMinutes < 10) {
    console.log(`${finalHour}:0${finalMinutes}`);
  } else {
    console.log(`${finalHour}:${finalMinutes}`);
  }
}

timeAfter15Min(1, 46);
timeAfter15Min(23, 59); 