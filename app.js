const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('odin iz poslednih filmov'),
    b = prompt('na skolko otsenite ego?',''),
    c = prompt('odin iz poslednih filmov'),
    d = prompt('na skolko otsenite ego?','');
    
    personalMuvieDB.muvies[a] = b;
    personalMuvieDB.muvies[c] = d;
    console.log(personalMuvieDB);



