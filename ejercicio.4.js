/*
    Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/





const repeatText = (text='', repeat=undefined) => (!text)
    // Mesaje repatido en una sola línea
    ?console.warn("Debe ingresar una cadena de texto")
    : (repeat === undefined)
        ?console.warn("Debe ingresar una número para repetir el texto")
        :console.info(`Texto: ${text}, Repetidor ${repeat}. Texto repetido:${text.repeat(repeat)}`);


const repeatText2 = (text="", repeat=undefined) => {
    // Mensaje repetido en varias líneas
    if (!text) return console.warn("No ingresaste un texto");
    if (repeat === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
    if (repeat === 0) return console.error("El número de veces no pueder ser 0");
    if (repeat < 0) return console.error("El número de veces no puede ser negativo");

    for (let i = 0; i<repeat;i++){
        console.info(`${text}, ${i+1}`);
    }

}

console.info("EJERCICIO 4");
repeatText("Hola Mundo ",3);
repeatText2("Chau Mundo", 2);