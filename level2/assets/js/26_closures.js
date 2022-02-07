//Las clausuras permiten a una función "hija" acceder al ámbito de su función padre
const padre = () => {
  let nombre = "Programación en español";
  const hija = () => {
    console.log(nombre);
  };
  hija();
};

padre();

//Definimos una función padre y retornamos la definición de otra función
const generarOperaciones = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

//Ejecutamos la función padre almacenando la definición de la función hija en una variable (esta definición mantiene el ámbito y valores que enviamos a la función padre)
let operacion1 = generarOperaciones(1);
//Al ejecutar la función hija almacenada en la variable, nos retorna la suma de ambos valores
const resultadoSuma1 = operacion1(5);
console.log(`resultado de la operacion1 ${resultadoSuma1}`);

let operacion2 = generarOperaciones(9);
const resultadoSuma2 = operacion2(3);
console.log(`resultado de la operacion2 ${resultadoSuma2}`);
