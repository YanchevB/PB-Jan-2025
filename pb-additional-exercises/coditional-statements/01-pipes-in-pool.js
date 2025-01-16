function waterFilling(poolVolume, p1Debit, p2Debit, hoursAway) {
  let pipe1Total = p1Debit * hoursAway;
  let pipe2Total = p2Debit * hoursAway;
  let pipesTotal = pipe1Total + pipe2Total;
  let percentageFull = (pipesTotal) / poolVolume * 100;

  if (pipesTotal <= poolVolume) {
    let pipe1Percent = pipe1Total / pipesTotal * 100;
    let pipe2Percent = pipe2Total / pipesTotal * 100;
    console.log(`The pool is ${percentageFull.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`)
  } else {
    let litresExcess = pipesTotal - poolVolume;
    console.log(`For ${hoursAway.toFixed(2)} hours the pool overflows with ${litresExcess.toFixed(2)} liters.`)
  }
}

waterFilling(1000, 100, 120, 3);
waterFilling(100, 100, 100, 2.5);