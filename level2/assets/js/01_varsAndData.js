//use strict es una forma de evitar errores de sintaxis, activa el "modo estricto" de JS
"use strict";
//console.log(), también puede usarse console.error, .info o .warn para mensajes en consola
//console.log("hola mundo");

//Maneras de declarar variables (se recomienda el uso de let y const)
//variables globales
var num1 = 12,
  num2 = 12,
  nombre = "Pedro",
  control = true;
//variables locales (dentro de un scope)
let num3 = 25,
  num4 = 92,
  numeroFloat = 12.2;

//Constantes: almacenan valores que no deberían/pueden cambiarse
const num5 = 91;

//Scope de variables
function variableScope() {
  let boolValue = true;
  var x = 5;
  if(boolValue){
    var x = 10;
    console.log(x);
  }
  console.log(x);
}

function variableLetScope() {
  let boolValue = true;
  let x = 5;
  if(boolValue){
    let x = 10;
    console.log(x);
  }
  console.log(x);
}

var nombre = "Pedro";
let apellido = "Plasencia";

console.log(this.nombre);
console.log(this.apellido);

variableScope();
variableLetScope();

//Arreglos
let miArreglo = [1, 2, "test"];
// console.log(miArreglo[0]);

//JSON (JavaScript Object Notation)
let miObjeto = {
  nombre: "Pedro",
  edad: 31,
  trabaja: true,
  lenguajes: ["js", "java", "php", "sql"],
  direccion: {
    calle: "Calle x",
    casa: 12345,
  },
};
// console.log(miObjeto.direccion.calle);
// console.log(miObjeto["direccion"]["calle"]);
// console.log(miObjeto.lenguajes[2]);
// console.log(miObjeto.nombre);

//Operadores matemáticos
let suma = 1 + 2;
suma += 4;
let resta = 2 - 1;
let multiplicacion = 2 * 1;
let division = 12 / 2;
let modulo = 12 % 2;

//Concatenar strings
let cadena = "hola" + " " + "mundo";
//console.log(cadena);

//Operaciones con distintos tipos de data
let numString = 1 + 2 + "mundo";
//console.log(numString);
let stringNum = "mundo" + 1 + 2;
//console.log(stringNum);

//condicionales
if ((1 <= 2 && 2 === 2) || 1 != 2) {
  //console.log("entra, 1 es menor a 2");
} else {
  //console.log("entra en el else 2 no es menor que 1");
}

let n = 3;
n === 3 ? "entra en primera parte del ternario" : "entra en else del ternario";

//Iteradores
let arreglo1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arreglo1.length; i++) {
  //console.log(arreglo[i]);
}
//Operadores logicos de comparación
// == igualdad de valor
// === igualdad de valor y tipo
// != diferente de valor
// !== diferente de valor y tipo
// ! no
// !(num1 != num2) = (num1 == num2)
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// && "y"
// || "o"
let operacion = (num1 < num2 || num2 < num3) && !(num1 != num2) && num5 != num3;

//Funciones
function sumar(num1, num2) {
  return num1 + num2;
}

const sumar2 = (num1, num2) => {
  /**
   * if(num1 && num2){
   *    return num1 + num2;
   * }else{
   *    return "Envía los dos parámetros";
   * }
   */
  let result = num1 && num2 ? num1 + num2 : "Envía los dos parámetros";
  return result;
};

const result = sumar(num1, num2);
//console.log(`result: ${result}`);
const result2 = sumar2(1, 2);
//console.log(`result2: ${result2}`);
//NaN (Not a Number)
//Multiplicar
//Operaciones matemáticas
// + = sumar, - = restar, * = multiplicar, / = dividir, % = modulo

// function multiplicar(num1, num2) {
//   return num1 * num2;
// }

const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(2, 2));
multiplicar(4, 3);
multiplicar(60, 356);
