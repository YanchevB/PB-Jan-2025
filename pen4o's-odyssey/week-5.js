function activateWell(targetVolume, waterCups) {
  let wellCapacity = 0;
  let usedCup = 0;
  while (wellCapacity !== targetVolume) {
    
    for (let j = 0; j < waterCups.length; j++) {
      if (waterCups[j] < 0) {
        console.log('Failure! The well has been sealed.');
        return;
      }

      usedCup += waterCups[j];
    }

    wellCapacity += usedCup;

    if (wellCapacity > targetVolume) {
      console.log('Overflow! The well rejects your offering.');
      break;
    } else if (wellCapacity === targetVolume) {
      console.log('Success! The well reveals its precious treasure!');
    }  
  }
}

activateWell(50, [30, 20]);
activateWell(100, [10, 30, -10]);
activateWell(50, [30, 40]);