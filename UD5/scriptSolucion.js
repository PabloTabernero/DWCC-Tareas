/*
 * Script de validación de formulario
 * 
 * Autor: Pablo Tabenernero Vidal
 * Fecha: 01 de Marzo de 2024
 * 
 * Este script para la validación del formulario de la página tarea.html.
 * 
 * Consideraciones de implementación: 
 * - Se validan todos los campos del formulario en el momento de pulsar el boton enviar, mostrando mensajes
 *      de error para cada uno de los campos en los que falle la validación.
 * - De cada campo se valida primero que no sea vacío (todos los campos son obligatorios) y después que 
 *      cumplan con los formatos requeridos.
 * - En caso de que falle la validación para varios campos el foco del formulario irá al último campo en el 
 *      que ha fallado la validación.
 * - Al boton limpiar se le añaden funcionalidades para que además de limpiar los campos del formulario, tambien
 *      borre los errores e intentos de pantalla, además de reiniciar el contador de intentos a 0.
 *  
 */

document.addEventListener("DOMContentLoaded", () => {
    
// ***** Cambiar a mayusculas el texto de nombre y apellidos cuando pierdan el foco.
 
    //Función que convierte a mayusculas el elemento pasado como argumento.
    const convertirMayusculas = (elemento) => {
        elemento.value = elemento.value.toUpperCase();
    }

// ***** Funciónes para mostrar intentos y errores en el formulario *****

    //Funcion que obtiene el valor de la cookie "contadorEnvio", lo actualiza y lo imprime en el div "intentos". 
    const contarIntento = () => {
        let cookieValor = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)contadorEnvio\s*\=\s*([^;]*).*$)|^.*$/,"$1",));
        let nuevoValor = isNaN(cookieValor) ? 1 : ++cookieValor;
        document.cookie = "contadorEnvio=" + nuevoValor;

        mostrarIntentos(nuevoValor);
    }

    //Funcion para mostrar el numero de intentos en el formulario.
    const mostrarIntentos = (valor) => {
        const intentosDIV = document.getElementById('intentos');
        intentosDIV.innerHTML = "<p>Intento de Envíos del formulario: " + valor + "</p>";
    }

    //Función para mostrar errores en el formulario
    const mostrarErrores = (mensajeError) => {
        const erroresDIV = document.getElementById('errores');
        erroresDIV.innerHTML += "<p>" + mensajeError + "</p>";
    }

    //Función para limpiar los mensajes de error acumulados.
    const limpiarErrores = () => {
        const erroresDIV = document.getElementById('errores');
        erroresDIV.innerHTML = ''; // Limpiar el contenido del div de errores
    }

    //Función para limpiar los mensajes de error acumulados.
    const limpiarIntentos = () => {
        const intentosDIV = document.getElementById('intentos');
        document.cookie = "contadorEnvio=0"; //Reinicia el valor de la cookie.
        intentosDIV.innerHTML = ''; // Limpiar el contenido del div de intentos.
    }

