//Función para generar elementos del DOM realizada por Mr. Noctis
const create = (type) => document.createElement(type);

const txt = (text) => document.createTextNode(text);

const createDOMElement = (tag, text, attributes, evts) => {
  return new Promise((resolve) => {
    const e = create(tag);

    if (text) e.appendChild(txt(text));

    for (const a in attributes) e.setAttribute(a, attributes[a]);
    for (const evt in evts) e.addEventListener(evt, evts[evt]);

    resolve(e);
  });
};

/*
Función para formatear texto
fmt: format text
text: 'Esto es un % con %'
items: ['texto', 'variables']
on: retorna el contenido formateado en caso true
term: '%' //Se puede cambiar por cualquier caracter que se quiera
*/
const fmt = (text, items, on = false, term = "%") => {
  if (text === undefined) return;
  if (text.length === 0) return;
  if (items.length > 0) {
    items.forEach((x) => {
      if (text.includes("%20") && term == "%") {
        console.error(
          "You're using encoded string with the replacement term of %"
        );
        console.warn(
          "Consider changing the term or use another function and not fmt()"
        );
        return;
      }
      text = text.replace(term, x);
    });
    on ? console.log(text) : null;
    return text;
  }
  return;
};

let miTexto = fmt(
  "Hola, mi nombre es % y mi apellido %",
  ["Pedro", "Plasencia"],
  false
);

console.log(miTexto);

const createNewElement = async () => {
  const elem = await createDOMElement(
    "a",
    "Go to home",
    {
      class: "link",
      target: "_blank",
      id: "title-link",
      href: window.location.pathname,
    },
    {
      click: (e) => alert("You have clicked on this link: %"),
    }
  );
  return elem;
};

createNewElement().then((e) => document.body.appendChild(e));
//FIN creación elementos del DOM

//Retorna un objeto con parámetros de una url de entrada
const getJSONUrl = (str) => {
  return new Promise((resolve) => {
    let aux = {};
    if (typeof str === "string" && str.length > 1) {
      const URL_OBJECT = new URL(str) ? new URL(str) : null;
      for (const i of new URLSearchParams(URL_OBJECT.search)) {
        aux[i[0]] = i[1];
      }
    }
    resolve(aux);
  });
};

getJSONUrl(
  "https://jsonplaceholder.typicode.com/todos?hola=mundo&nombre=pepito&apellido=grillo"
).then((x) => {
  console.log("Get Json url", x);
});

//Evalúa la similitud entre dos strings
function similarity(a, b) {
  try {
    let equivalency = 0;
    let minLength = a.length > b.length ? b.length : a.length;
    let maxLength = a.length < b.length ? b.length : a.length;
    for (let i = 0; i < minLength; i++) a[i] == b[i] ? equivalency++ : 0;

    return (equivalency / maxLength) * 100;
  } catch (e) {
    warn("Can't process similarity!");
  }
}

let sim = similarity("hola", "hello");
console.log(sim);

//Retorna un array con un rango de números
const range = (start, end) => {
  let aux = [];
  for (let i = start; i < end; i++) aux.push(i);
  return aux;
};

let rango = range(1, 10);
console.log(rango);
