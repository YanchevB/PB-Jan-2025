function lunchBreak(series, episodeLength, breakLength) {
  let lunch = breakLength * 1/8;
  let rest = breakLength * 1/4;
  let timeLeft = breakLength - (lunch + rest);

  if (timeLeft >= episodeLength) {
    let spareTime = Math.ceil(timeLeft - episodeLength)
    console.log(`You have enough time to watch ${series} and left with ${spareTime} minutes free time.`);
  } else {
    let timeNeeded = Math.ceil(episodeLength - timeLeft);
    console.log(`You don't have enough time to watch ${series}, you need ${timeNeeded} more minutes.`);
  }
}

lunchBreak('Game of Thrones', 60, 96);
lunchBreak('Teen Wolf', 48, 60);