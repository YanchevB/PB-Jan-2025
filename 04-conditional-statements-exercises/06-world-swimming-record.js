function swimmingRecord(recordInSec, distance, secondsPerM) {
  let timeIvan = secondsPerM * distance;
  let timeLost = Math.floor(distance / 15) * 12.5;
  let totalTime = timeIvan + timeLost;

  if (totalTime < recordInSec) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
  } else {
    let secondsNeeded = totalTime - recordInSec
    console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
  }
}

swimmingRecord(10464, 1500, 20);
swimmingRecord(55555.67, 3017, 5.03);