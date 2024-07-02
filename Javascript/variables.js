//Ejersicios básicos de JS
//Nivel Bajo

//1

let myName = "Francsico";

//2

let myLastName = "Paez Lastra";

//3

let myAge = 28;

//4

let myPet = "Simon";

//5

let petAge = 12;

//6

let fullName = myName + " " + myLastName;

console.log(fullName);

//7

let presentationText = `Hola mi nombre es ${fullName} y tengo ${myAge} años. Mi mascota es un perro llamado ${myPet} y tiene ${petAge} años`;

console.log(presentationText);

//Nivel Medio
//1

let sumAge = myAge + petAge;
let resAge = myAge - petAge;
let productAge = myAge * petAge;
let divisionAge = myAge / petAge;

//2

const ESTUDIANTE = {
  nombre: "Tomas",
  apellido: "Pérez",
  edad: 18,
  deporte: "Futbol",
  zurdo: true,
};

console.table(ESTUDIANTE);
console.log(ESTUDIANTE.nombre);
console.log(ESTUDIANTE.apellido);
console.log(ESTUDIANTE.edad);
console.log(ESTUDIANTE.deporte);
console.log(ESTUDIANTE.zurdo);

//3

const PET = {
  animal: "dog",
  age: 14,
  color: "black",
  raze: "Rotwailer",
  name: "sasha",
};

console.table(PET);
console.log(PET.animal);
console.log(PET.age);
console.log(PET.color);
console.log(PET.raze);
console.log(PET.name);

//4

let fruit = ["apple", "banana", "orange", "pear", "mango"];

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);

//Nivel Alto
//1

// let age = Number(prompt(Age?));

// if (age > 18){
//     let phrase = `I am an adult, I am ${age} years old.`
//     return alert(phrase)
// }
// else{ return alert("you don't pass");}

//2: me canse de pensar en ingles

let numeros = [1, 2, 3, 6, 5];

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//3

let familia = [
  { nombre: "Francisco", edad: 28, estadoCivil: "Soltero" },
  { nombre: "Alejandro", edad: 30, estadoCivil: "Soltero" },
  { nombre: "Guadalupe", edad: 21, estadoCivil: "Soltero" },
  { nombre: "Benjamin", edad: 24, estadoCivil: "Soltero" },
  { nombre: "Gustavo", edad: 28, estadoCivil: "Casado" },
];


console.table(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

//4

let randomText = `${familia[0].nombre} se comio ${numeros[3]} ${fruit[1]}`

console.log(randomText);