function building(floors, rooms) {
  for (let currentFloor = floors; currentFloor > 0; currentFloor--) {
    let floorArrangement = '';

    for (let currentRoom = 0; currentRoom < rooms; currentRoom++) {
      if (currentFloor === floors) {
        floorArrangement += `L${currentFloor}${currentRoom} `;
      } else if (currentFloor % 2 === 0) {
        floorArrangement += `O${currentFloor}${currentRoom} `;
      } else {
        floorArrangement += `A${currentFloor}${currentRoom} `;
      }
    }

    console.log(floorArrangement);
  } 
}

building(6, 4);