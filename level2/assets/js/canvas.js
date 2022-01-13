const vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let mapa = "./assets/img/tile.webp";


let imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibujar);


function dibujar() {
    papel.drawImage(imagen, 0, 0);
}
function aleatorio(min, max) {
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}