//Callbacks
const API_KEY = 'xxx';

const miCallback = ()=> {
    console.log("Hola mundo asincrono");
};

setTimeout(miCallback, 1000);
console.log("yo vengo despues =)");

//Promesas
const miFuncionAsincrona = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`).then(response => {
            resolve(response.json().then(res => res.data.images.original.url));
        }).catch(e => {reject(e)})
    })
};

miFuncionAsincrona().then(res => {
    const imageContainer = document.createElement('img');
    imageContainer.src = res;
    document.body.appendChild(imageContainer);
}).catch(e => console.log(e)).finally(() => console.log("ejecuta el finally"));

//Promise all & promise race

const multiplePromises = async () => {
    const prom1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const prom2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
    return await Promise.all([prom1, prom2]);
}

const racePromises = async () => {
    const prom1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const prom2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
    return await Promise.race([prom1, prom2]);
}

multiplePromises().then(res => {
    console.log("Multiples promesas", res);
});

racePromises().then(res => {
    console.log("carrera de promesas", res);
});

//async/await

const findGif = async (query) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=5`;
    try{
        return await fetch(URL);
    } catch(e) {
        console.error(e);
    }
};

const gifCallback = (res) => {
    res.json().then(data => {
        data.data.forEach(el => {
            const imageContainer = document.createElement('img');
            imageContainer.src = el.images.original.url;
            document.body.appendChild(imageContainer);
        })
        console.log(data.data)
    });
}

findGif("hello").then(res => gifCallback(res));