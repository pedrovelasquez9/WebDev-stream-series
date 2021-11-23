"use strict";
//Pasar referencias por valores
let numero = 1;
let cadenaInicial = "mi cadena";

let numero2 = numero;
let cadena2 = cadenaInicial;

numero2 = 2;
console.log(numero, numero2);

//pasar valores por referencia
const modificarUser = (user) => {
  //Modifico una propiedad de la primera referencia
  user.edad = 40;

  //Defino un objeto en una nueva referencia de memoria (se crea un objeto nuevo)
  user = {
    nombre: "Maria",
    direccion: "Su casa",
  };

  //Se modifica la referencia del objeto creado en la instrucción anterior, no del original
  user.edad = 51;

  return user;
};

let myUser = {
  nombre: "Pedro",
  edad: 31,
  direccion: "mi casa",
};

//FIN pasar valores por referencia
//retorna un Infinity (valor numérico definido en una propiedad global que representa el infinito)
let primeraDivision = 5 / 0;
//retorna un NaN (not a number) al dividir infinito/infinito
let segundaDivision = 1 / 0 / (1 / 0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY * Number.NEGATIVE_INFINITY);
console.log(primeraDivision, segundaDivision);
console.log(typeof Infinity);

let myUser2 = modificarUser(myUser);
console.log(myUser);
console.log(myUser2);

//Llamadas asíncronas a APIs externas
const llamadaAPI = async () => {
  const call = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await call.json();
  return data;
};

const miOtraFuncion = async () => {
  let data = await llamadaAPI();
  console.log(`hago lo que quiero con la data ${JSON.stringify(data)}`);
};

miOtraFuncion();
