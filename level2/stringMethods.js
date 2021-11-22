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
