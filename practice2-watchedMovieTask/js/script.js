/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let i = 0;

// while (i < personalMovieDB.count) {
//   const movie = prompt('Один из последних просмотренных фильмов?'),
//     rating = prompt('На сколько оцените его?');

//   if (
//     movie.length < 50 &&
//     movie != null &&
//     rating != null &&
//     movie != '' &&
//     rating != ''
//   ) {
//     personalMovieDB.movies[movie] = rating;
//     i++;
//   } else continue;
// }

// for (let i = 0; i < personalMovieDB.count; i++) {
//   const movie = prompt('Один из последних просмотренных фильмов?'),
//     rating = prompt('На сколько оцените его?');

//   if (
//     movie.length < 50 &&
//     movie != null &&
//     rating != null &&
//     movie != '' &&
//     rating != ''
//   ) {
//     personalMovieDB.movies[movie] = rating;
//   } else {
//     i--;
//     continue;
//   }
// }

let i = 0;

do {
  const movie = prompt('Один из последних просмотренных фильмов?'),
    rating = prompt('На сколько оцените его?');

  if (
    movie.length < 50 &&
    movie != null &&
    rating != null &&
    movie != '' &&
    rating != ''
  ) {
    personalMovieDB.movies[movie] = rating;
    i++;
  } else continue;
} while (i < personalMovieDB.count);

console.log(personalMovieDB);

if (personalMovieDB.count < 10)
  console.log('Просмотрено довольно мало фильмов');
else if (10 <= personalMovieDB.count <= 30)
  console.log('Вы классический зритель');
else if (personalMovieDB.count > 30) console.log('Вы киноман');
else console.log('Произошла ошибка');
