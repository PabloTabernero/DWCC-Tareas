let paises: string[] = ['España', 'Portugal', 'Brasil', 'Argentina', 'Mexico'];

// Amosa o numero de elementos do Array.
console.log("Amosa o número de elementos do Array.");

let tamanoArray = (lista: string[]): void => console.log("La longitud del array es: " + lista.length);
tamanoArray(paises);

// Amosa todos os paises.
console.log("Amosa todos os paises.");

let mostrarPaises = (lista: string[]): void => console.log("El listado de paises es:" + lista.map(elemento => " " + elemento).join(",") + ".");
mostrarPaises(paises);

// Amosa todos os paises en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
console.log("Amosa todos os paises en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.");

let mostrarPaisesInvertido = (lista: string[]): void =>
  console.log("El listado de paises en orden inverso es:" + lista.map(elemento => " " + elemento).reverse().join(",") + ".");
mostrarPaisesInvertido(paises);

// Engade un pais ao comezo do Array.
console.log("Engade un pais ao comezo do Array.");

let anadirPaisAlInicio = (lista: string[], elemento: string): number => lista.unshift(elemento);

anadirPaisAlInicio(paises, "Andorra");
mostrarPaises(paises);

// Engade un pais ao final do Array.
console.log("Engade un pais ao final do Array.");

let anadirPaisAlFinal = (lista: string[], elemento: string): number => lista.push(elemento);

anadirPaisAlFinal(paises, "Italia");
mostrarPaises(paises);

// Elimina un elemento ao comezo do Array e indica cal foi.
console.log("Elimina un elemento ao comezo do Array e indica cal foi.");

let elimiarPaisAlInicio = (lista: string[]): string | undefined => lista.shift();

console.log("Eliminado del elemento " + elimiarPaisAlInicio(paises) + " del listado de paises.");
mostrarPaises(paises);

// Elimina un elemento ao final do Array e indica cal foi.
console.log("Elimina un elemento ao final do Array e indica cal foi.");

let elimiarPaisAlFinal = (lista: string[]): string | undefined => lista.pop();

console.log("Eliminado del elemento " + elimiarPaisAlFinal(paises) + " del listado de paises.");
mostrarPaises(paises);

// Amosa o elemento que se atope na posición que che indique o usuario.
// Asumimos que para un usuario la primera posisión de la lista es 1.
console.log("Amosa o elemento que se atope na posición que che indique o usuario.");

let entrada: string | null = prompt("Introduce la posicion del pais a mostrar(1 a " + paises.length + "): ");
let posicion = parseInt(entrada);

let validarEntrada = (posicion: number): boolean => (typeof posicion === 'number' && posicion > 0 && posicion <= paises.length);

console.log(
  validarEntrada(posicion)
    ? "El elemento de la posicion " + posicion + " es: " + paises[posicion - 1]
    : "La posición introducida no es válida."
);

// Amosa a posición na que se atopa un elemento indicado polo usuario.
// Asumimos que la posición para el usuario empieza en 1, por que se suma a la hora de mostrarlo.
console.log("Amosa a posición na que se atopa un elemento indicado polo usuario.");

entrada = prompt("Introduce el nombre del pais a buscar: ");

let exitePais = (lista: string[], elemento: string): number | null => {
  let indice = lista.indexOf(elemento);
  return indice !== -1 ? indice + 1 : null;
};

let indicePais = exitePais(paises, entrada);

console.log(indicePais !== null ? "La posicion de " + entrada + " es: " + indicePais : "El pais introducido no es valido.");

// Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
console.log("Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.");

let validarFin = (inicial: number, final: number): boolean => typeof final === 'number' && final > inicial && final <= paises.length;
let extraerPaises = (lista: string[], posicionIncial: number, posicionFinal: number): string[] =>
  lista.slice(posicionIncial - 1, posicionFinal - 1);

let entradaInicio = prompt("Introduce el valor de la posición inicial: ");
let inicio = parseInt(entradaInicio);

if (validarEntrada(inicio)) {
  let entradaFin = prompt("Introduce el valor de la posición final: ");
  let fin = parseInt(entradaFin);

  if (validarFin(inicio, fin)) {
    let paisesExtraidos = extraerPaises(paises, inicio, fin);
    mostrarPaises(paisesExtraidos);
  } else {
    console.log("El valor final introducido no es valido");
  }
} else {
  console.log("El valor inicial introducido no es valido.");
}
