class Movie {
  constructor(title, director, year, genre) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.genre = genre;
  }
}

const movies = [
  new Movie('fea', 'faefe', 3223, '3kfes'),
  new Movie('fa33qn', '1283kbjkfb', 1231, 'jkhj43'),
];

function movieAnalizer(array) {
  let returnObj = {
    numMovies: 0,
    numYears: 0,
    genreCounts: 0,
  };
  let uniqueYear = [];
  let uniqueGenre = [];

  for (let i = 0; i < array.length; i++) {
    returnObj.numMovies++;
    for (let x = 0; x < uniqueYear.length; x++) {
      if (array[i].year != uniqueYear[x]) {
        uniqueYear[uniqueYear.length] = array[i].year;
      }
      if (array[i].genre != uniqueGenre[x]) {
        uniqueGenre[uniqueGenre.length] = array[i].genre;
      }
    }
  }
  returnObj.numYears = uniqueYear.length;
  returnObj.genreCounts = uniqueGenre.length;
  return returnObj;
}

console.log(movieAnalizer(movies));
