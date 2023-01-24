/*/Exercício contas aritiméticas
const a = 100;
const b = 10;
const c = 200;

const adicao = a+b;
console.log(adicao);

const subtracao = a-b;
console.log(subtracao);

const multiplicacao = a*b;
console.log(multiplicacao);

const divisao = a/b;
console.log(divisao);

const modulo = a%b;
console.log(modulo);

//Exercício maior entre os dois
if(a>b){
    console.log(a);
} else{
    console.log(b)
}

//Exercício maior dos três
if(a>b || a>c){
    console.log(a);
} else if(b>a || b>c){
    console.log(b);
} else if (c>a || c>b){
    console.log(c);
}

//Exercício posi/nega/zero
if(a>0){
    console.log("positive");
} else if (a<0){
    console.log("negative")
} else {
    console.log("zero");
}

//Exercício triangulo
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const soma = ang1+ang2+ang3

if(soma == 180) {
    console.log(true);
} else {
    console.log(false);
}

//Exercício Xadrez (Não sei como faz! Vou procurar)
let B = 'BISHOP'

switch (b || B){}

// Exercício Notas
let porcentagem = 300

if(porcentagem>=90 && porcentagem<=100) {
    console.log('A');
} else if (porcentagem>=80 && porcentagem<90){
    console.log('B');
} else if (porcentagem>=70 && porcentagem<80){
    console.log('C');
} else if (porcentagem>=60 && porcentagem<70){
    console.log('D');
} else if (porcentagem>=50 && porcentagem<60){
    console.log('E');
} else if(porcentagem<50 && porcentagem>=0){
    console.log('F')
} else {
    console.log('Nota inválida!');
}*/

//Exercício "Há um par entre nós"
const num1 = 31
const num2 = 77
const num3 = 15

//Condição de ser par
if (num1%2==0 || num2%2==0 || num3%2==0){
    console.log(true);
} else{
    console.log(false);
}

//Condição de ser ímpar
if (num1%2==1 || num2%2==1 || num3%2==1){
    console.log(true)
} else{
    console.log(false);
}

//Custo de produto
const valorVenda = 500;
const valorCusto = 200;
const impostoSobreOCusto = valorCusto + valorCusto*0.2
const valorCustoTotal = valorCusto + impostoSobreOCusto
const lucro = valorVenda - valorCustoTotal

if (valorCusto < 0 || valorVenda < 0){
    console.log('Erro! Valor inválido!');
} else {
    console.log(lucro*1000)
}

//Salário líquido a partir do Bruto
