//Tipado dinamico
let miVariable = "Hola mundo";
console.log(miVariable);

miVariable = 154;
console.log(miVariable);

//Retorna un string concatenado = "3400"
miVariable = 3 + "400";
console.log(miVariable);

//Retorna un numero resultante de la operacion = 397
miVariable = 400 - "3";
console.log(miVariable);

//Retorna 1 en funcion de 0+1;
miVariable = false + 1;
console.log(miVariable);

//typeof, me muestra el tipo de valor almacenado en la variable
console.log(typeof miVariable);

console.log(typeof []);
console.log(typeof {});

//Doble comparacion (comparacion simple o debil) (compara el valor)
console.log(400 == "400");

//triple comparacion (comparacion estricta) (compara valor y tipo de dato)
console.log(400 === "400");
