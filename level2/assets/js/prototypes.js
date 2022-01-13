let objeto = new Object({nombre: "Pedro"});
console.log(objeto);

let objeto1 = {
    propiedad1: "test",
    propiedad2: "otro test"
};

let objeto2 = Object.create(objeto1);
objeto2.prueba = "hola";

console.log(objeto2.prueba);
console.log(objeto1.prueba);

//Paso de valores
let a = 1;
let b = a;
b = 3;

console.log(a);
console.log(b);

//Paso por referencia
let obj1 = {a:1,b:2};
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.a = 2;

console.log(obj1);
console.log(obj2);