// буква	  a	e	i	o	u
// стойност	1	2	3	4	5


function vowelSum(char) {
  let sum = 0;

  for (let i = 0; i < char.length; i++) {
    if (char[i] === 'a') {
      sum += 1;
    } else if (char[i] === 'e') {
      sum += 2;
    } else if (char[i] === 'i') {
      sum += 3;
    } else if (char[i] === 'o') {
      sum += 4;
    } else if (char[i] === 'u') {
      sum += 5;
    }
  }
  console.log(sum);
}

vowelSum('bamboo');