//Apartires dun Array cun listado de paises realiza o seguinte:
let paises = ['España', 'México', 'Argentina', 'Brasil', 'Francia', 'Italia', 'Alemania', 'Japón', 'Australia', 'Canadá'];

//• Amosa o numero de elementos do Array.
let tamanoArray = (lista) => lista.length;
console.log("La longitud del array es: " + tamanoArray(paises));


//• Amosa todos os paises.
let mostrarPaises = (lista) => lista.map(elemento => " " + elemento).join(",");
console.log("El listado de paises es:" + mostrarPaises(paises) + ".");


//• Amosa todos os paises en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
let mostrarPaisesInvertido = (lista) => lista.slice().reverse().map(elemento => " " + elemento).join(",");
console.log("El listado de paises en orden inverso es:" + mostrarPaisesInvertido(paises) + ".");


//• Engade un pais ao comezo do Array.
let anadirPaisAlInicio = (lista, elemento) => {
    let nuevoArray = lista.slice();
    nuevoArray.unshift(elemento);
    return nuevoArray;
}
console.log("El nuevo listado de paises es: " + mostrarPaises(anadirPaisAlInicio(paises, "Andorra")));


//• Engade un pais ao final do Array.
let anadirPaisAlFinal = (lista, elemento) => {
    let nuevoArray = lista.slice();
    nuevoArray.push(elemento);
    return nuevoArray;
}
console.log("El nuevo listado de paises es: " + mostrarPaises(anadirPaisAlFinal(paises, "Grecia")));


//• Elimina un elemento ao comezo do Array e indica cal foi.
let elimiarPaisDelInicio = (lista) => {
    let nuevoArray = lista.slice();
    let elemento = nuevoArray.shift();
    return { nuevoArray, elemento };
}
console.log("Eliminado del elemento " + elimiarPaisDelInicio(paises).elemento + " del listado de paises.");


//• Elimina un elemento ao final do Array e indica cal foi.
let eliminarPaisDeLFinal = (lista) => {
    let nuevoArray = lista.slice();
    let elemento = nuevoArray.pop();
    return { nuevoArray, elemento };
}
console.log("Eliminado del elemento " + eliminarPaisDeLFinal(paises).elemento + " del listado de paises.");


//• Amosa o elemento que se atope na posición que che indique o usuario.
//Asumimos que para un usuario la primera posisión de la lista es 1.
let entrada = prompt("Introduce la posición del país a mostrar (1 a " + paises.length + "): ");
let posicion = parseInt(entrada);

let validarEntrada = (posicion) => (typeof (posicion) === 'number' && posicion > 0 && posicion <= paises.length);
let obtenerElemento = (lista, posicion) => validarEntrada(posicion) ? lista[posicion - 1] : false;

console.log(validarEntrada(posicion) ? "El elemento de la posicion " + posicion + " es: " + obtenerElemento(paises, posicion) : "La posición introducida no es válida.");


//• Amosa a posición na que se atopa un elemento indicado polo usuario.
// Asumimos que la posición para el usuario empieza en 1, por que se suma a la hora de mostrarlo.
entrada = prompt("Introduce el nombre del pais a buscar: ");

let exitePais = (lista, elemento) => {
    let indice = lista.indexOf(elemento);
    return indice !== -1 ? indice + 1 : null
}

let indicePais = exitePais(paises, entrada);

console.log(indicePais !== null ? "La posicion de " + entrada + " es: " + indicePais : "El pais introducido no es valido.");


//• Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
let validar = (inicial, final, longitud) => {
    let validarInicio = (inicial, longitud) => (typeof (inicial) === 'number' && inicial > 0 && inicial < longitud);
    let validarFin = (inicial, final, longitud) => (typeof (final) === 'number' && final > inicial && final <= longitud);

    return (validarInicio(inicial, longitud) && validarFin(inicial, final, longitud));
}

let extraerPaises = (inicial, final, lista) => {
    return validar(inicial, final, lista.length) ? lista.slice(inicial - 1, final - 1) : null;
}

let entradaInicio = prompt("Introduce el valor de la posición inicial: ");
let inicio = parseInt(entradaInicio);
let entradaFin = prompt("Introduce el valor de la posición final: ");
let fin = parseInt(entradaFin);

console.log("Los paises seleccionados son: " + extraerPaises(inicio, fin, paises) + ".");