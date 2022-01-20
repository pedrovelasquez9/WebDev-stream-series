//Integraciones y features de ES6
//let y const

//antes
var miVariable = "hola";

//ahora
let miVariableConLet = "Hola mundo";
const MI_CONSTANTE = "Valor constante";

//Arrow functions
//antes
function prueba1(){
    console.log("hola funcion");
}
prueba1();
//ahora
const prueba2 = () => {
    console.log("hola funcion de flecha");
}
prueba2();

//Strings multilinea y template strings
const NOMBRE = "Pedro";
//antes
let miStringNormal = "este es un string multilinea de prueba, por " + NOMBRE;
console.log(miStringNormal);
//ahora
let miString = `este es un
string multilinea
de prueba, por ${NOMBRE}`;
console.log(miString);

//Parametros por defecto o default params
//antes
function sumarAlgo(num1, num2){
    num1 = num1 || 1;
    num2 = num2 || 2;
    return num1 + num2;
}

//ahora
const sumarOtraCosa = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}

//Destructuracion
//arrays
let frutas = ["🍎", "🍓"];
let [a, b] = frutas;
console.log(a, b);

//objetos
let animales = {name: "Mr anderson", tipo: "Gato"};
let {name, tipo} = animales;
console.log(name, tipo);

//Literales de objetos mejorados
const getDevice = (type, year, so) => {
    return {
        type,
        year,
        so
    }
};

console.log(getDevice("laptop", "2022", "ElementaryOS"));

//ES2021
//Operadores de asignacion logica
//OR: asigna un valor cuando la variable retorna un falsy
const MI_OBJETO = {tipo: "vino", year:''};
MI_OBJETO.tipo ||= 'cerveza';
console.log(MI_OBJETO.tipo);
MI_OBJETO.year ||= '2022';
console.log(MI_OBJETO.year);

//AND: asigna un valor cuando la variable retorna un truthy
const MI_OBJETO2 = {tipo: "vino", year:''};
MI_OBJETO2.tipo &&= 'cerveza';
console.log(MI_OBJETO2.tipo);
MI_OBJETO2.year &&= '2022';
console.log(MI_OBJETO2.year);

//Nullish: asigna un valor cuando la variable es null o undefined
const COCHE = {marca: "Peugeot"};
COCHE.marca ??= "BMW";
console.log(COCHE.marca);
COCHE.modelo ??= "sedan";
console.log(COCHE.modelo);

//Nullish operator: valida cuando el valor sea null o undefined
let nombre = null ?? "Pedro";
console.log(nombre);
let apellido = "" ?? "Plasencia";
console.log(apellido);

//Encadenado opcional
let mascota = {
    nombre: "Firulais",
    marca: "Perro",
    modelo: "Dalmata"
};

const NOMBRE_MASCOTA = mascota?.nombre;
const EDAD_MASCOTA = mascota?.edad;
console.log(NOMBRE_MASCOTA);
console.log(EDAD_MASCOTA);