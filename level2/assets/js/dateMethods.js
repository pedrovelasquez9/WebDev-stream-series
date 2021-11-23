//Date()
//Date(year, month, day, hours, minutes, seconds, milliseconds)
//Date(milliseconds)
//Date(dateString)
let fecha = new Date();
let fecha2 = new Date(2020, 1, 1, 0, 0, 0, 0);
let fecha3 = new Date("2020-01-01");
let fecha4 = new Date(1577880000000);
let fecha5 = new Date("2020-01-01T00:00:00.000Z");
//getFullYear() retorna el año
let year = fecha.getFullYear();
//getMonth() retorna el mes
let month = fecha.getMonth();
//getDate() retorna el día
let date = fecha.getDate();
//getDay() retorna el día de la semana
let day = fecha.getDay();
//getHours() retorna las horas
let hours = fecha.getHours();
//getMinutes() retorna los minutos
let minutes = fecha.getMinutes();
//getSeconds() retorna los segundos
let seconds = fecha.getSeconds();
//getMilliseconds() retorna los milisegundos
let milliseconds = fecha.getMilliseconds();
//Formatear fecha con cada propiedad a través de variables
let miFecha = `${date}/${month}/${year}`;
//toDateString() retorna la fecha en formato string
let dateString = fecha.toDateString();
//toTimeString() retorna la hora en formato string
let timeString = fecha.toTimeString();
//toLocaleDateString() retorna la fecha en formato local
let localeDateString = fecha.toLocaleDateString();
//toLocaleTimeString() retorna la hora en formato local
let localeTimeString = fecha.toLocaleTimeString();
//toLocaleString() retorna la fecha y hora en formato local
let localeString = fecha.toLocaleString();
//toISOString() retorna la fecha en formato ISO
let isoString = fecha.toISOString();
//toJSON() retorna la fecha en formato JSON
let jsonString = fecha.toJSON();
//toString() retorna la fecha en formato string
let string = fecha.toString();
//toTime() retorna la hora en formato number
let time = fecha.getTime();
//sumar dos fechas
let sumarFechas = new Date(fecha.setDate(fecha.getDate() + 1));
//comparar fechas
let compararFechas = new Date().getTime() < sumarFechas.getTime();
