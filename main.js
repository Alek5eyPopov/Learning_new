"use strict";
let numberOfFilms = 0;
numberOfFilms = prompt('How many films have you watched ?', 0);

let personalMovieDB = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],
  privat : false
};
 let tmp = 4;
let movie = '';
movie = prompt('Last film you saw ?', 'Titanic');
personalMovieDB.movies[movie] = prompt('What raiting did you get ?', 1.0);

movie = prompt('Last film you saw ?', 'Titanic');
personalMovieDB.movies[movie] = prompt('What raiting did you get ?', 1.0);

console.log(personalMovieDB);
console.log(personalMovieDB.movies);