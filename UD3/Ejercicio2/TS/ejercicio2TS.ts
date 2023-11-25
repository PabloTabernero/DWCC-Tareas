/**
 * Mostrar el número de días que quedan desde hoy (día actual) hasta el final de curso (por ejemplo, el 25 de Junio).
 */

// Función que calcula los días que faltan hasta el 25 de Junio.
const calcularDias = (): void => {
    let fechaActual: Date = new Date();
    let fechaObjetivo: Date = new Date("2024-05-25");
    let diasRestantes: number = Math.floor((fechaObjetivo.getTime() - fechaActual.getTime()) / (1000 * 60 * 60 * 24));
    console.log("Faltan " + diasRestantes + " hasta el 25/06/2024.");
}

/**
 * Pide la fecha de tu cumpleaños (no es necesario el año) y muestra todos los años en
 * que tu cumpleaños caerá en fin de semana desde este año hasta el año 2100.
 */

// Función que pide una fecha de cumpleaños por teclado e imprime todas las fechas en las que 
// el cumpleaños va a caer en fin de semana desde este año hasta el 2100.
const proximosCumplesEnFinde = (): void => {

    let fecha: string | null = prompt("Introduce la fecha tu cumpleaños (YYYY-MM-DD): ");
    
    if (fecha !== null) {
        let fechaCumpleanos: Date = new Date(fecha);

        console.log("La fecha de tu cumpleaños es: " + fechaCumpleanos);

        // Actualizo el año actual a la fecha del cumpleaños.
        fechaCumpleanos.setFullYear(new Date().getFullYear());
        let fechaMaxima: Date = new Date("2100-01-01");
    
        while (fechaCumpleanos < fechaMaxima) {
            let diaSemanaCumpleanos: number = fechaCumpleanos.getDay();
            if (diaSemanaCumpleanos == 0 || diaSemanaCumpleanos == 6) {
                console.log(fechaCumpleanos.toDateString());
            }
            fechaCumpleanos.setFullYear(fechaCumpleanos.getFullYear() + 1);
        }
    }
}

/**
 * Muestra la fecha actual en diferentes formatos según el valor que introduzca el usuario por parámetro (usa un switch):
 * 1. 17/02/2016
 * 2. Miércoles, 17 de febrero de 2016
 * 3. Wednesday, February 17, 2016.
 */

// Función que devuelve la fecha actual en varios formatos, según la opción elegida.
const elegirFormatoFecha = (): void => {
    let opcion: string | null = prompt("Introduce un numero del 1 al 3 para seleccionar el formato de fecha: ");

    let fechaActual: Date = new Date();

    switch (opcion) {
        case "1":
            console.log("La fecha actual en formato dd/mm/aaaa es: " + fechaActual.toLocaleDateString("es-ES"));
            break;
        case "2":
            console.log("La fecha actual en gallego en formato (Ej: Miércoles, 17 de febrero de 2016) es: " + fechaActual.toLocaleString("gl-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        case "3":
            console.log("La fecha actual en inglés en formato (Ej: Wednesday, February 17, 2016) es: " + fechaActual.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            break;
        default:
            break;
    }
}

/**
 * Muestra la hora actual en diferentes formatos según el valor que introduzca el
 * usuario por parámetro (usa un switch):
 * 1. 14:35:07 (hora detallada con minutos e segundos)
 * 2. 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes ou despois de mediodía).
 */

const elegirFormatoHora = (): void => {
    let opcion: string | null = prompt("Introduce un numero del 1 al 2 para seleccionar el formato de hora: ");

    let fechaActual: Date = new Date();

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

// Ejecución de las funciones
calcularDias();
proximosCumplesEnFinde();
elegirFormatoFecha();
elegirFormatoHora();
