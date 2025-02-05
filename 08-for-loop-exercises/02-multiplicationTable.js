function multiplicationTable(multiplication) {
  for (let i = 1; i <= 10; i++) {
    let result = i * multiplication;
    console.log(`${i} * ${multiplication} = ${result}`);
  }
}

multiplicationTable(5);