// •	"Facebook" -> 150 лв.
// •	"Instagram" -> 100 лв.
// •	"Reddit" -> 50 лв.

function calculateSalary(array) {
  let numberOfTabs = array[0];
  let salary = array[1];

  for (i = 2; i < numberOfTabs + 2; i++) {
    if (salary <= 0) {
      console.log('You have lost your salary.');
      return;
    } else {
      if (array[i] === 'Facebook') {
        salary -= 150;
      } else if (array[i] === 'Instagram') {
        salary -= 100;
      } else if (array[i] === 'Reddit') {
        salary -= 50;
      }
    }
  }
  console.log(Math.trunc(salary));
}

calculateSalary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
calculateSalary([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]);
calculateSalary([3, 500, "Facebook", "Stackoverflow.com", "softuni.bg"]);

