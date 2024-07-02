// Ejersicios de condicionales
//Bajo
//4
let numero1 = 4;
let numero2 = 5;

if (numero1 > numero2) {
  console.log(numero1);
} else console.log(numero2);

//5
let numero3 = 8;
let numero4 = 8;

if (numero3 > numero4) {
  console.log(numero1);
} else if (numero3 < numero4) {
  console.log(numero2);
}   else console.log("Son iguales");

if(numero3 == numero4){
    console.log("Son iguales");
}else console.log("Son diferentes");

//6 y 7

let fecha1 = new Date("2021-12-12");
let fecha2 = new Date ("2023-5-1");

if (fecha1 > fecha2){
    console.log("La " + fecha1 + " es mayor que la "+ fecha2);
}
else if(fecha1 < fecha2){
    console.log(`La ${fecha2} es mayor que la ${fecha1}`);

}

else console.log("Son la misma fecha");

//8

let num1 = 10;
let num2 = 6;
let num3 = 8;

if(num1 > num2 && num1 > num3){
    console.log(`El ${num1} es el mayor`);
}else if (num2 > num1 && num2 > num3) {
    console.log(`El ${num2} es el mayor`);
    
}
else console.log(`El ${num3} es el mayor`);


//Dificultad medio
//2 3 

let lluvia = true;

if (lluvia) {
    console.log("No podes salir sin mojarte");
} else {
    console.log("Puedes salir sin problemas");
}


let tengoParaguas = false;

if (lluvia) {
    if (tengoParaguas) {
        console.log("Abrilo y sali a la calle");
    } else {
        console.log("No podes salir sin mojarte");
    }
} else {
    console.log("Puedes salir sin problemas");
}




if (lluvia) {
    console.log("Está lloviendo");
} else {
    console.log("No está lloviendo");
}




if (lluvia) {
    if (tengoParaguas) {
        console.log("Puedes salir con el paraguas");
    } else {
        console.log("No puedes salir sin mojarte");
    }
} else {
    console.log("Puedes salir sin problemas");
}


let animales = ["fan", "fran", "gaga", "lala"];


let fran = {

    nombre: "francsico",
    apellido: "Paez Lastra",
    edad: 25

}

//5
let color = prompt("Introduce un color (rojo, azul o verde):");

switch (color.toLowerCase()) {
  case "rojo":
    console.log("El color de la pasión");
    break;
  case "azul":
    console.log("El color del mar");
    break;
  case "verde":
    console.log("El color de la naturaleza");
    break;
  default:
    console.log("Color no reconocido");
}


//6

let num4 = Number(prompt("Introduce el primer número (entre 1 y 100):"));
let num5 = Number(prompt("Introduce el segundo número (entre 1 y 100):"));
let operacion = prompt("Introduce la operación a realizar (suma, resta, multiplicación, división):");

if (operacion.toLowerCase() === "suma") {
  console.log(`La suma de ${num4} y ${num5} es: ${num4 + num5}`);
} else if (operacion.toLowerCase() === "resta") {
  console.log(`La resta de ${num4} y ${num5} es: ${num4 - num5}`);
} else if (operacion.toLowerCase() === "multiplicación") {
  console.log(`La multiplicación de ${num4} y ${num5} es: ${num4 * num5}`);
} else if (operacion.toLowerCase() === "división") {
  if (num5 === 0) {
    console.log("No se puede dividir por cero.");
  } else {
    console.log(`La división de ${num4} entre ${num5} es: ${num4 / num5}`);
  }
} else {
  console.log("Operación no reconocida.");
}

//7
let francisco = {
    nombre: 'Francisco',
    edad: 28,
    altura: 1.74
  };
  
  let alejandro = {
    nombre: 'Alejandro',
    edad: 20,
    altura: 1.85
  };
  
  if (francisco.altura > alejandro.altura) {
    if (francisco.edad > alejandro.edad) {
      console.log(`${francisco.nombre} es más alto y mayor que ${alejandro.nombre}`);
    } else {
      console.log(`${francisco.nombre} es más alto pero más joven que ${alejandro.nombre}`);
    }
  } else {
    if (francisco.edad > alejandro.edad) {
      console.log(`${alejandro.nombre} es más alto pero más joven que ${francisco.nombre}`);
    } else {
      console.log(`${alejandro.nombre} es más alto y mayor que ${francisco.nombre}`);
    }
  }

  
  //8

let edad = Number(prompt("Ingresa tu edad:"));


if (edad >= 0 && edad <= 12) {
  alert(`Tienes ${edad} años. Eres un infante.`);
} else if (edad >= 13 && edad <= 18) {
  alert(`Tienes ${edad} años. Eres un adolescente.`);
} else if (edad >= 19 && edad <= 45) {
  alert(`Tienes ${edad} años. Eres un joven adulto.`);
} else if (edad > 45 && edad <= 100) {
  alert(`Tienes ${edad} años. Eres una persona mayor.`);
} else if (edad > 100) {
  alert(`Tienes ${edad} años. ¡¿Realmente eres tan viejo?!`);
} else {
  alert("Edad ingresada no válida. Por favor ingresa un número válido.");
}


//9

let num6 = Number(prompt("Ingresa un número del 1 al 3:"));


if (num6 === 1) {
  alert(`1: El número ingresado es ${num6}`);
  alert(`2: El doble del número ingresado es ${num6 * 2}`);
  alert(`3: El número ingresado tres veces es ${num6 * 3}`);
} else if (num6 === 2) {
  alert(`1: El número ingresado es ${num6}`);
  alert(`2: El doble del número ingresado es ${num6 * 2}`);
  alert(`3: El número ingresado tres veces es ${num6 * 3}`);
} else if (num6 === 3) {
  alert(`1: El número ingresado es ${num6}`);
  alert(`2: El doble del número ingresado es ${num6 * 2}`);
  alert(`3: El número ingresado tres veces es ${num6 * 3}`);
} else {
  alert("Otro: Ese valor no está permitido");
}

//Nivel Alto
//1
let nombre = prompt("¿Cómo es tu nombre?");
nombre = nombre.toLowerCase();

if (nombre === "francisco") {
    alert(`Bienvenido ${nombre}`);
} else {
    let vip = prompt("¿Tienes pase VIP? Responde 'si' o 'no'");
    vip = vip.toLowerCase();
    
    if (vip === "si" || vip === "no") {
        alert(`Bienvenido ${nombre}`);
    } else {
        let entrada = prompt("¿Tienes entrada? Responde 'si' o 'no'");
        entrada = entrada.toLowerCase();

        if (entrada === "si" || entrada === "no") {
            alert(`Bienvenido ${nombre}`);
        } else {
            let compra = prompt("¿Quieres comprar? Responde 'si' o 'no'");
            compra = compra.toLowerCase();

            if (compra === "no") {
                alert("Nos vemos la próxima");
            } else if (compra === "si") {
                let dinero = Number(prompt("¿Cuánto dinero tienes?"));

                if (dinero >= 1000) {
                    alert(`Bienvenido ${nombre}`);
                } else {
                    alert("Nos vemos la próxima");
                }
            }
        }
    }
}