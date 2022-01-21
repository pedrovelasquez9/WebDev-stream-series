//recursividad
//Sumar los items del array:
const MI_ARRAY = [1,2,3,4,5,6,7,8,9];
//con reduce
let result = MI_ARRAY.reduce((prev, current) => prev + current, 0);
console.log(result);

//con recursividad
const sum = (num_array) => {
    if(num_array.length === 0){
        return 0;
    }
    //console.log("en esta iteracion el array es: ", JSON.stringify(num_array));
    const [primero, ...resto] = num_array;
    //console.log(`El primer elemento aquì es ${primero} y el resto del array es: ${resto}`);
    //console.log(primero + sum(resto));
    return primero + sum(resto);
}

result = sum(MI_ARRAY);
console.log(result);

//caso màs real
//Partimos del escenario donde tenemos una api de terceros que queremos consultar desde nuestro front o desde nuestro back. La api en cuestiòn retorna el estatus del proceso que esta ejecutando hasta que se completa y solo alli retorna la data obtenida del proceso.

const URL_BASE = "https://jsonplaceholder.typicode.com/posts";

const myApiCall = async () => {
   //const data = await fetch(URL_BASE);
   if(data.status === 200){
       return data.json();
   }
   setTimeout(() => {
    myApiCall();
   },30000);
   
};