// ***** Funciones para validar cada uno de los campos del formulario *****

    //Función para validar nombre.
    const validarNombre = (nombre) => {
        const valorNombre = nombre.value.trim();
        // Expresión regular que permite letras (mayúsculas y minúsculas) y espacios en blanco.
        const patronNombre = /^[a-zA-Z\s]+$/;

        if (valorNombre === "") {
            mostrarErrores('El campo nombre es obligatorio. Por favor, introduzca su nombre.');
            nombre.focus();
            return false;
        } else if (!patronNombre.test(valorNombre)) {
            mostrarErrores('El nombre solo puede contener letras y espacios en blanco.');
            nombre.focus();
            return false;
        }
        
        return true;
    }

    //Función para validar apellidos.
    const validarApellidos = (apellidos) => {
        const valorApellidos = apellidos.value.trim();
        // Expresión regular que permite letras (mayúsculas y minúsculas) y espacios en blanco.
        const patronApellidos = /^[a-zA-Z\s]+$/;


        if (valorApellidos === "") {
            mostrarErrores('El campo apellidos es obligatorio. Por favor, introduzca sus apellidos.');
            apellidos.focus();
            return false;
        } else if (!patronApellidos.test(valorApellidos)) {
            mostrarErrores('El nombre solo puede contener letras y espacios en blanco.');
            apellidos.focus();
            return false;
        }
        
        return true;
    }

    //Función para validar edad.
    //Permite validar que el campo no esté en vacio, que sea un número y que esté dentro del rango.
    const validarEdad = () => {
        const edad = document.getElementById('edad');
        const valorEdad = edad.value.trim();

        if (valorEdad === "") {
            mostrarErrores('El campo edad es obligatorio. Por favor, introduzca su edad.');
            edad.focus ();
            return false;
        } else if(isNaN(valorEdad)) {
            mostrarErrores('El campo edad debe ser numerico.');
            edad.focus ();
            return false;
        } else if(valorEdad < 0 || valorEdad > 105) {
            mostrarErrores('El campo edad debe estar entre 0 y 105.');
            edad.focus();
            return false;
        } 
        
        return true;
    }

    //Función para validar nif.
    const validarNIF = () => {
        const nif = document.getElementById('nif');
        const valorNif = nif.value.trim();

        //Expresión regular para validar el NIF:
        //  ^\d{8} Coincide con 8 dígitos al inicio del string.
        //  - Coincide con un guion después de los 8 dígitos.
        //  [a-z] Coincide con una letra minúscula al final del string.
        //  i Modificador que hace la expresión insensible a mayúsculas/minúsculas.
        const patronNIF = /^\d{8}-[a-z]$/i;

        if (valorNif === "") {
            mostrarErrores('El campo nif es obligatorio. Por favor, introduzca su NIF.');
            nif.focus();
            return false;
        } else if (!patronNIF.test(valorNif)) {
            mostrarErrores('El campo nif debe tener 8 digitos, un guión y una letra.');
            nif.focus();
            return false;
        }

        return true;
    }

    //Función para validar email.
    const validarEmail = () => {
        const email = document.getElementById('email');
        const emailValor = email.value.trim();

        //Expresión regular para validar el correo:
        //  ^[^\s@]+ Coincide con uno o más caracteres que no sean espacio en blanco ni @ al inicio del string.
        //  @ Coincide con un símbolo de arroba.
        //  [^\s@]+ Coincide con uno o más caracteres que no sean espacio en blanco ni @ después del arroba.
        //  \. Coincide con un punto.
        //  [a-z]{3}$ Coincide con tres letras minúsculas al final del string.
        //  i Modificador que hace la expresión insensible a mayúsculas/minúsculas.
        const patronEmail = /^[^\s@]+@[^\s@]+\.[a-z]{3}$/i;

        if (emailValor === "") {
            mostrarErrores('El campo email es obligatorio. Por favor, introduzca su email.');
            email.focus();
            return false;
        } else if (!patronEmail.test(emailValor)) {
            mostrarErrores('El campo email debe tener una dirección de correo valida.');
            email.focus();
            return false;
        }

        return true;
    }

    //Función para validar provincia.
    const validarProvincia = () => {
        const provincia = document.getElementById('provincia');

        if (provincia.selectedIndex === 0) {
            mostrarErrores('Es obligatorio seleccionar una provincia. Por favor, seleccione una provincia  de la lista.');
            provincia.focus();
            return false;
        }

        return true;
    }

    //Función validar fecha.
    const validarFecha = () => {
        const fecha = document.getElementById('fecha');
        const fechaValor = fecha.value.trim();

        //Expresión regular para validar la fecha en formato dd/mm/aaaa(patronFecha1) y formato dd-mm-aaaa(PatronFecha2):
        //  ^(0[1-9]|[12][0-9]|3[01]) Coincide con los días del mes, comenzando con 0 y luego un dígito del 1 al 9,
        //      o bien con un 1 o 2 seguido de un dígito del 0 al 9, o bien con un 3 seguido de un dígito del 0 al 1.
        //  \/ o - Coincide con una barra (/) en patronFecha1 o un guión (-) en patronFecha2.
        //  (0[1-9]|1[012]) Coincide con los meses del año, comenzando con 0 y luego un dígito del 1 al 9, 
        //      o bien con un 1 seguido de un dígito del 0 al 2.
        //  \/ o - Coincide con una barra (/) en patronFecha1 o un guión (-) en patronFecha2.
        //  \d{4}$ Coincide con cuatro dígitos al final del string, representando el año.
        const patronFecha1 = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
        const patronFecha2 = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/;

        if (fechaValor === "") {
            mostrarErrores('El campo fecha de nacimiento es obligatorio. Por favor, introduzca su fecha de nacimiento.');
            fecha.focus();
            return false;
        } else if (!patronFecha1.test(fechaValor) && !patronFecha2.test(fechaValor)) {
            mostrarErrores('El campo fecha debe seguir uno de los siguientes formatos dd/mm/aaaa o dd-mm-aaaa.');
            fecha.focus();
            return false;
        }

        return true;
    }

    //Funcion que valida el telefono.
    const validarTelefono = () => {
        const telefono = document.getElementById('telefono');
        const telefonoValor = telefono.value.trim();

        //Expresion regular para validar el telefono, que debe coincidir con 9 digitos. 
        const patronTelefono = /\d{9}/;

        if(telefonoValor === "") {
            mostrarErrores('El campo teléfono es obligatorio. Por favor, introduzca su número de teléfono.');
            telefono.focus()
            return false;
        } else if (!telefono.value.match(patronTelefono)) {
            mostrarErrores('El campo teléfono debe tener 9 digitos.');
            telefono.focus()
            return false;
        }

        return true;
    }

    //Función que valida la hora.
    const validarHora = () => {
        const hora = document.getElementById('hora');
        const horaValor = hora.value.trim();

        // Expresión regular para validar el formato de la hora (hh:mm):
        //  ^([01][0-9]|2[0-3]) Coincide con un dígito entre 00 y 19 si precedido por 0 o 1, o bien 
        //      un dígito entre 20 y 23 si precedido por 2.
        //  : Coincide con el símbolo de dos puntos.
        //  [0-5][0-9] Coincide con un dígito entre 00 y 59 para los minutos.
        const patronHora = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

        if (horaValor === "") {
            mostrarErrores('El campo hora es obligatorio. Por favor, introduzca la hora de la visita.');
            hora.focus();
            return false;
        } else if (!hora.value.match(patronHora)) {
            mostrarErrores('El campo hora debe tener el formato hh:hh.');
            hora.focus();
            return false;
        }

        return true;
    }


