// Función para dar a la cadena el formato Nombre, Apellido1 Apellido2.
const formatearCadena = (cadena: string): string => {
    let matriz = cadena.split(" ");
    cadena = matriz[0] + ", " + matriz[1] + " " + matriz[2];
    return cadena;
}

// Función que devuelve una propuesta de nombre de usuario.
const proponerNombreUsuario = (cadena: string): string => {
    let matriz = cadena.split(" ");
    let nombre = matriz[0];
    let apellido1 = matriz[1];
    let apellido2 = matriz[2];
    let letraApellido1 = apellido1[0].toUpperCase();
    let letraApellido2 = apellido2[0].toUpperCase();
    cadena = nombre + letraApellido1 + letraApellido2;
    return cadena;
}

// Función que comprueba la longitud de la cadena y devuelve un booleano.
const comprobarLongitud = (cadena: string): boolean => {
    return cadena.length >= 8 && cadena.length <= 16;
}

// Función que comprueba si hay minúsculas en la cadena y devuelve un booleano.
const comprobarMinusculas = (cadena: string): boolean => {
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if (element >= 97 && element <= 122) {
            return true;
        }
    }
    return false;
}

// Función que comprueba si hay mayúsculas en la cadena y devuelve un booleano.
const comprobarMayusculas = (cadena: string): boolean => {
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if (element >= 65 && element <= 90) {
            return true;
        }
    }
    return false;
}

// Función que comprueba si hay números en la cadena y devuelve un booleano.
const comprobarNumeros = (cadena: string): boolean => {
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if (element >= 48 && element <= 57) {
            return true;
        }
    }
    return false;
}

// Función que comprueba si hay caracteres especiales en la cadena y devuelve un booleano.
const comprobarEspeciales = (cadena: string): boolean => {
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if ((element >= 33 && element <= 47) || (element >= 58 && element <= 64) || (element >= 91 && element <= 96) || (element >= 123 && element <= 126)) {
            return true;
        }
    }
    return false;
}

// Inicio de la ejecución del script.
let cadena: string | null = prompt("Introduce tu nombre y apellidos: ");

if (cadena != null) {
    console.log("La longitud de '" + cadena + "' es: " + cadena.length);
    let cadenaSinEspacios: string = cadena.replace(/ /g, "");
    console.log("La longitud de '" + cadenaSinEspacios + "' es: " + cadenaSinEspacios.length);
    console.log("La cadena '" + cadena + "' en minúsculas es: " + cadena.toLowerCase());
    console.log("La cadena '" + cadena + "' en mayúsculas es: " + cadena.toUpperCase());
    console.log("La cadena '" + cadena + "' formateada es: " + formatearCadena(cadena));
    console.log("La propuesta de nombre de usuario para '" + cadena + "' es: " + proponerNombreUsuario(cadena));
}


// Pide ahora una contraseña y comprobaremos que cumple con las siguientes premisas.
let pass: string | null = prompt("Introduce una contraseña: ");

if (!comprobarLongitud(pass)) {
    console.log("La contraseña no tiene la longitud requerida.");
} else if (!comprobarMayusculas(pass)) {
    console.log("La contraseña no tiene mayúsculas.");
} else if (!comprobarMinusculas(pass)) {
    console.log("La contraseña no tiene minúsculas.");
} else if (!comprobarNumeros(pass)) {
    console.log("La contraseña no tiene números.");
} else if (!comprobarEspeciales(pass)) {
    console.log("La contraseña no tiene caracteres especiales.");
} else {
    console.log("La contraseña tiene el formato correcto.");
}
