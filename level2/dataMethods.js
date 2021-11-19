//Strings
let txt = "Esto es un string de prueba de string";
//longitud
let longitud = txt.length;
//slice (inicio, fin) retorna un string
let slicedString = txt.slice(0, 5);
let slicedString2 = txt.slice(-27, -20);
//substr (inicio, longitud) retorna un string
let substring = txt.substring(0, 5);
//replace (buscar, reemplazar) retorna un string
let replacedString = txt.replace("string", "string2");
replacedString = txt.replace(/string/g, "string2");
//replaceAll (buscar, reemplazar) retorna un string y reemplaza todas las coincidencias de la palabra
replacedString = txt.replaceAll("string", "string2");
//toUpperCase() retorna un string en mayusculas
let upperString = txt.toUpperCase();
// toLowerCase() retorna un string en minusculas
let lowerString = txt.toLowerCase();
//concat(string1, string2) retorna un string
let concatenatedString = txt.concat(" ", "concatenado");
concatenatedString = txt + " " + "concatenado";
//trim() retorna un string sin espacios en blanco
let trimmedString = txt.trim();
//template strings
let templateString = `${txt} concatenado`;
//chartAt(posicion) retorna un caracter
let charAt = txt.charAt(0);
//chartCodeAt (posicion) retorna un codigo ascii
let codeAt = txt.charCodeAt(0);
//String.fromCharCode(codigo) retorna un caracter
let fromCharCode = String.fromCharCode(65);
//split (separador) retorna un array
let splittedString = txt.split(" ");
//Validar si una palabra es un palíndromo
let str = "origin";
let reversed = str.split("").reverse().join("");
let resultPalindromo = str == reversed ? "palíndromo" : "no lo es";

//Búsqueda en strings
//indexOf(buscar, inicio) retorna la posición de la primera coincidencia
let indexOfTxt = txt.indexOf("string");
//lastIndexOf(buscar, inicio) retorna la posición de la última coincidencia
let lastIndexOfTxt = txt.lastIndexOf("string");
//search (buscar) retorna la posición de la primera coincidencia
let searchTxt = txt.search("string");
//includes (buscar) retorna true o false
let includesTxt = txt.includes("string");
//startsWith (buscar) retorna true o false
let startsWithTxt = txt.startsWith("string");
//endsWith (buscar) retorna true o false
let endsWithTxt = txt.endsWith("string");

//Date()
//Date(year, month, day, hours, minutes, seconds, milliseconds)
//Date(milliseconds)
//Date(dateString)
let fecha = new Date();
let fecha2 = new Date(2020, 1, 1, 0, 0, 0, 0);
let fecha3 = new Date("2020-01-01");
let fecha4 = new Date(1577880000000);
let fecha5 = new Date("2020-01-01T00:00:00.000Z");
//getFullYear() retorna el año
let year = fecha.getFullYear();
//getMonth() retorna el mes
let month = fecha.getMonth();
//getDate() retorna el día
let date = fecha.getDate();
//getDay() retorna el día de la semana
let day = fecha.getDay();
//getHours() retorna las horas
let hours = fecha.getHours();
//getMinutes() retorna los minutos
let minutes = fecha.getMinutes();
//getSeconds() retorna los segundos
let seconds = fecha.getSeconds();
//getMilliseconds() retorna los milisegundos
let milliseconds = fecha.getMilliseconds();
//Formatear fecha con cada propiedad a través de variables
let miFecha = `${date}/${month}/${year}`;
//toDateString() retorna la fecha en formato string
let dateString = fecha.toDateString();
//toTimeString() retorna la hora en formato string
let timeString = fecha.toTimeString();
//toLocaleDateString() retorna la fecha en formato local
let localeDateString = fecha.toLocaleDateString();
//toLocaleTimeString() retorna la hora en formato local
let localeTimeString = fecha.toLocaleTimeString();
//toLocaleString() retorna la fecha y hora en formato local
let localeString = fecha.toLocaleString();
//toISOString() retorna la fecha en formato ISO
let isoString = fecha.toISOString();
//toJSON() retorna la fecha en formato JSON
let jsonString = fecha.toJSON();
//toString() retorna la fecha en formato string
let string = fecha.toString();
//toTime() retorna la hora en formato number
let time = fecha.getTime();
//sumar dos fechas
let sumarFechas = new Date(fecha.setDate(fecha.getDate() + 1));
//comparar fechas
let compararFechas = new Date().getTime() < sumarFechas.getTime();

//Arrays
//Ejemplo de un array
let miArray = [
  "cadena",
  10,
  true,
  {
    nombre: "Pedro",
    apellido: "Plasencia",
  },
];

