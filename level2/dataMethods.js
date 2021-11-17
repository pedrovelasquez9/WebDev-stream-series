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

console.log(compararFechas);

//Arrays
//map (funcion) retorna un array a partir de operaciones sobre los items de otro array
let arreglo = ["a", "b", "c"];
let arreglo2 = arreglo.map((item) => `${item} hola`);
//Slice (inicio, fin) retorna un array
let slicedArray = arreglo.slice(0, 1);
//Indexof (buscar, inicio) retorna la posición de la primera coincidencia
let indexArray = arreglo.indexOf("a");

console.log(`hola`);
