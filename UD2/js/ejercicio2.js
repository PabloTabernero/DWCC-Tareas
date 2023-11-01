let edad = parseInt(prompt("Por favor, introduce una edad entre 0 y 100:"));

if (edad < 0 || edad > 100 || isNaN(edad)) {
    console.log(`Edad incorrecta`);
}else{
    if (edad <= 12) {
        console.log(`neno`);
    } else if (edad <= 18) {
        console.log(`adolescente`);
    } else if (edad <=30) {
        console.log(`xoven`);
    } else if (edad <= 64) {
        console.log(`adulto`);
    } else {
        console.log(`xubilado`);
    }
} 