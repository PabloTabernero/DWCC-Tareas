class Disco {
    nombreDisco;
    grupo;
    anoPublicacion;
    tipoMusica;
    prestado;

    constructor(nombreDisco, grupo, anoPublicacion, tipoMusica, prestado) {
        this.nombreDisco = nombreDisco;
        this.grupo = grupo;
        this.anoPublicacion = anoPublicacion;
        this.tipoMusica = tipoMusica;
        this.prestado = prestado;
    }

    cargarDatos(nombreDisco, grupo, anoPublicacion, tipoMusica, prestado) {
        this.nombreDisco = nombreDisco;
        this.grupo = grupo;
        this.anoPublicacion = anoPublicacion;
        this.tipoMusica = tipoMusica;
        this.prestado = prestado;
    }

    verInfoDisco() {
        console.log('Nombre: ' + this.nombreDisco);
        console.log('Grupo o Solista: ' + this.grupo);
        console.log('Año Publicación: ' + this.anoPublicacion);
        console.log('Tipo de Música: ' + this.tipoMusica);
        console.log('Presatado: ' + this.prestado);
        console.log('');
    }

    static verColeccion(coleccion) {
        coleccion.forEach(disco => disco.verInfoDisco());
    } 
}

//Ejecución
let coleccion = [];

let disco1 = new Disco("Master of Puppets", "Metallica", 1986, "Metal", false);
coleccion.push(disco1);

let disco2 = new Disco("Ride the Lightning", "Metallica", 1984, "Metal", true);
coleccion.push(disco2);

let disco3 = new Disco()
disco3.cargarDatos("Metallica (The Black Album)", "Metallica", 1991, "Metal", false);
coleccion.push(disco3);

Disco.verColeccion(coleccion);
