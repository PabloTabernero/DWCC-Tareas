//Ejercicio que muestra la tabla de multiplicar del 9 con bucle while.
console.log(`Tabla de Multiplicar del 9`);

let i: number = 1;
while (i < 11) {
    console.log(`9 x ${i} = ` + (i*9));
    i++;
}

//Ejercicio que muestra los 10 primeros numeros Fibonacci con bucle for.
console.log(`Numeros Fibonacci`);

let a: number = 0;
let b: number = 1;
console.log(a);
console.log(b);

for(let j: number = 2; j < 10; j++) {
    let siguiente: number = a + b;
    console.log(siguiente);
    a = b;
    b = siguiente;
}

//Ejercicio que muestra si un número es primo.
console.log(`Numero Primo`);

let primo: number | null = parseInt(prompt("Por favor, introduce un numero (0 para terminar):"));
primo % 2 == 0 ? console.log(`Es numero primo`) : console.log(`No es numero primo`);
