//try catch
const miFuncion = () => {
  try {
    let miNum = 1;
    miNum++;
    console.log(miNum);
    console.assert(miNum === 1, "No es 1");
  } catch (error) {
    throw error;
  } finally {
    console.log("asdjhasdklasjhdkja");
  }
};

miFuncion();

//debugger
let multiplicacion = 10 * 15;
console.log(multiplicacion);
//debugger;
multiplicacion = "hola";
console.log(multiplicacion);