//Declara un array vacío
let arrayVacio = [];
// Si lo instanciamos con un solo parámetro en el constructor, creará un array con x posiciones vacías con valores undefined
let instanciaArray = new Array();
//Obtener longitud del array
let longitudArray = miArray.length;
//Obtener valor de la última posición del array
let valorUltimaPos = miArray[miArray.length - 1];
//Agregar valores al array
miArray.push("nuevo valor");
//Validar si es un array
let isArray = Array.isArray(miArray);
// array pop elimina el último elemento del array
let popArray = miArray.pop();
// array shift elimina el primer elemento del array
let shiftArray = miArray.shift();
// array unshift agrega un elemento al inicio del array
let unshiftArray = miArray.unshift("valor unshifted");
//delete array[posicion] elimina el elemento de la posición indicada
delete miArray[2];
//array.splice(posicion, cantidad, valor) elimina y/o agrega elementos al array
let spliceArray = miArray.splice(2, 1);
//array.slice(posicion, cantidad) retorna una copia del array desde la posición indicada
let sliceArray = miArray.slice(0, 1);
//concatenar arreglos con el método concat()
let miArray2 = ["nuevo array"];
let concatArray = miArray.concat(miArray2);
//spread operator
let spreadArray = [...miArray, ...miArray2, "asdasd"];
//transformar array a string
let arrayToString = miArray.toString();

console.log(miArray);
//Iteraciones sobre arreglos
//ciclo for
for (let i = 0; i < miArray.length; i++) {
  if (i === 1) {
    console.log(`posicion ${i}`);
  }
  if (typeof miArray[i] === "object") {
    console.log(JSON.stringify(miArray[i]));
  }
}

//foreach
let arrayForEach = [
  { nombre: "Pedro", edad: 31, direccion: { calle: "Mi casa", numero: 2 } },
  { nombre: "Maria", edad: 27, direccion: { calle: "Mi casa", numero: 2 } },
  { nombre: "Juan", edad: 45, direccion: { calle: "Mi casa", numero: 2 } },
];
arrayForEach.forEach((item, index) => {
  //&& = "and"
  //|| = "or"
  if (item.nombre === "Pedro" && item.edad <= 31)
    console.log(
      `Hola ${item.nombre}! Bienvenido a programación en español! He visto que vives en ${item.direccion.calle}`
    );
});

//map - retorna un nuevo array con los resultados de la función
let arrayMap = arrayForEach.map((item, index) => {
  return { nombre: item.nombre, edad: item.edad };
});

//reduce - retorna un valor
let totalEdad = 0;
arrayReduce = arrayForEach.reduce((total, item, index) => {
  console.log(`${JSON.stringify(total)} ${JSON.stringify(item)}`);
  return (totalEdad += item.edad);
});

//filter - retorna un nuevo array con los elementos que cumplan la condición
let arrayFilter = arrayForEach.filter((item, index) => {
  return item.edad >= 30;
});

//map (funcion) retorna un array a partir de operaciones sobre los items de otro array
let arreglo = ["a", "b", "c"];
let arreglo2 = arreglo.map((item) => `${item} hola`);
//Slice (inicio, fin) retorna un array
let slicedArray = arreglo.slice(0, 1);
//Indexof (buscar, inicio) retorna la posición de la primera coincidencia
let indexArray = arreglo.indexOf("a");

//every (funcion) retorna true si todos los elementos cumplen la condición
let everyArray = arreglo.every((item) => {
  return typeof item === "string";
});

//some (funcion) retorna true si al menos un elemento cumple la condición
let someArray = arreglo.some((item) => {
  return item === "a";
});

//indexOf (buscar, inicio) retorna la posición de la primera coincidencia
let indexOfArray = arreglo.indexOf("a");

//includes (buscar) retorna true si el elemento está en el array
let includesArray = arreglo.includes("a");
console.log(includesArray);

//find (funcion) retorna el primer elemento que cumpla la condición
let findArray = arreglo.find((item) => {
  return item.indexOf("a") !== -1;
});

//findIndex (funcion) retorna la posición del primer elemento que cumpla la condición
let findIndexArray = arreglo.findIndex((item) => {
  return item.indexOf("a") !== -1;
});

//keys (objeto) retorna un array con las claves del objeto
let llaves = arreglo.keys();
console.log(llaves);

for (let alias of llaves) {
  console.log(alias);
}

//Objetos
let usuarios = {
  nombre: "Pedro",
  apellido: "Plasencia",
  edad: 31,
  direccion: {
    calle: "Calle 1",
    casa: 123131231,
    pais: "España",
  },
};

for (let x in usuarios) {
  console.log(x);
  console.log(usuarios[x]);
  if (typeof usuarios[x] === "object") {
    for (let y in usuarios[x]) {
      console.log(y);
      console.log(usuarios[x][y]);
    }
  }
}

const recursiveObj = (obj) => {
  for (let x in obj) {
    console.log(x);
    console.log(obj[x]);
    if (typeof obj[x] === "object") {
      recursiveObj(obj[x]);
    }
  }
};

recursiveObj(usuarios);

let nombre = usuarios.nombre;
//Estándar de constantes: mayúsculas + snakecase
const FECHA_DE_HOY = new Date();

//Estándar de variables: minúsculas + camelcase
let fechaDeHoy = new Date();
