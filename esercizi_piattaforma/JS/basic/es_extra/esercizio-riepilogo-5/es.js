class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
}

let books = [
  new Book('Das Kapital', 'Carl Marx', 1867, 'fiction'),
  new Book('Mein kampf', 'Adolf Hitler', 1925, 'romance'),
  new Book(
    'The Doctrine of Fascism',
    'Benito Mussolini - Giovanni Gentile',
    1932,
    'Science Fiction'
  ),
];

function isModern(book) {
  if (book.year >= 2000) {
    return ' - Modern';
  } else {
    return '';
  }
}

function isScienceFiction(book) {
  if (book.genre == 'Science Fiction') {
    return ' SciFi';
  }
  {
    return '';
  }
}

function printFormatter(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      array[i].title +
        ' di ' +
        array[i].author +
        isModern(array[i]) +
        isScienceFiction(array[i])
    );
  }
}

printFormatter(books);
