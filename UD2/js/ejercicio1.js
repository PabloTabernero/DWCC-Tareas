//Ejercicio que muestra la tabla de multiplicar del 9 con bucle while.
console.log(`Tabla de Multiplicar del 9`);

let i = 1;
while (i < 11) {
    console.log(`9 x ${i} = ` + (i*9));
    i++;
}

//Ejercicio que muestra los 10 primeros numeros Fibonacci con bucle for.
console.log(`Numeros Fibonacci`);

let a = 0;
let b = 1;
console.log(a);
console.log(b);

for(let i = 2; i < 10; i++) {
    let siguiente = a + b;
    console.log(siguiente);
    a = b;
    b = siguiente;
}

//Ejercicio que muestra si un número es primo.
console.log(`Numero Primo`);

let numero = prompt("Por favor, introduce un numero (0 para terminar):");
numero % 2 == 0 ? console.log(`Es numero primo`) : console.log(`No es numero primo`);
