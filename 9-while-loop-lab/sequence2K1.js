function sequence2K1(num) {
  let n = Number(num);
  let k = 1;

  while (k <= n) {
    console.log(k);
    k = k * 2 + 1;
  }
}

sequence2K1(8);