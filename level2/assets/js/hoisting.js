//hoisting:
x = "asdasdasd";
console.log(x);
var x;

saludar("Pedro");

function saludar(nombre){
    alert(`Hola! ${nombre}`);
};