var _a;
var paises = ['España', 'México', 'Argentina', 'Brasil', 'Francia', 'Italia', 'Alemania', 'Japón', 'Australia', 'Canadá'];
//• Amosa o numero de elementos do Array.
var tamanoArray = function (lista) { return lista.length; };
console.log("La longitud del array es: " + tamanoArray(paises));
//• Amosa todos os paises.
var mostrarPaises = function (lista) { return lista.map(function (elemento) { return " " + elemento; }).join(","); };
console.log("El listado de paises es:" + mostrarPaises(paises) + ".");
//• Amosa todos os paises en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
var mostrarPaisesInvertido = function (lista) { return lista.slice().reverse().map(function (elemento) { return " " + elemento; }).join(","); };
console.log("El listado de paises en orden inverso es:" + mostrarPaisesInvertido(paises) + ".");
//• Engade un pais ao comezo do Array.
var anadirPaisAlInicio = function (lista, elemento) {
    var nuevoArray = lista.slice();
    nuevoArray.unshift(elemento);
    return nuevoArray;
};
console.log("El nuevo listado de paises es: " + mostrarPaises(anadirPaisAlInicio(paises, "Andorra")));
//• Engade un pais ao final do Array.
var anadirPaisAlFinal = function (lista, elemento) {
    var nuevoArray = lista.slice();
    nuevoArray.push(elemento);
    return nuevoArray;
};
console.log("El nuevo listado de paises es: " + mostrarPaises(anadirPaisAlFinal(paises, "Grecia")));
//• Elimina un elemento ao comezo do Array e indica cal foi.
var elimiarPaisDelInicio = function (lista) {
    var nuevoArray = lista.slice();
    var elemento = nuevoArray.shift();
    return { nuevoArray: nuevoArray, elemento: elemento };
};
console.log("Eliminado del elemento " + elimiarPaisDelInicio(paises).elemento + " del listado de paises.");
//• Elimina un elemento ao final do Array e indica cal foi.
var eliminarPaisDeLFinal = function (lista) {
    var nuevoArray = lista.slice();
    var elemento = nuevoArray.pop();
    return { nuevoArray: nuevoArray, elemento: elemento };
};
console.log("Eliminado del elemento " + eliminarPaisDeLFinal(paises).elemento + " del listado de paises.");
//• Amosa o elemento que se atope na posición que che indique o usuario.
//Asumimos que para un usuario la primera posisión de la lista es 1.
var entrada = prompt("Introduce la posición del país a mostrar (1 a " + paises.length + "): ");
if (entrada != null) {
    var posicion = parseInt(entrada);
}
var validarEntrada = function (posicion) { return (typeof (posicion) === 'number' && posicion > 0 && posicion <= paises.length); };
var obtenerElemento = function (lista, posicion) { return validarEntrada(posicion) ? lista[posicion - 1] : false; };
console.log(validarEntrada(posicion) ? "El elemento de la posicion " + posicion + " es: " + obtenerElemento(paises, posicion) : "La posición introducida no es válida.");
//• Amosa a posición na que se atopa un elemento indicado polo usuario.
// Asumimos que la posición para el usuario empieza en 1, por que se suma a la hora de mostrarlo.
entrada = prompt("Introduce el nombre del pais a buscar: ");
var exitePais = function (lista, elemento) {
    var indice = lista.indexOf(elemento);
    return indice !== -1 ? indice + 1 : null;
};
var indicePais = exitePais(paises, entrada);
console.log(indicePais !== null ? "La posicion de " + entrada + " es: " + indicePais : "El pais introducido no es valido.");
//• Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
var validar = function (inicial, final, longitud) {
    var validarInicio = function (inicial, longitud) { return (typeof (inicial) === 'number' && inicial > 0 && inicial < longitud); };
    var validarFin = function (inicial, final, longitud) { return (typeof (final) === 'number' && final > inicial && final <= longitud); };
    return (validarInicio(inicial, longitud) && validarFin(inicial, final, longitud));
};
var extraerPaises = function (inicial, final, lista) {
    return validar(inicial, final, lista.length) ? lista.slice(inicial - 1, final - 1) : null;
};
var entradaInicio = prompt("Introduce el valor de la posición inicial: ");
if (entradaInicio != null) {
    var inicio = parseInt(entradaInicio);
}
var entradaFin = prompt("Introduce el valor de la posición final: ");
if (entradaFin != null) {
    var fin = parseInt(entradaFin);
}
console.log("Los paises seleccionados son: " + ((_a = extraerPaises(inicio, fin, paises)) === null || _a === void 0 ? void 0 : _a.join(",")) + ".");
