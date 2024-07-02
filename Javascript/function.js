//Ejecicios de funciones
//Bajo

//1,2

function add() {
  let resultado = 10 * 200;
  return resultado;
}

console.log(add());

//3

// function add1(numero1, numero2) {
//     let resultado = numero1 * numero2;
//     return resultado

// }

// console.log(add1(3,3));

// //4

// let num1 = 50;
// let num2 = 2;

// console.log(add1(num1, num2));

//6

let add1 = function (numero1, numero2) {
  let resultado = numero1 * numero2;
  return resultado;
};

console.log(add1(2, 3));

//Medio
//1

function saludar(nombre) {
  let saludo = `Hola ${nombre} como estas`;
  return saludo;
}

console.log(saludar("Francisco"));

//2

let suma = function (num1, num2) {
  let resultado = num1 + num2;
  return resultado;
};

console.log(suma(1, 2));

//3

function areaDeTriangulo(num1, num2) {
  let resultado = 0.5 * num1 * num2;
  return resultado;
}

console.log(areaDeTriangulo(5, 6));

//4

function perimetroTrianguloEscaleno(lado1, lado2, lado3) {
  let perimetro = lado1 + lado2 + lado3;
  return perimetro;
}

console.log(perimetroTrianguloEscaleno(1, 2, 3));

//5

function totalDeCompras(precio, cantidad) {
  let precioTotal = precio * cantidad;
  let descuento;
  if (cantidad >= 20) {
    descuento = precioTotal * (1 - 0.2);
    return descuento;
  } else if (cantidad >= 10) {
    descuento = precioTotal * (1 - 0.1);
    return descuento;
  } else return precioTotal;
}

console.log(totalDeCompras(2, 20));

//Alto
//1
function totalImpuesto(ingresoAnual) {
  let ingresoTotal;
  let impuesto;
  if (ingresoAnual > 10000) {
    if (ingresoAnual > 20000) {
      impuesto = ingresoAnual * 0.20;
      ingresoTotal = ingresoAnual + impuesto;
      return `El impuesto que debe abonar es ${impuesto}$ por lo tanto el total es de ${ingresoTotal}$`;
    } else {
      impuesto = ingresoAnual * 0.15;
      ingresoTotal = ingresoAnual + impuesto;
      return `El impuesto que debe abonar es ${impuesto}$ por lo tanto el total es de ${ingresoTotal}$`;
    }
  } else {
    impuesto = ingresoAnual * 0.10;
    ingresoTotal = ingresoAnual * 0.10
    return `El impuesto que debe abonar es ${impuesto}$ por lo tanto el total es de ${ingresoTotal}$`;
  }
}


console.log(totalImpuesto());

//2

function semana(dia) {
    if(dia > 7){
        return "Este dia no existe, debe ingresar un numero del '1' al '7' correspondiendo al dia de la semana. Por ejemplo: 1 = Lunes; 3 = miercoles"
    }
    else if (dia === 7 || dia == 6){
        return "Es fin de semana"
    }
    else return "Es dia de semana"
}

console.log(semana(10));


//3

// function usuario() {
//     let persona = {}
//     let nombre = prompt("Ingrese su nombre");
//     if (nombre === "" ){
//         alert("El nombre no puede estar vacio");
//         return
        
//     }
//     else {
//         persona.nombre = nombre
//         let apellido = prompt("Ingrese su apellido")
//             if (apellido === ""){
//                 alert ("El apellido no puede estar vacio");;
//                 return
//             }
//             else {
//                 persona.apellido = apellido;
//                 let edad = prompt("Ingrese su edad");
//                 if (edad == ""){
//                     alert ("La edad no puede estar vacia");
//                     return

//                 }
//                 else {
//                     edad = Number(edad)
//                     persona.edad = edad
                    
//                 }
//             }
//         }
//         return persona
//     }



// usuario();

function saludo(nombre){
    return "Hola mi nombre es " + nombre 
}

function edad(añoActual, añoNacimiento) {
    let resultado = añoActual - añoNacimiento;
    return resultado;
    
}

function present(value1, value2) {
    let presentacion = `${value1} y tengo ${value2} años`;
    return presentacion
}

console.log(present(saludo("Francsico"), edad(2024, 1996)));