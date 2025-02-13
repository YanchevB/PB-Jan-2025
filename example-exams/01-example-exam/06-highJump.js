function highJump(input) {
  let targetJump = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;

  let jump = Number(command);
  let totalJumps = 0;
  let hasFailed = false;
  let lastJump = 0;

  for (let currentJump = targetJump - 30; currentJump <= targetJump; currentJump += 5) {
    let jumpCounter = 0;

    while (jumpCounter !== 3) {
      jump = Number(command);

      if (jump > currentJump) {
        command = input[index];
        index++;

        lastJump = currentJump;

        break;

      } else {
        jumpCounter++;
        totalJumps++;
      }

      lastJump = currentJump;

      command = input[index];
      index++;
    }

    if (jumpCounter === 3) {
      hasFailed = true;
      break;
    }
    
    totalJumps++;
  }

  if (!hasFailed) {
    console.log(`Tihomir succeeded, he jumped over ${targetJump}cm after ${totalJumps} jumps.`);
  } else {
    console.log(`Tihomir failed at ${lastJump}cm after ${totalJumps} jumps.`);
  }
}

highJump([
  "231",
  "205",
  "212",
  "213",
  "228",
  "229",
  "230",
  "235"
]);

highJump([
  "250",
  "225",
  "224",
  "225",
  "228",
  "231",
  "235",
  "234",
  "235"
]);
