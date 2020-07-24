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

let movie = '';


for( let i = 0; i < 2; i++){
	if (movie == '') {
		movie = prompt('Last film you saw ?', 'Titanic');
		if( movie == '' || movie.length > 50 || movie == null){
			alert('Film name must be filled! Name length must be < 50!');
			i--;
			continue;
		}
	}
	personalMovieDB.movies[movie] = prompt('What raiting did you get ?', 1.0);
	if( personalMovieDB.movies[movie] == '' || personalMovieDB.movies[movie] == null){
		alert( 'Film raiting must be filled!' );
		i--;
		continue;
	}
	movie = '';
}

// let j = 1;
// do{
// 	if (movie === '') {
// 		movie = prompt('Last film you saw ?', 'Titanic');
// 		if( movie === '' || movie.length > 50 || movie == null){
// 			alert('Film name must be filled! Name length must be < 50!');
// 			continue;
// 		}
// 	}
// 	personalMovieDB.movies[movie] = prompt('What raiting did you get ?', 1.0);
// 	if( personalMovieDB.movies[movie] === '' || personalMovieDB.movies[movie] == null){
// 		alert( 'Film raiting must be filled!' );
// 		continue;
// 	}
// 	j++;
// 	movie = '';
// } while( j < 3);

if(personalMovieDB.count < 11) {
	alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count < 31 ){
	alert('Вы классический зритель');
} else if(personalMovieDB.count > 30) {
	alert('Вы киноман');
} else{
	alert('Произошла ошибка');
}

console.log(personalMovieDB);
console.log(personalMovieDB.movies);