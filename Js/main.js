const numberOfFilms = +prompt('How many films do you watch?', '');




const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const yourLastWatchMovie = prompt('What the last movie do you watch?', '');
const yourScore = prompt('Your score', '');

personalMovieDB.movies[yourLastWatchMovie] = yourScore

console.log(personalMovieDB);

