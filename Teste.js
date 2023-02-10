//4: função gerar cor aleatória
// const corAleatoria = () => {
//     const array = '1234567890ABCDEF';
//     let cor = '#';

//     for (let index = 0; index < 6; index += 1) {
//         cor += array[Math.floor(Math.random()*16)];
//     };
//     return cor;
// }; console.log(corAleatoria());
//Outra forma de gerar cor
// const outraFormaCor = () => {
//     let r = parseInt(Math.random() * 255);
//     let g = parseInt(Math.random() * 255);
//     let b = parseInt(Math.random() * 255);
//     return `rgb(${r},${g},${b})`
// }; console.log(outraFormaCor());


// 5 - Salvar paleta no localStorage

const statusX = {
    color0: 'black',
    color1: 'red',
    color2: 'green',
    color3: 'blue',
};
for (let key=0; key<statusX.length; key+=1) {
    statusX[key] = 'red';
}; console.log(statusX[0]);