// Exercícios "Para Fixar"

//Objetos:
// let player = {
//     firstName: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
// };
// console.log('A jogadora ' + player.firstName+ ' ' + player.lastName+ ' tem ' + player.age + ' anos de idade.')

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]
// console.log('A jogadora '+ player.firstName+' '+player.lastName+' foi eleita a melhor do mundo por '+player['bestInTheWorld'].length+' vezes.');

// console.log('A jogadora possui '+player.medals.golden+' de ouro e '+player.medals.silver+' de prata.')

//For/in e for/of

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
}
for(let key in names) {
    console.log('Olá, '+names[key])
}

let car={ 
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}
for(let key2 in car) {
    console.log(key2+': '+car[key2])
}