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

//
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