// ***** Funciones de validación, envio y borrado del fomulario  *****

    //Función que realiza la validación de todo el formulario antes del envío.
    const validarFormulario = (e) => {
        e.preventDefault();
        
        //Limpiar el div errores para mostrar los nuevos errores despues de las validaciones.
        limpiarErrores();

        //Validación de todos los campos del formulario.
        const validacionNombre = validarNombre(nombre);
        const validacionApellidos = validarApellidos(apellidos);
        const validacionEdad = validarEdad();
        const validacionNIF = validarNIF();
        const validacionEmail = validarEmail();
        const validacionProvincia = validarProvincia();
        const validacionFecha = validarFecha();
        const validacionTelefono = validarTelefono();
        const validacionHora = validarHora();
        
        if (!validacionNombre || !validacionApellidos || !validacionEdad || !validacionNIF || !validacionEmail 
            || !validacionProvincia || !validacionFecha || !validacionTelefono || !validacionHora) {
            return;
        }
        
        //Enviar formulario al haber pasado todas las validaciones.
        enviarFormulario();
    }

    //Función para enviar el formulario solicitando confirmación.    
    const enviarFormulario = () => {
        const formulario = document.getElementById('formulario');

        //Solicitar confirmación antes de enviar el formulario, una vez pasadas todas las validaciones.
        if (confirm('¿Estás seguro de enviar el formulario?')) {
            formulario.submit();
        } else {
            return;
        }
    }

    //Función para borrar el formulario, los errores y reiniciar los intentos.
    const limpiarFormulario = () => {
        const formulario = document.getElementById('formulario');

        formulario.reset();
        limpiarErrores();
        limpiarIntentos();
    }

// ***** Captura de enventos del formulario *****

    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const enviar = document.getElementById('enviar');
    const limpiar = document.getElementById('button');
    
    //Capturar los enventos blur para nombre y apellidos para convertirlos a mayusculas.
    nombre.addEventListener('blur', () => convertirMayusculas(nombre));
    apellidos.addEventListener('blur', () => convertirMayusculas(apellidos));

    //Capturar los eventos click del boton enviar para contar intentos y validar el formulario antes de enviar.
    enviar.addEventListener('click', contarIntento);
    enviar.addEventListener('click', validarFormulario);

    //Capturar los eventos click del boton limpiar para borrar los datos del formulario.
    limpiar.addEventListener('click', limpiarFormulario)
  });
  