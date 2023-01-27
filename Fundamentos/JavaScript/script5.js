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

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
// }
// for(let key in names) {
//     console.log('Olá, '+names[key])
// }

// let car={ 
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// }
// for(let key2 in car) {
//     console.log(key2+': '+car[key2])
// }

//Fixação Funções
// let soma = 0;
// let subtracao = 0;
// let multiplica = 0;
// let divide = 0;
// let modulo = 0;

// function som(a,b){
//  soma = a+b;
//   console.log(soma);
// };
// function subtrai(a,b){
//     subtracao = a -b;
//     console.log(subtracao);
// };
// function mult(a,b){
//     multiplica=a*b;
//     console.log(multiplica);
// };
// function divisao(a,b){
//     divide = a/b;
//     console.log(divide);
// }
// function mod(a,b){
//     modulo = a%b
//     console.log(modulo);
// }

// som(5,5);
// subtrai(6,5);
// mult(3,9);
// divisao(9,3);
// mod(41,9)

// const num1 = 7;
// const num2 = 59;
// const num3 = 69;

// function maiorDeDois(){
//     if(num1>num2){
//         console.log(num1);
//     } else{
//         console.log(num2);
//     }
// } maiorDeDois()

// function maiorDeTres(){
//     if(num1>num2 && num1>num3){
//         console.log(num1);
//     } else if(num2>num1 && num2>num3){
//         console.log(num2);
//     } else if (num3>num1 && num3>num2){
//         console.log(num3);
//     }
// } maiorDeTres()

// function positivoNegativo(num) {
//     if(num>0){
//         console.log('positive');
//     } else if(num<0){
//         console.log('negative');
//     } else {
//         console.log('zero');
//     }
// } positivoNegativo(-4)

const ang1 = 90
const ang2 = 90
const ang3 = 90

function testeAng() {
    if(ang1+ang2+ang3===180 && ang1>0&&ang2>0&&ang3>0){
        console.log(true);
    } else if (ang1<=0||ang2<=0||ang3<=0){
        console.log('Erro!');
    } else if(ang1+ang2+ang3 !== 180 &&ang1>0&&ang2>0&&ang3>0){
        console.log(false);
    }
} testeAng()