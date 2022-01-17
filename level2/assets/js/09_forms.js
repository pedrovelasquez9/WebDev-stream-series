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
