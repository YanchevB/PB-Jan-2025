function giftsFromSanta(N, M, S) {
  let address = '';

  for (let i = M; i >= N; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === S) {
        break;
      } else {
        address += `${i} `;
      }
    }
  }

  console.log(address);
}

giftsFromSanta(1, 30, 15);
giftsFromSanta(1, 36, 12);