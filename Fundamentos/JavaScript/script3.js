let index = 0
// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let divisiveis =0;
// for(let index = 2; index<=150; index +=1){
//     if(index%3==0){
//         divisiveis +=1;
//     }
// }
// if(divisiveis==50){
//     console.log("mensagem sacreta!")
// } else{
//     console.log(divisiveis);
// }

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração
//que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let player1 = 'Pedra';
// let player2 = 'Pedra';
// if(player1==='Pedra'&&player2==='Tesoura' || player1==='Papel'&&player2==='Pedra' || player1==='Tesoura'&&player2==='Papel'){
//     console.log('Player 1 won');
// } else if (player1==='Pedra'&&player2==='Papel' || player1==='Papel'&&player2==='Tesoura' || player1==='Tesoura'&&player2==='Pedra'){
//     console.log('Player 2 won');
// } else if (player1===player2){
//     console.log('A Ties');
// }


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idadePessoa = 12;
// if(idadePessoa>=18){
//     console.log('A pessoa é maior de idade');
// } else {
//     console.log('A pessoa é menor de idade');
// }

// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarol = 28
let idadeFlavio = 35
let idadeNoel = 45

if (idadeCarol<idadeFlavio && idadeCarol<idadeNoel){
    console.log('Carolzita é a mais nova');
} else if (idadeCarol>idadeFlavio && idadeFlavio<idadeNoel){
    console.log('Flavio é o mais novo');
} else if (idadeNoel<idadeCarol && idadeNoel<idadeFlavio){
    console.log('Noel é o mais novo')
}