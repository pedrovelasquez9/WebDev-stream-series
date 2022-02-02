//APIs del navegador
/**
 *
 * API del DOM (Document object model)
 *
 */
const inputElem = document.getElementById("mi-input");
inputElem.value = "Hola";

inputElem.addEventListener("focus", () => {
  console.log("Haz dado click en el input");
});

console.log(inputElem);

/**
 *
 * API de almacenamiento
 *
 */
const miObjeto = {
  nombre: "Programación",
  apellido: "En Español",
  redes: ["youtube", "instagram", "twitter", "facebook", "discord", "twitch"],
};

localStorage.setItem("miObjeto", JSON.stringify(miObjeto));

const desdeStorage = localStorage.getItem("miObjeto");
console.log(JSON.parse(desdeStorage));

/**
 *
 * API de geolocalización
 *
 */
const geolocationSuccess = (obj) => {
  console.log(obj);
};

const geolocationError = (err) => {
  console.log("Ha ocurrido un error ", err);
};

if ("geolocation" in navigator) {
  //Definimos el objeto de opciones
  const geo_options = {
    enableHighAccuracy: false,
    maximumAge: 30000,
    timeout: 27000,
  };

  /* la geolocalización está disponible */
  //Obtener las coordenadas actuales del usuario
  navigator.geolocation.getCurrentPosition(
    geolocationSuccess,
    geolocationError,
    geo_options
  );
  //Si queremos seguir la posición del usuario mientras cambia podemos usar el watchPosition
  /*navigator.geolocation.watchPosition(
    geolocationSuccess,
    geolocationError,
    geo_options
  );*/
} else {
  /* la geolocalización NO está disponible */
  alert("Tu navegador no soporta geolocalización");
}

/**
 *
 * API gráfica (canvas)
 *
 */

//Asignamos el tamaño del contenedor al elemento canvas
const mainCanvas = document.getElementById("main-canvas");

//Inicializamos el contexto del canvas
const context = mainCanvas.getContext("2d");

const dibujar = () => {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineWidth = 15;
  context.strokeStyle = "#000";
  context.lineCap = "round"; //posibles valores: round, butt y square
  context.lineJoin = "round"; //posibles valores: round, bevel y miter
  context.lineTo(150, 200);
  context.stroke();
};

dibujar();

/**
 *
 * API de audio/video
 *
 */
