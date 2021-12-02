const readInput = async () => {
  let input = await (await fetch("./day2/input.txt")).text();
  return input.split("\n");
};

const solveProblem = async (part) => {
  let data = await readInput();
  data = data.map((x) => x.split(" "));
  let miPosicion = {
    posicionHorizontal: 0,
    profundidad: 0,
    aim: 0,
  };

  data.forEach((item) => {
    //Soluciona la parte 1 del ejercicio
    if (part === 1) {
      if (item[0] === "forward") {
        miPosicion.posicionHorizontal += parseInt(item[1]);
      }

      if (item[0] === "up") {
        miPosicion.profundidad -= parseInt(item[1]);
      }

      if (item[0] === "down") {
        miPosicion.profundidad += parseInt(item[1]);
      }
    } else {
      //Soluciona la parte 2 del ejercicio
      if (item[0] === "forward") {
        miPosicion.posicionHorizontal += parseInt(item[1]);
        miPosicion.profundidad += parseInt(item[1]) * miPosicion.aim;
      }

      if (item[0] === "up") {
        miPosicion.aim -= parseInt(item[1]);
      }

      if (item[0] === "down") {
        miPosicion.aim += parseInt(item[1]);
      }
    }
  });

  return miPosicion.posicionHorizontal * miPosicion.profundidad;
};

//resultado de parte 1
let result1 = solveProblem(1).then((result) => {
  console.log(result);
});

//resultado de parte 2
let result2 = solveProblem(2).then((result) => {
  console.log(result);
});
