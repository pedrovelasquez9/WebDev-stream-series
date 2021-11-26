//Declaramos un objeto cuyas keys corresponden a los ids de los elementos html de imágenes
//y los valores son la urls que queremos asociar a esos elementos
let proyectos = {
  "proyecto-1": "https://google.com",
  "proyecto-2": "https://cafeceros.com",
  "proyecto-3": "https://youtube.com",
  "proyecto-4": "https://vscode.com",
};

//Recorremos el objeto y asignamos un evento click para abrir cada enlace
for (const i in proyectos) {
  document.getElementById(i).addEventListener("click", () => {
    window.open(proyectos[i]);
  });
}
