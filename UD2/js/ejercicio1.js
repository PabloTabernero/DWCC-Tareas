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
let primo = parseInt(prompt("Por favor, introduce un numero (0 para terminar):"));
if (primo < 2) {
    console.log(`El numero ${primo} no es primo.`);
}else if (primo < 4) {
    console.log(`El numero ${primo} es primo.`); 
}else {
    let n = primo;
    do {
        n--;
        if (primo % n == 0) {
            break;
        }
    }while(n > 1);
    console.log(n == 1 ? `El numero ${primo} es primo.`: `El numero ${primo} no es primo.`);
}
