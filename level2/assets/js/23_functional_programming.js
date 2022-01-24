//Problema: quiero retornar el doble de cada elemento de un listado de numeros
const numeros = [1, 2, 3 ,4 , 5];
//Programacion imperativa (como se va a hacer)
let dobles = [];

for(let i = 0; i < numeros.length; i++){
    dobles.push(numeros[i] * 2);
}

console.log(dobles);

//Programacion funcional (declarativa o que queremos hacer)
let doblesFuncional = numeros.map(num => num*2);

console.log(doblesFuncional);

//Principios a tener en cuenta al implementar el paradigma funcional
//Inmutabilidad: No deberiamos mutar el objeto original, solo copias de un objeto
let miCadena = "hola";
let miOtraCadena = miCadena;
let miObjeto1 = [1, 2];
let miObjeto2 = miObjeto1;
let miObjetoCompuesto = {
    nombre: "Pedro",
    apellido: "Plasencia",
    residencia:{
        pais: "España",
        provincia: "A Coruña"
    }
};
let miObjetoCompuesto2 = {...miObjetoCompuesto};
console.log(miObjetoCompuesto2);
//[...miObjeto1]; //clonado con spread operator (shallow copy)
//Object.assign([], miObjeto1); //clonado con object assign (shallow copy)
//JSON.parse(JSON.stringify(miObjeto1)); //clonado con JSON parse y Stringify (deep copy)

const mutarTodo = (primitivo, objeto, objComp = {}) => {
    primitivo += " mundo";
    objeto.push(3); 
    objComp.nombre = "Pedro J";
    objComp.residencia.provincia = "Coruña";
}

mutarTodo(miOtraCadena, miObjeto2, miObjetoCompuesto2);

console.log(miCadena);
console.log(miObjeto1);
console.log(miObjetoCompuesto);

//Usar funciones puras
//Ejemplo de funcion pura:
const dobleDeNum = (num) => {
    return num * 2;
}

//Para el mismo valor de entrada, retorna siempre el mismo resultado
//No muta el valor original que llega como parametro (no tiene efectos secundarios)

//Ejemplo de funcion impura
Math.random();
let miArr = [1,2];
miArr.splice(0, 1);

let miObjetoCojonudo = {
    saludar: () => {
        console.log("HOla mundo");
    }
}

miObjetoCojonudo.saludar();

//Funciones de orden superior
//Ejemplo
//Map, reduce, filter
let pilotos = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  //Encadenando los mètodos
  const scoreTotalDeJedis = pilotos
    .filter(pilot => pilot.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((prev, actual) => prev + actual);

    console.log(scoreTotalDeJedis);

//Currying
//Ejemplo
const sumatoria = (a, b) => a + b;
const sumatoriaConCurry = (a) => (b) => a + b;

console.log(sumatoriaConCurry(1)(2));