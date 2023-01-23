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

if(a>b){
    console.log(a);
} else{
    console.log(b)
}

if(a>b || a>c){
    console.log(a);
} else if(b>a || b>c){
    console.log(b);
} else if (c>a || c>b){
    console.log(c);
}

if(a>0){
    console.log("positive");
} else if (a<0){
    console.log("negative")
} else {
    console.log("zero");
}

const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const soma = ang1+ang2+ang3

if(soma == 180) {
    console.log(true);
} else {
    console.log(false);
}