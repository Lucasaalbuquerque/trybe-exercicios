// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let i = 0;

// for(i=0; i<numbers.length; i += 1){
//     console.log(numbers[i]);
//     soma = soma +numbers[i];
// }
// console.log(soma);
// let media = soma/numbers.length;
// console.log(media);

// if(media>20){
//     console.log('valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

// let maiorValor = 0;
// for( i=0; i<numbers.length; i += 1){
//     if(numbers[i] > maiorValor){
//         maiorValor = numbers[i];
//     } 
// } console.log(maiorValor);

// let valorImpar = [];
// for(i=0; i<numbers.length; i+=1){
//     if(numbers[i]%2==1){
//         valorImpar.push(numbers[i])
//     }
// }
// if(valorImpar.length!=0){
//     for(let a=0; a<valorImpar.length; a+=1){
//         console.log(valorImpar[a])
//     }
// } else{
//     console.log('nenhum valor ímpar encontrado');
// }

//Os três últimos são muito parecidos com os anteriores!

//Exercício Bonus

for(let index1 = 1; index1 < numbers.length; index1 +=1){
    for(let index2 = 0; index2 < index1; index2+=1){
        if(numbers[index2] > numbers[index1]){
            let posicao = numbers[index1]
            numbers[index1] = numbers[index2]
            numbers[index2] = posicao
        }
    } 
} console.log(numbers)