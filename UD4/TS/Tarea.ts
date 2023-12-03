let paises: string[] = [
  "España",
  "México",
  "Argentina",
  "Brasil",
  "Francia",
  "Italia",
  "Alemania",
  "Japón",
  "Australia",
  "Canadá",
];

//• Amosa o numero de elementos do Array.
let tamanoArray = (lista: string[]): number => lista.length;
console.log("La longitud del array es: " + tamanoArray(paises));

//• Amosa todos os paises.
let mostrarPaises = (lista: string[]): string =>
  lista.map((elemento) => " " + elemento).join(",");
console.log("El listado de paises es:" + mostrarPaises(paises) + ".");

//• Amosa todos os paises en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
let mostrarPaisesInvertido = (lista: string[]): string =>
  lista
    .slice()
    .reverse()
    .map((elemento) => " " + elemento)
    .join(",");
console.log(
  "El listado de paises en orden inverso es:" +
    mostrarPaisesInvertido(paises) +
    "."
);

//• Engade un pais ao comezo do Array.
let anadirPaisAlInicio = (lista: string[], elemento: string): string[] => {
  let nuevoArray = lista.slice();
  nuevoArray.unshift(elemento);
  return nuevoArray;
};
console.log(
  "El nuevo listado de paises es: " +
    mostrarPaises(anadirPaisAlInicio(paises, "Andorra"))
);

//• Engade un pais ao final do Array.
let anadirPaisAlFinal = (lista: string[], elemento: string): string[] => {
  let nuevoArray = lista.slice();
  nuevoArray.push(elemento);
  return nuevoArray;
};
console.log(
  "El nuevo listado de paises es: " +
    mostrarPaises(anadirPaisAlFinal(paises, "Grecia"))
);

//• Elimina un elemento ao comezo do Array e indica cal foi.
let elimiarPaisDelInicio = (
  lista: string[]
): { nuevoArray: string[]; elemento: string | undefined } => {
  let nuevoArray: string[] = lista.slice();
  let elemento: string | undefined = nuevoArray.shift();
  return { nuevoArray, elemento };
};
console.log(
  "Eliminado del elemento " +
    elimiarPaisDelInicio(paises).elemento +
    " del listado de paises."
);

//• Elimina un elemento ao final do Array e indica cal foi.
let eliminarPaisDeLFinal = (
  lista: string[]
): { nuevoArray: string[]; elemento: string | undefined } => {
  let nuevoArray: string[] = lista.slice();
  let elemento: string | undefined = nuevoArray.pop();
  return { nuevoArray, elemento };
};
console.log(
  "Eliminado del elemento " +
    eliminarPaisDeLFinal(paises).elemento +
    " del listado de paises."
);

//• Amosa o elemento que se atope na posición que che indique o usuario.
//Asumimos que para un usuario la primera posisión de la lista es 1.
let entrada: string | null = prompt(
  "Introduce la posición del país a mostrar (1 a " + paises.length + "): "
);
if (entrada != null) {
  let posicion = parseInt(entrada);
}

let validarEntrada = (posicion: number): boolean =>
  typeof posicion === "number" && posicion > 0 && posicion <= paises.length;
let obtenerElemento = (lista: string[], posicion: number): string | false =>
  validarEntrada(posicion) ? lista[posicion - 1] : false;

console.log(
  validarEntrada(posicion)
    ? "El elemento de la posicion " +
        posicion +
        " es: " +
        obtenerElemento(paises, posicion)
    : "La posición introducida no es válida."
);

//• Amosa a posición na que se atopa un elemento indicado polo usuario.
// Asumimos que la posición para el usuario empieza en 1, por que se suma a la hora de mostrarlo.
entrada = prompt("Introduce el nombre del pais a buscar: ");

let exitePais = (lista: string[], elemento: string): number | null => {
  let indice: number = lista.indexOf(elemento);
  return indice !== -1 ? indice + 1 : null;
};

let indicePais = exitePais(paises, entrada);

console.log(
  indicePais !== null
    ? "La posicion de " + entrada + " es: " + indicePais
    : "El pais introducido no es valido."
);

//• Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
let validar = (inicial: number, final: number, longitud: number): boolean => {
  let validarInicio = (inicial: number, longitud: number): boolean =>
    typeof inicial === "number" && inicial > 0 && inicial < longitud;
  let validarFin = (
    inicial: number,
    final: number,
    longitud: number
  ): boolean =>
    typeof final === "number" && final > inicial && final <= longitud;

  return (
    validarInicio(inicial, longitud) && validarFin(inicial, final, longitud)
  );
};

let extraerPaises = (
  inicial: number,
  final: number,
  lista: string[]
): string[] | null => {
  return validar(inicial, final, lista.length)
    ? lista.slice(inicial - 1, final - 1)
    : null;
};

let entradaInicio: string | null = prompt(
  "Introduce el valor de la posición inicial: "
);
if (entradaInicio != null) {
  let inicio = parseInt(entradaInicio);
}
let entradaFin: string | null = prompt(
  "Introduce el valor de la posición final: "
);
if (entradaFin != null) {
  let fin = parseInt(entradaFin);
}

console.log(
  "Los paises seleccionados son: " +
    extraerPaises(inicio, fin, paises)?.join(",") +
    "."
);
