"use strict";
let numberOfFilms;

function start(){
	numberOfFilms = +prompt('How many films have you watched ?', '');
	while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
		numberOfFilms = +prompt('How many films have you watched ?', '');
	}
}

start();

let personalMovieDB = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],
  privat : false
};

let movie = '';

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
	if(personalMovieDB.count < 11) {
		alert('Просмотрено довольно мало фильмов');
	} else if(personalMovieDB.count < 31 ){
		alert('Вы классический зритель');
	} else if(personalMovieDB.count > 30) {
		alert('Вы киноман');
	} else{
		alert('Произошла ошибка');
	}
}

function showMyDB(){
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
		console.log(personalMovieDB.movies);
	}
}

showMyDB();

function writeYourGenres(){
	let geners = [];
	for (let index = 1; index < 4; index++) {
		geners[index - 1] = prompt(`Ваш любимый жанр под номером ${index}`, 1.0);

	}
	console.log(geners);
}

writeYourGenres();