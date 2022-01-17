//acceder al objeto window
let parrafo = window.document.getElementById("parrafo");
console.log(parrafo);

//Ver el ancho y alto de la ventana del navegador
let ancho = window.innerWidth;
let alto = window.innerHeight;
console.log("ancho: " + ancho + "px");
console.log("alto: " + alto + "px");

//abrir una nueva ventana del navegador
// let miVentana = window.open(
//   "https://www.google.com",
//   "nuevaVentana",
//   "width=400, height=400"
// );

//cerrar la ventana actual del navegador
//window.close();
//movernos a la ventana actual
// miVentana.moveTo(700, 400);
// enfocar la ventana creada
// miVentana.focus();
// redimensionar la ventana del navegador
// miVentana.resizeTo(800, 600);

//mover el scroll de la ventana
window.scrollTo(0, 0);

//ver el ancho de la pantalla del usuario
let anchoPantalla = window.screen.width;
console.log("ancho de la pantalla: " + anchoPantalla + "px");
//ver el alto de la pantalla del usuario
let altoPantalla = window.screen.height;
console.log("alto de la pantalla: " + altoPantalla + "px");

//ver el ancho disponible de la pantalla
let anchoDisponible = window.screen.availWidth;
console.log("ancho disponible de la pantalla: " + anchoDisponible + "px");

//ver el alto disponible de la pantalla
let altoDisponible = window.screen.availHeight;
console.log("alto disponible de la pantalla: " + altoDisponible + "px");

//objeto location
//ver la url actual
console.log(window.location.href);

//ver el nombre de dominio
console.log(location.hostname);

//ver el protocolo de la página actual
console.log(location.protocol);

//ver el path de la página actual
console.log(location.pathname);

//ver el historial del navegador
console.log(window.history);
//volver atrás en el historial
//window.history.back();
//ir hacia adelante en el historial
//window.history.forward();

//obtener el nombre de la app del navegador
let nombreApp = window.navigator.appName;

//obtener la version de la app del navegador
let cookies = window.navigator.cookieEnabled;
console.log(cookies);

//obtener la geolocalización del usuario a través del navigator.geolocation
//definimos opciones del método
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
//función (callback) a ejecutar si todo va bien
const success = (pos) => {
  console.log(pos);
  //pos.longitude
  //pos.latitude
};
//función (callback) a ejecutar si algo va mal
const error = (err) => {
  console.log(err);
};
//Validamos si el navegador soporta geolocalización y obtenemos la posición actual del usuario
if (window.navigator.geolocation) {
  //window.navigator.geolocation.getCurrentPosition(success, error, options);
}
