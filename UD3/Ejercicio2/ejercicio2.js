/**
 * Amosar o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).
 */

//función que calcula los días que faltan hasta el 25 de Junio.
const calcularDias = () => {
    let fechaActual = new Date();
    let fechaObjetivo = new Date("2024-05-25");
    let diasRestantes = Math.floor((fechaObjetivo - fechaActual) / (1000 * 60 * 60 * 24));
    console.log("Faltan " + diasRestantes + " hasta el 25/06/2024.");
}

/**
 * Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no
 * que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
 */

//función que pide una fecha de cumpleaños por teclado e imprime todas las fechas en las que 
//el cumpleaños va a caer en fin de semana desde este año hasta el 2100.
const proximosCumplesEnFinde = () => {

    let fechaCumpleanos = new Date(prompt("Introduce la fecha tú cumpleaños (YYYY-MM-DD): "));
    console.log("La fecha de tú cumpleaños es: " + fechaCumpleanos);

    //Actualizo el año actual a la fecha del cumpleaños.
    fechaCumpleanos.setFullYear(new Date().getFullYear());
    let fechaMaxima = new Date("2100-01-01");

    while (fechaCumpleanos < fechaMaxima) {
        let diaSemanaCumpleanos = fechaCumpleanos.getDay();
        if (diaSemanaCumpleanos == 0 || diaSemanaCumpleanos == 6) {
            console.log(fechaCumpleanos.toDateString());
        }
        fechaCumpleanos.setFullYear(fechaCumpleanos.getFullYear() + 1);
    }
}

/**
 * Amosa a data actual en diferentes formatos segundo o valor que meta o usuario por parámetro (usa un switch):
 * 1. 17/02/2016
 * 2. Mércores, 17 de febreiro de 2016
 * 3. Wednesday, February 17, 2016.
 */

//función que devuelve la fecha actual en varios formatos, según la opción elegida.
const elegirFormatoFecha = () => {
    let opcion = prompt("Introduce un numero del 1 al 3 para seleccionar el formato de fecha: ");

    let fechaActual = new Date();

    switch (opcion) {
        case "1":
            console.log("La fecha actual en formato dd/mm/aaaa es: " + fechaActual.toLocaleDateString("es-ES"));
            break;
        case "2":
            console.log("La fecha actual en gallego en formato (Ej: Mércores, 17 de febreiro de 2016) es: " + fechaActual.toLocaleString("gl-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        case "3":
            console.log("La fecha actual en ingles en formato (Ej: Wednesday, February 17, 2016) es: " + fechaActual.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            break;
    }
}

/**
 * Amosa a hora actual en diferentes formatos segundo o valor que meta o
 * usuario por parámetro (usa un switch):
 * 1. 14:35:07 (hora detallada con minutos e segundos)
 * 2. 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes ou despois de mediodía).
 */

const elegirFormatoHora = () => {
    let opcion = prompt("Introduce un numero del 1 al 3 para seleccionar el formato de hora: ");

    let fechaActual = new Date();

    switch (opcion) {
        case "1":
            console.log("La hora actual en formato hh:mm:ss es: " + fechaActual.toLocaleTimeString("es-ES"));
            break;
        case "2":
            console.log("La hora actual en formato hh:mm:ss AM/PM es: " + fechaActual.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
            break;
        default:
            break;
    }
}

//Ejecución de las funciones
calcularDias();
proximosCumplesEnFinde();
elegirFormatoFecha();
elegirFormatoHora();