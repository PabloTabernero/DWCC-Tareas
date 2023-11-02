//Ejercicio que muestra la tabla de multiplicar del 9 con bucle while.
console.log("Tabla de Multiplicar del 9");
var i = 1;
while (i < 11) {
    console.log("9 x ".concat(i, " = ") + (i * 9));
    i++;
}
//Ejercicio que muestra los 10 primeros numeros Fibonacci con bucle for.
console.log("Numeros Fibonacci");
var a = 0;
var b = 1;
console.log(a);
console.log(b);
for (var j = 2; j < 10; j++) {
    var siguiente = a + b;
    console.log(siguiente);
    a = b;
    b = siguiente;
}
//Ejercicio que muestra si un número es primo.
console.log("Numero Primo");
var primo = parseInt(prompt("Por favor, introduce un numero (0 para terminar):"));
if (primo < 2) {
    console.log("El numero ".concat(primo, " no es primo."));
}
else if (primo < 4) {
    console.log("El numero ".concat(primo, " es primo."));
}
else {
    var n = primo;
    do {
        n--;
        if (primo % n == 0) {
            break;
        }
    } while (n > 1);
    console.log(n == 1 ? "El numero ".concat(primo, " es primo.") : "El numero ".concat(primo, " no es primo."));
}
