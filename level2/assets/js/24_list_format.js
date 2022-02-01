//Transformar el siguiente arreglo en un string uniendo los valores con "," y el ultimo valor con "y"
const lenguajes = ["Java", "Python", "Javascript"];

//Forma fea
const stringChapuza = `${lenguajes[0]}, ${lenguajes[1]} y ${lenguajes[2]}`;
console.log(stringChapuza);

//Otra forma, quizas la comun
const stringComun = `${lenguajes.slice(0, -1).join(', ')} y ${lenguajes.slice(-1)}`;
console.log(stringComun);

//con Intl (api de internacionalizacion)
const conIntl = new Intl.ListFormat('es').format(lenguajes);

console.log(conIntl);