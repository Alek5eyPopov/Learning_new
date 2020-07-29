"use strict";

let personalMovieDB = {
	count : 0,
	movies : {},
	actors : {},
	genres : [],
	privat : false,
	start : function(){
		let numberOfFilms;
		numberOfFilms = +prompt('How many films have you watched ?', '');
		while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
			numberOfFilms = +prompt('How many films have you watched ?', '');
		}
		this.count = numberOfFilms;
	},
	rememberMyFilms : function(){
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
			this.movies[movie] = prompt('What raiting did you get ?', 1.0);
			if( this.movies[movie] == '' || this.movies[movie] == null){
				alert( 'Film raiting must be filled!' );
				i--;
				continue;
			}
			movie = '';
		}
	},
	detectPersonalLevel : function(){
		if(this.count < 11) {
			alert('Просмотрено довольно мало фильмов');
		} else if(this.count < 31 ){
			alert('Вы классический зритель');
		} else if(this.count > 30) {
			alert('Вы киноман');
		} else{
			alert('Произошла ошибка');
		}
	},
	showMyDB : function(){
		if (this.privat == false) {
			console.log(this);
			console.log(this.movies);
		}
	},
	writeYourGenres : function(){
		let geners = [];
		for (let index = 1; index < 4; index++) {
			geners[index - 1] = prompt(`Ваш любимый жанр под номером ${index}`, 1.0);
			while( geners[index - 1] == '' || geners[index - 1] == null || isNaN(geners[index - 1]) ) {
				geners[index - 1] = prompt(`Ваш любимый жанр под номером ${index}`, 1.0);
			}
		} 
		geners.forEach( function(element, indexx){
			console.log(`Любимый жанр ${indexx + 1} - это ${element}!`);
		}
		);
	},
	toggleVisibleMyDB : function(){
		if (this.privat == false) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	}
  };

  personalMovieDB.start();
  personalMovieDB.rememberMyFilms();
  personalMovieDB.detectPersonalLevel();
  personalMovieDB.showMyDB();
  personalMovieDB.writeYourGenres();

  personalMovieDB.toggleVisibleMyDB();
  personalMovieDB.showMyDB();


