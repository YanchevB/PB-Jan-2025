function oldBooks(input) {
  let index = 0;
  let favouriteBook = input[index];
  index++;

  let currentBook = input[index];
  index++;

  let searchedBooks = 0;
  let bookIsFound = false;

  while (currentBook !== 'No More Books') {
    if (currentBook === favouriteBook) {
      bookIsFound = true;
      break;
    } else {
      searchedBooks++;
    }

    currentBook = input[index];
    index++;
  }
  
  if (!bookIsFound) {
    console.log('The book you search is not here!');
    console.log(`You checked ${searchedBooks} books.`);
  } else {
    console.log(`You checked ${searchedBooks} books and found it.`);
  }
}

oldBooks([
  "Troy",
  "Stronger",
  "Life Style",
  "Troy"
]);

oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books"
]);

oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne"
]);


