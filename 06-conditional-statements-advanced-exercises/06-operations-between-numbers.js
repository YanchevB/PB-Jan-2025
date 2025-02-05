function displayOperations(num1, num2, operator) {
  let result = 0;
  let evenOrOdd = '';

  switch (operator) {
  case '+':
    result = num1 + num2; 
    evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
    console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    break;
  case '-':
    result = num1 - num2;
    evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
    console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    break;
  case '*':
    result = num1 * num2;
    evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
    console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
    break;
  case '/':
    if (num2 === 0) {
      console.log(`Cannot divide ${num1} by zero`);
    } else {
      result = num1 / num2;
      console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    } 
    break;
  case '%':
    if (num2 === 0) {
      console.log(`Cannot divide ${num1} by zero`);
    } else {
      result = num1 % num2;
      console.log(`${num1} ${operator} ${num2} = ${result}`);
    }
    break;
  }
}

displayOperations(10, 12, '+');
displayOperations(10, 3, "%");
displayOperations(112, 0, '/');
displayOperations(10, 0, '%');
displayOperations(7, 3, '*');