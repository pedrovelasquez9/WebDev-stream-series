//Las funciones generadoras son funciones que no ejecutan el cuerpo completo de la función definida, sino que se pueden retornar valores "por pasos" a través de la expresión yield.

//Las funciones retornan un iterador (objeto) que contiene un método next() que podemos ejecutar para acceder a más valores que la función esté definida para retornar

function* generarValores() {
  let valor = 0;
  while (valor < 3) {
    yield valor++;
  }
}

const generador = generarValores();
const value1 = generador.next();
console.log(value1);
const value2 = generador.next();
console.log(value2);
const value3 = generador.next();
console.log(value3);
const value4 = generador.next();
console.log(value4);
