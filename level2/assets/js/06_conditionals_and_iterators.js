//else if
let myNumber = 20;
if (myNumber > 20) {
  console.log("Mayor que");
} else if (myNumber < 20) {
  console.log("Menor que");
} else {
  console.log("Igual a");
}

//Switch
let diaSemana = new Date().getDay();
switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("El día debe ser un número del 0 al 6");
}

//while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

//break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`break ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`continue ${i}`);
}
