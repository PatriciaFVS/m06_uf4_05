function divisibleperDos(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`${num} es divisible por 2.`);
        } else {
            reject(`${num} no es divisible por 2.`);
        }
    });
   
} 
divisibleperDos(8).then(console.log).catch(console.log);
divisibleperDos(5).then(console.log).catch(console.log);

const comprovaRang = (valor) => {
    return new Promise((resolve, reject) => {
        if (valor >= 0 && valor <= 10) {
            resolve(`${valor} está entre 0 y 10.`);
        } else {
            reject(`${valor} no está entre 0 y 10.`);
        }
    });
}

comprovaRang(2).then(console.log).catch(console.log);
comprovaRang(15).then(console.log).catch(console.log);
comprovaRang(-10).then(console.log).catch(console.log);

let arrVocals = ["a", "e", "i", "o", "u"];

function esVocal(lletra) {
    return new Promise((resolve, reject) => {
        if (arrVocals.includes(lletra.toLowerCase())) {
            resolve(`${lletra} es una vocal.`);
        } else {
            reject(`${lletra} no es una vocal.`);
        }
    });
}

esVocal("a").then(console.log).catch(console.log);
esVocal("b").then(console.log).catch(console.log);
esVocal("u").then(console.log).catch(console.log);
esVocal("ñ").then(console.log).catch(console.log);


function divisio(primerVal, segonVal) {
    return new Promise((resolve, reject) => {
        if (segonVal !== 0) {
            resolve(`El resultado de la división es ${primerVal /segonVal}.`);
        } else {
            reject("Error: División por cero.");
        }
    });
}

divisio(10, 2).then(console.log).catch(console.log);
divisio(7, 0).then(console.log).catch(console.log);
