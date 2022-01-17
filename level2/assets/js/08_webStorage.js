//localStorage
//Guardamos un objeto en localStorage
localStorage.setItem(
  "usuario",
  JSON.stringify({
    nombre: "Pedro",
    apellido: "Plasencia",
    edad: 31,
  })
);

//Obtenemos un objeto desde localStorage
let userData = JSON.parse(localStorage.getItem("usuario"));
console.log(userData);

//Creamos un elemento HTML para mostrar una propiedad del objeto
const createUserElement = async () => {
  const elem = await createDOMElement(
    "span",
    userData.nombre,
    {
      id: "username",
    },
    {}
  );
  return elem;
};

createUserElement().then((e) => document.body.appendChild(e));

//Borramos una propiedad del localstorage
//localStorage.removeItem("usuario");
//Limpiamos todo el localstorage
// localStorage.clear();

//sessionStorage
//Guardamos un objeto en sessionStorage
sessionStorage.setItem(
  "dataUser",
  JSON.stringify({ nombre: "Pedro", edad: 31, web: "cafeceros.com" })
);

//Obtenemos un objeto desde sessionStorage
let userDataSession = JSON.parse(sessionStorage.getItem("dataUser"));

//Borramos una propiedad del sessionStorage
sessionStorage.removeItem("dataUser");
//Limpiamos todo el sessionStorage
sessionStorage.clear();
