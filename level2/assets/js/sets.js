//sets
let arreglo = ["prueba1", "prueba1", "valor2", "valor3", 3, false];
let setObject = new Set(arreglo);
let setArray = [...setObject];
setObject.add("valor4");
setObject.delete("valor2");
let hasValue = setObject.has("valor4");
setObject.forEach((item) => {
  console.log(item);
});
console.log(setObject.values());
setObject.clear();
console.log(hasValue);
console.log(setObject);

//maps
let mapData = new Map();
mapData.set("key1", "value1");
mapData.set(3, "value3");
mapData.set(true, "value4");
mapData.has("key1");
mapData.get("key1");
mapData.delete("key1");
mapData.size;
mapData.forEach((value, key) => {
  console.log(key, value);
});
