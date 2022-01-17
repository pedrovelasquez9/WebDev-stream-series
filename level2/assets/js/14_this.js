//This, por defecto, hace referencia al objeto window
console.log(this === window);
console.log(this.document === window.document);

function this1(){
    return this === window;
}

console.log(this1());

//Dentro de un objeto, this puede hacer referencia a sus propiedades (en el contexto de ejecuciòn de una funcion)

let obj = {
    num: 5,
    func: function(){
        return this.num;
    }
};

console.log(obj.func());

let obj2 = {
    num: 1
};

function func2(){
    return this.num;
}

obj2.func = func2;
console.log(obj2.func());

let obj3 = {
    num1: 1,
    num2: 2,
    get sum(){
        return this.num1 + this.num2;
    }
}

console.log(obj3.sum);

function Construir(){
    this.num = 2;
}

let ob = new Construir();
console.log(ob.num);

function Construir2(){
    this.num = 2;
    return {num: 8};
}

let ob2 = new Construir2();
console.log(ob2.num);

//call
let user1 = {
    nombre: "Pedro",
    saludo: function(str){
        console.log(`Hola ${this.nombre} desde call ${str}`)
    }
}

user1.saludo("con argumento");
user1.saludo.call({nombre: "Maria"}, "con argumento");

//apply
function llamadaUser2(){
    let user2 = {
        nombre: "Maria",
        saludo: function(){
            console.log(`Hola ${this.nombre} desde call ${arguments[1]}`);
        }
    }
    user2.saludo.apply(user2, arguments);
}

llamadaUser2("posicion 0", "position 1");

//bind
let user3 = {
    nombre: "Pedro",
    saludo: function(str){
        console.log(`Hola ${this.nombre} desde bind ${str}`);
    }
}

user3.saludo("sin bind");
let llamadaConBind = user3.saludo.bind({nombre: "Maria"});
llamadaConBind("con bind");