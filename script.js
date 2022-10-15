//const h1 = document.querySelector('h1');
//const p  = document.querySelector('p');
//const parrafito =document.querySelector('.parrafito');
//const pid = document.querySelector('#pid');
//const input = document.querySelector ('input');
//const otro= document.querySelector('#otro');

//console.log(input.value)

  /* 
console.log({
 h1,
    p,
    parrafito,
    pid,
    input,
    otro,
    n1,
    n2,

});*/


const n1= document.querySelector('#n1');
const n2= document.querySelector('#n2');
//const botonCalcular= document.querySelector('#botonCalcular');
const botonSuma= document.querySelector('#botonSuma');
const botonResta= document.querySelector('#botonResta');
const botonMultiplica= document.querySelector('#botonMultiplica');
const botonDivide= document.querySelector('#botonDivide');
const resultado = document.querySelector("#resultado");

botonSuma.addEventListener('click', sumar);
botonResta.addEventListener('click', restar);
botonMultiplica.addEventListener('click', multiplicar);
botonDivide.addEventListener('click', dividir);

function  sumar(){
    let x= parseInt(n1.value);
    let y= parseInt(n2.value);
    let suma= x+y;
    resultado.innerText= "la suma es: " + suma;
}
function  restar(){
    let x= parseInt(n1.value);
    let y= parseInt(n2.value);
    let resta= x-y;
    resultado.innerText= "la Resta es: " + resta;
}

function  multiplicar(){
    let x= parseInt(n1.value);
    let y= parseInt(n2.value);
    let multiplica= x*y;
    resultado.innerText= "la Multiplicacion es: " + multiplica;
}

function  dividir(){
    let x= parseInt(n1.value);
    let y= parseInt(n2.value);
    let divide= x/y;
    resultado.innerText= "la DIVISION es: " + divide;
}
