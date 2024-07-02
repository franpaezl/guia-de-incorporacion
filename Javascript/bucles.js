//Ejerciciso de bucle
//6

let numero = 10;

for (let i = numero; i >= 0 && i <= 100; i--) {
  console.log(i);
}

//7

let numero1 = prompt("ingrese un numero");
numero1 = Number(numero1);

for (let i = 0; i <= 10; i++) {
  console.log(numero1 * i);
}

//8

let suma = 0;

while (true) {
  let numero2 = prompt("ingrese un numero");
  numero2 = Number(numero2);

  if (numero2 == 0) {
    break;
  } else suma += numero2;
}

let numeroEjersicio = suma

//9

do {
  let numero4 = Number(prompt("ingrese un numero"));

  if (numero4 !== 0) {
    suma += numero4;
  }
} while (numero4 !== 0);

//10

let persona = {
    nombre: "Francisco",
    apellido: "Páez Lastra",
    edad:28,
    pais: "Argentina",
    provincia: "Tucuman"
  };
  
  for (let clave in persona){
      console.log(clave);
  }
//11

for (let clave in persona){
    console.log(persona[clave]);
}



//Nivel Medio


//1
for (i = 0 ; i > 0 ; i++){
    
let numero5 = Number(prompt("Ingrese un numero"))
}

//2

let numero6 = Number(prompt("Ingrese un número entero"));

for (let i = numero6; i >= 1; i--) {
    if (numero6 % i === 0) {
        console.log(i);
    }
}

//3

function RingBell(numero7) {
  let frase = "Ding dong"
  for (let i = 0; i < numero7; i++){
    console.log(frase);
    
  }
  
}


//4

const fechaLimite = new Date("1997-8-3");
const fecha = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];

for (let i = 0; i < fecha.length; i++) {
  fecha[i] = new Date (fecha[i]);
  if (fechaLimite <= fecha[i])
    console.log(fecha[i])
  
}

//5,6

function listaColores(COLORES){

for (const color of COLORES) {
    

  console.log(color);
}
}

let COLORES1 = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];

console.log(listaColores(COLORES1));

//7

const NUMEROS = [1,2,3,4,5,6,7];

for(let numero of numeros){
  let total = numero * 2;
  console.log(total)

}

//8

const FAMILIA= [
  { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
  { nombre: 'María', apellido: 'Gómez', edad: 35, miembro: 'madre' },
  { nombre: 'Pedro', apellido: 'Pérez', edad: 12, miembro: 'hijo' },
  { nombre: 'Ana', apellido: 'Pérez', edad: 8, miembro: 'hija' }
];

function datosFamiliar(familiar){
  for (let i = 0 ; i < FAMILIA.length; i++){
    console.log(`Hola soy ${FAMILIA[i].nombre} ${FAMILIA[i].apellido} (${FAMILIA[i].miembro}) y tengo ${FAMILIA[i].edad} años`)
  }
}

//Nivel Dificil
//1

let numero8 = Number(prompt("Ingrese un número entero"));
let sumaPar = 0;
let sumaImpar = 0;

while (true) {
  if (numero8 === 0){
    break
  }
  else{
    if (numero8 % 2 === 0) {
      sumaPar += numero8


      
    }
    else{
      sumaImpar += numero8
    }
  }
  console.log(sumaPar);
  console.log(sumaImpar);

  
}

//2

const NUMEROS2 = [1,5,66,7,8,55,100,72];

let numeroMayor = 0;
for (let i = 0 ; i < NUMEROS2.length; i++){
if(NUMEROS2[i] > numeroMayor){
    numeroMayor = NUMEROS2[i];
}

}

console.log(numeroMayor);