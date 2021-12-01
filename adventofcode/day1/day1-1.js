const lookForInput = async () => {
  let response = await fetch("./input.txt");
  let text = await response.text();
  const input = text.split("\n").map((x) => parseInt(x));
  console.log(input);
  const result = solvePart1(input);
  const suma = createSumWindows(input);
  const result2 = solvePart1(suma);
  console.log(result2);
};

const createSumWindows = (input) => {
  let sum = [];
  for (let i = 0; i < input.length; i++) {
    if (i + 1 >= input.length) {
      break;
    }
    if (i > 0) {
      sum.push(input[i - 1] + input[i] + input[i + 1]);
    }
  }
  return sum;
};

const solvePart1 = (input) => {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (i > 0 && input[i] > input[i - 1]) {
      counter++;
    }
  }
  return counter;
};

lookForInput();
