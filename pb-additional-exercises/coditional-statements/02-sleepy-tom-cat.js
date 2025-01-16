//•	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
//•	Когато почива, стопанинът му си играе с него  по 127 минути на ден.

function calculateSleep(daysOff) {
  let workDays = 365 - daysOff;
  let totalPlayTime = workDays * 63 + daysOff * 127;
  let differencePlaytime = Math.abs(30000 - totalPlayTime);
  let playtimeHours = Math.floor(differencePlaytime / 60);
  let playtimeMinutes = differencePlaytime % 60;

  if (totalPlayTime >= 30000) {
    console.log('Tom will run away');
    console.log(`${playtimeHours} hours and ${playtimeMinutes} minutes more for play`);
  } else {
    console.log('Tom sleeps well');
    console.log(`${playtimeHours} hours and ${playtimeMinutes} minutes less for play`)
  }
}

calculateSleep(20);
calculateSleep(113);