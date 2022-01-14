//Clase en JS

class Automovil {
    constructor(color, placa, velocidad) {
        this.color = color;
        this.placa = placa;
        this.velocidad = velocidad;
    }

    get velocidadActual(){
        return this.acelerar();
    }

    static pintar(color){
        return `ahora el coche es ${color}`;
    }

    acelerar(){
        return `La velocidad del coche es ${this.velocidad}kmh`;
    }
}

//Herencia de clase

class Peugeot extends Automovil{
    
    constructor(velocidad){
        super("azul", "CDEQW", 80);
        super.velocidad = velocidad;
    }

    acelerar(){
        console.log(super.acelerar());
    }
}

let miCoche = new Automovil("rojo", "ABCDE", 120);
console.log(miCoche.velocidadActual);
console.log(Automovil.pintar("azul"));
let miPeugeot = new Peugeot(80);
miPeugeot.acelerar();