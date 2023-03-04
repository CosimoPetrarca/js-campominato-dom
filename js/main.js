'Use strict'

/*-----------
   FUNZIONI 
-----------*/

// Crea Cella
function creaCella(elemento, classe1, classe2, valore, arrayBomb) {
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe1);
    elementoCreato.classList.add(classe2);
    elementoCreato.innerText = valore;

    elementoCreato.addEventListener('click', function () {
        if (arrayBomb.includes(valore)) {
            elementoCreato.classList.add('red');
            console.log("BOOM! Hai calpestato una bomba.");
            alert("BOOM! Hai calpestato una bomba.")
        } else {
            elementoCreato.classList.add('blue');
            console.log("Non hai calpestato una bomba.");
        }
    })

    return elementoCreato;
}

// Appendi Cella
function appendiCella(container, element) {
    container.append(element);
}

// funzione che genera un array casuale 
function randomArray(max, bombe) {
    let array = [];
    while (array.length < bombe) {
        let numeroRandom = Math.floor(Math.random() * max) + 1;
        if (!array.includes(numeroRandom)) {
            array.push(numeroRandom);
        }
    }
    return array;
}

// Crea Difficoltà
function start() {
    const difficult = document.querySelector(".difficult").value;
    const scelta = difficult;
    container.innerHTML = '';

    let max = 0;
    let bombe = 0;

    if (scelta === 'normal') {
        max = 81;
        bombe = 16;
    } else if (scelta === 'hard') {
        max = 49
        bombe = 16;
    } else {
        max = 100
        bombe = 16;
    }

    let arrayBomb = randomArray(max, bombe);
    console.log(arrayBomb);

    for (let i = 1; i <= max; i++) {
        const cella = creaCella('div', 'cella', scelta, i, arrayBomb);
        appendiCella(container, cella);
    }
}

    /*----------
        MAIN 
     ----------*/

    const container = document.querySelector(".griglia");
    const button = document.querySelector(".btn");


    // Pulsante Play
    button.addEventListener('click', start);


