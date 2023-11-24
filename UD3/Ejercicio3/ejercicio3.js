/**
 * Co obxecto String de JS realiza as seguintes funcións:
 * • Pide ao usuario o seu nome e apelidos nunha única petición (pode ser un prompt) e amose:
 * ◦ O tamaño do nome e dos apelidos.
 * ◦ O tamaño do nome e dos apelidos sen espazos.
 * ◦ O nome e os apelidos en minúsculas.
 * ◦ E en maiúsculas.
 * ◦ Que amose separado Nome, Apelido1 e Apelido2.
 * ◦ Unha proposta de nome de usuario co nome en minúsculas, a incial do primeiro apelido en 
 * maiúsculas e a inicial do segundo apelido tamén en maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR
 */

//función para dar a la cadena el formato Nombre, Apellido1 Apellido2.
const formatearCadena = (cadena) => {
    let matriz = cadena.split(" ");

    cadena = matriz[0] + ", " + matriz[1] + " " + matriz[2];

    return cadena;
}

//funcion que devuelve una propuesta de nombre de usuario.
const proponerNombreUsuario = (cadena) => {
    let matriz = cadena.split(" ");
    let nombre = matriz[0];
    let apellido1 = matriz[1];
    let apellido2 = matriz[2];

    let letraApellido1 = apellido1[0].toUpperCase();
    let letraApellido2 = apellido2[0].toUpperCase();

    cadena = nombre + letraApellido1 + letraApellido2;

    return cadena;
}

//Inicio de la ejecución del script.
let cadena = prompt("Introduce tú nombre y apellidos: ");

console.log("La longitud de '" + cadena + "' es: " + cadena.length);
let cadenaSinEspacios = cadena.replaceAll(" ", "");
console.log("La longitud de '" + cadenaSinEspacios + "' es: " + cadenaSinEspacios.length);
console.log("La cadena '" + cadena + "' en minusculas es: " + cadena.toLowerCase());
console.log("La cadena '" + cadena + "' en mayusculas es: " + cadena.toUpperCase());
console.log("la cadena '" + cadena + "' formateada es: " + formatearCadena(cadena));
console.log("La propuesta de nombre de usuario para '" + cadena + "' es: " + proponerNombreUsuario(cadena));


/**
 * Pide agora unha contrasinal y comprobaremos que cumpre coas seguintes premisas:
 * ◦ Entre 8 e 16 caracteres.
 * ◦ Algunha maiúscula.
 * ◦ Algunha minúscula.
 * ◦ Algún número.
 * ◦ Algún caracter especial (_,-,@,#,$,%,&,...)
 */

//función que comprueba la longitud de la cadena y devuelve un boolean.
const comprobarLongitud = (cadena) => {
    return (cadena.length >= 8 && cadena.length <= 16);
}

//función que comprueba si hay mayusculas en la cadena y devuelve un boolean.
const comprobarMinusculas = (cadena) => {
    
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if (element >= 97 && element <= 122) {
            return true;
        } 
    }

    return false;
}

//función que comprueba si hay minusculas en la cadena y devuelve un boolean.
const comprobarMayusculas = (cadena) => {
    
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if (element >= 65 && element <= 90) {
            return true;
        } 
    }

    return false;
}

//función que comprueba si hay numeros en la cadena y devuelve un boolean.
const comprobarNumeros = (cadena) => {

    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if (element >= 48 && element <= 57) {
            return true;
        } 
    }

    return false;
}

//función que comprueba si hay caracteres especiales en la cadena y devuelve un boolean.
const comprobarEspeciales = (cadena) => {
    
    for (let index = 0; index < cadena.length; index++) {
        const element = cadena.charCodeAt(index);
        if ((element >= 33 && element <= 47) || (element >= 58 && element <= 64) || (element >= 91 && element <= 96) || (element >= 123 && element <= 126)) {
            return true;
        } 
    }

    return false;
}

//Inicio del la ejecución del script.
let pass = prompt("Introduce una contraseña de entre 8 y 16 caracteres que contenga: mayusculas, minusculas, numeros y caracteres especiales: ");

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