// Fatorial:
// let numero = 10;
// let fatorial = 0;

// for(let index = numero-1; index>=1; index-=1){
//     fatorial += numero*index
// } console.log('O fatorial de 10 é: '+fatorial);

//Palavra invertida
// let word = 'Azralon'
// let invertido = ''

// for(let index = word.length-1; index>=0; index-=1){
//     invertido+=word[index]
// } console.log(invertido);

//Maior e menor palavras

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for(let index=0; index<array.length; index+=1){
//     if(array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index];
//     } else if (menorPalavra.length > array[index].length){
//         menorPalavra = array[index];
//     }
// }
// console.log(maiorPalavra);
// console.log(menorPalavra);

//Número primo
// let maiorPrimo = 0;

// for(let index=2; index<=50; index+=1){
//     let Primo = true
//     for(let divisor=2; divisor<index; divisor+=1){
//         if(index%divisor === 0){
//             Primo = false
//         }
//     } if(Primo){
//         maiorPrimo = index
//     }
// } console.log(maiorPrimo)

//exercicios Bônus

//Quadrado de asteriscos

let n = 5
let linha = ''
let simbolo = '*'
// for (let index1=0; index1<n; index1+=1){
//     linha += simbolo 
// }
// for(index2=1 ;index2<n; index2+=1){
//     console.log(linha)
// }

// triangulo de asterisco

// for(let index=1; index<=n; index+=1){
//     linha = linha + simbolo;
//     console.log(linha)
// }

// triangulo de asteriscos invertido

let contraPosicao = n - 1;

for(let i=0; i<n; i+=1){
    for(let j=0; j<n; j+=1){
        if(j<contraPosicao){
            linha = linha +' '
        } else{
           linha = linha + simbolo 
        }
    }
    console.log(linha);
    linha = '';
    contraPosicao -=1
}