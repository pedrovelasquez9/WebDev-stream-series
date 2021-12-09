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

let input = readInput().then((res) => {
  //iteraciones
  let iterationResult = mainIteration(res);
  let crapResult = calculateBingoCrap(
    iterationResult.matrix,
    iterationResult.value,
    iterationResult.table
  );
  console.log(crapResult);
});

const calculateBingoCrap = (matrix, val, x) => {
  console.log(matrix, x);
  let flatArrayVal = matrix[x]
    .flat()
    .filter((item) => !isNaN(item))
    .reduce((a, b) => a + b);
  return flatArrayVal * val;
};

const mainIteration = (res) => {
  console.log(res.matrix);
  for (let i = 0; i < res.values.length; i++) {
    for (let x = 0; x < res.matrix.length; x++) {
      for (let y = 0; y < res.matrix[x].length; y++) {
        for (let z = 0; z < res.matrix[x][y].length; z++) {
          res.matrix[x][y][z] =
            res.matrix[x][y][z] === res.values[i] ? "p" : res.matrix[x][y][z];
        }
        if (
          validateRows(res.matrix, x, y) ||
          validateColumns(res.matrix, x, y)
        ) {
          return { matrix: res.matrix, value: res.values[i], table: x };
        }
      }
    }
  }
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
