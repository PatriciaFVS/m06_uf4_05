async function divisiblePerDos(num) {
    try {
        const result = await new Promise((resolve, reject) => {
            if (num % 2 === 0) {
                resolve(`${num} es divisible por 2.`);
            } else {
                reject(`${num} no es divisible por 2.`);
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


divisiblePerDos(8);
divisiblePerDos(5);

async function comprovaRang(valor) {
    try {
        const result = await new Promise((resolve, reject) => {
            if (valor >= 0 && valor <= 10) {
                resolve(`${valor} está entre 0 y 10.`);
            } else {
                reject(`${valor} no está entre 0 y 10.`);
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

comprovaRang(2);
comprovaRang(15);
comprovaRang(-10);

let arrVocals = ["a", "e", "i", "o", "u"];

async function esVocal(lletra) {
    try {
        const result = await new Promise((resolve, reject) => {
            if (arrVocals.includes(lletra.toLowerCase())) {
                resolve(`${lletra} es una vocal.`);
            } else {
                reject(`${lletra} no es una vocal.`);
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


esVocal("a");
esVocal("b");
esVocal("u");
esVocal("ñ");

async function divisio(primerVal, segonVal) {
    try {
        const result = await new Promise((resolve, reject) => {
            if (segonVal !== 0) {
                resolve(`El resultado de la división es ${primerVal / segonVal}.`);
            } else {
                reject("Error: División por cero.");
            }
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

divisio(10, 2);
divisio(7, 0);
