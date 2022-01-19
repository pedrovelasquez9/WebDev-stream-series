//Cosas que podemos hacer en una sola lìnea =)
//Operador ternario
let controlador = false;
let otraVariable;

otraVariable = controlador ? "Hola" : "adios";
console.log(otraVariable);

//scroll al inicio de la pàgina
const alInicio = () => window.scrollTo(0,0);

//Quitar duplicados de array
const quitarDuplicados = (arreglo) => [...new Set(arreglo)];
console.log(quitarDuplicados([2,2,1,3,4,5,5]));

//Valor por defecto a una variable
let variableSinValor = "hola primer valor";
let otraVariableSinValor = variableSinValor || "hola default";
console.log(otraVariableSinValor);

const miFuncionConParametros = (param = "por defecto") => console.log(param);
miFuncionConParametros();
miFuncionConParametros("esto es un parametro");

//Ver si un nùmero es par o impar
const esPar = (num) => num % 2 === 0;
console.log(esPar(1));
console.log(esPar(2));

//Validar si un array està vacìo
const hasValues = (arr) => Array.isArray(arr) && arr.length > 0;
console.log(hasValues([]));
console.log(hasValues([1,2]));

//Destructuracion
const data = {mensaje: "hola", contexto: "mundo"};
const {mensaje, contexto} = data;
console.log(mensaje);
console.log(contexto);

//spread operator arrays
const arr1 = [1, 2, 3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Rest params
const funcionConParamArray = (param1, param2, ...params) => {
    console.log(param1);
    console.log(param2);
    console.log(params);
};

function prueba(arg) {
    //Funciona cuando definimos la funciòn de esta forma
    //si la definimos con arrow functions de ES6 no hay binding en su scope para 
    //la propiedad arguments del objeto de funcion
    console.log(arguments);
}

funcionConParamArray(1, 2, 3, 4, "hola", "mundo");
prueba("test");

//Verificar si una palabra es un palindromo
const esPalindromo = texto => texto.toLowerCase().split("").reverse().join("") === texto.toLowerCase()
console.log(`Es palindromo: ${esPalindromo("Ana")}`);

//A partir del array de datos de pilotos, obtener el total (sumatoria) de score de los pilotos que sean usuarios de la fuerza usando map, reduce y filter
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

  const usuariosDeLaFuerza = pilotos.filter(pilot => pilot.isForceUser);
  console.log(usuariosDeLaFuerza);
  const sumatoriaDeScores = usuariosDeLaFuerza.map(jedi => jedi.pilotingScore + jedi.shootingScore);
  console.log(sumatoriaDeScores);
  const totalScores = sumatoriaDeScores.reduce((prev, actual) => prev + actual);
  console.log(totalScores);

  //Encadenando los mètodos
  const scoreTotalDeJedis = pilotos
    .filter(pilot => pilot.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((prev, actual) => prev + actual);

    console.log(scoreTotalDeJedis);

//Obtener los ùltimos 7 dìas a partir de hoy
const lastWeek = [...Array(7).keys()].map(d => new Date(Date.now() - 86400000 * d))
console.log(lastWeek);
