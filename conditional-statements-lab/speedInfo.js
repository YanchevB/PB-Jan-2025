function showSpeedInfo(speed) {
  if (speed <= 10) {
    console.log('slow');
  } else if (speed <= 50) {
    console.log('average')
  } else if (speed <= 150) {
    console.log('fast')
  } else if (speed <= 1000) {
    console.log('ultra fast')
  } else {
    console.log('extremely fast')
  }
}

showSpeedInfo(8);
showSpeedInfo(49.5);
showSpeedInfo(126);
showSpeedInfo(160);
showSpeedInfo(3500);