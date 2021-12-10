//Leemos y formateamos el input
const readInput = async () => {
  let input = await (await fetch("./day4/input.txt")).text();
  input = input.split("\r\n");

  let values = input
    .shift()
    .split(",")
    .map((item) => parseInt(item));
  let matrix = [];

  input.forEach((value, i) => {
    if (value.length === 0) {
      matrix.push([]);
    } else {
      matrix[matrix.length - 1].push(
        value
          .split(" ")
          .filter((item) => item.length > 0)
          .map((item) => parseInt(item))
      );
    }
  });
  return { values, matrix };
};

//PARTE 1
let input = readInput().then((res) => {
  //iteraciones
  let iterationResult1 = mainIteration(res, true);
  let crapResult1 = calculateBingoCrap(
    iterationResult1.matrix,
    iterationResult1.value,
    iterationResult1.table
  );
  console.log(`resultado primera parte: ${crapResult1}`);
});

//PARTE 2
let input2 = readInput().then((res) => {
  //iteraciones
  let iterationResult2 = mainIteration(res);
  let crapResult2 = calculateBingoCrap(
    iterationResult2.matrix,
    iterationResult2.value,
    iterationResult2.table
  );
  console.log(`resultado segunda parte: ${crapResult2}`);
});

const calculateBingoCrap = (matrix, val, x) => {
  console.log(matrix, val, x);
  let flatArrayVal = matrix[x]
    .flat()
    .filter((item) => !isNaN(item))
    .reduce((a, b) => a + b);
  return flatArrayVal * val;
};

const mainIteration = (res, solution) => {
  console.log(res.matrix);
  validatedTable = [];
  let part2 = {};
  for (let i = 0; i < res.values.length; i++) {
    for (let x = 0; x < res.matrix.length; x++) {
      if (validatedTable.includes(x)) {
        continue;
      }
      for (let y = 0; y < res.matrix[x].length; y++) {
        for (let z = 0; z < res.matrix[x][y].length; z++) {
          res.matrix[x][y][z] =
            res.matrix[x][y][z] === res.values[i] ? "p" : res.matrix[x][y][z];
        }
        if (
          validateRows(res.matrix, x, y) ||
          validateColumns(res.matrix, x, y)
        ) {
          validatedTable.push(x);
          val = res.values[i];
          part2 = { matrix: res.matrix, value: res.values[i], table: x };
          if (solution)
            return { matrix: res.matrix, value: res.values[i], table: x };
        }
      }
    }
  }
  return part2;
};

const validateRows = (matrix, x, y) => {
  let res = matrix[x][y].every((item) => item === "p");
  return res;
};

const validateColumns = (matrix, x, y) => {
  let res =
    matrix[x].map((item) => item[y]).filter((num) => isNaN(num)).length === 5
      ? true
      : false;
  return res;
};
