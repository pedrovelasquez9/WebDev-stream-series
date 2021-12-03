const readInput = async () => {
  let input = await (await fetch("./day3/input.txt")).text();
  return input.split("\n");
};

readInput().then((input) => {
  //Parte 1
  let gammaRate = [];
  let epsilonRate = [];
  const longitud = 12;
  for (let x = 0; x < longitud; x++) {
    const [contadorUnos, contadorCeros] = countCommonValues(input, x);
    if (contadorCeros < contadorUnos) {
      epsilonRate.push(0);
      gammaRate.push(1);
    } else {
      epsilonRate.push(1);
      gammaRate.push(0);
    }
  }

  let epsilon = parseInt(epsilonRate.join(""), 2);
  let gamma = parseInt(gammaRate.join(""), 2);
  let powerConsumption = epsilon * gamma;
  console.log("respuesta parte 1:", powerConsumption);

  //parte 2
  let oxygen = getOxygenAndCO2(input, "oxygen", 0);
  let cO2 = getOxygenAndCO2(input, "co2", 0);
  let oxygenReal = getRealValue(oxygen.input, "oxygen", oxygen.pos);
  let cO2Real = getRealValue(cO2.input, "co2", cO2.pos);
  console.log("respuesta parte 2:", oxygenReal * cO2Real);
});

const getOxygenAndCO2 = (input, generator, pos = null) => {
  let arrayOxigen = [];
  let arrayCO2 = [];
  const [contadorUnos, contadorCeros] = countCommonValues(input, pos);

  if (contadorCeros < contadorUnos) {
    arrayOxigen = input.filter((item) => item[pos] == "1");
    arrayCO2 = input.filter((item) => item[pos] == "0");
  } else if (contadorCeros == contadorUnos) {
    generator == "oxygen"
      ? (arrayOxigen = input.filter((item) => item[pos] == "1"))
      : (arrayCO2 = input.filter((item) => item[pos] == "0"));
  } else {
    arrayOxigen = input.filter((item) => item[pos] == "0");
    arrayCO2 = input.filter((item) => item[pos] == "1");
  }

  if (input.length == 2) {
    return { input, pos };
  }

  pos++;
  if (generator == "oxygen") {
    return getOxygenAndCO2(arrayOxigen, generator, pos);
  } else {
    return getOxygenAndCO2(arrayCO2, generator, pos);
  }
};

const countCommonValues = (input, pos) => {
  let contadorCeros = 0;
  let contadorUnos = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i][pos] == "1") {
      contadorUnos++;
    } else {
      contadorCeros++;
    }
  }
  return [contadorUnos, contadorCeros];
};

const getRealValue = (arr, generator, pos) => {
  let binary;
  if (generator == "oxygen") {
    binary = arr.filter((item) => item[pos] == "1");
    binary = parseInt(binary[0], 2);
  } else {
    binary = arr.filter((item) => item[pos] == "0");
    binary = parseInt(binary[0], 2);
  }

  return binary;
};
