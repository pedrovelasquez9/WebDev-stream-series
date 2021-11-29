//Obtener un elemento del DOM por su id (retorna un solo elemento)
let parrafo = document.getElementById("parrafo");
//Obtener un elemento del DOM por su clase (retorna un array)
let botones = document.getElementsByClassName("btn");
console.log(botones[0]);
//Obtener un elemento del DOM por su etiqueta (retorna un array)
let titulo = document.getElementsByTagName("h1");
console.log(titulo);

//Obtener un elemento del DOM con query selector all (retorna un array)
let elementos = document.querySelectorAll("p");
console.log(elementos[0]);

//Obtener un número aleatorio entre un número mínimo y un número máximo
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
parrafo.innerHTML = getRandomInt(1, 10);
console.log(parrafo);

//Obtener una imagen aleatoria usando la api de unsplash
const getRandomImg = async () => {
  return await fetch(`https://source.unsplash.com/random/1920x1080`);
};

//Llamada y captura de la promesa de la función getRandomImg
getRandomImg().then((res) => {
  //Asignación de imagen de fondo al body del HTML
  let bodyHTML = document.querySelector("body");
  bodyHTML.style.backgroundImage = `url(${res.url})`;
});

const saludarConClick = () => {
  alert("Hola mundo, haz hecho click en el botón!");
};

botones[0].addEventListener("click", saludarConClick);

//formularios
//Agrego el evento submit al form desde el DOM
let formulario = document.getElementById("miForm");
let inputText = document.getElementById("input_texto");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  enviar();
});

inputText.addEventListener("keyup", (event) => {
  validarForm();
});

//Defino la función a ejecutar al enviar el formulario
const enviar = () => {
  validarForm() ? alert(`Formulario enviado ${inputText.value}`) : null;
};

const validarForm = () => {
  let errorLabel = document.getElementById("errorLabel");
  if (
    !inputText.value ||
    inputText.value.length === 0 ||
    inputText.value === ""
  ) {
    errorLabel.classList.remove("oculto");
    return false;
  } else {
    errorLabel.classList.add("oculto");
    return true;
  }
};
