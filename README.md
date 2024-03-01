# Repositorio para la asignatura DWCC

Este repositorio contiene las tareas realizadas para la asignatura "Desenvolvemento web en contorno cliente".

## Tarea Actual: Tarea UD05

### Comentarios

Se realiza el script solicitado para la validación de un formulario html.

Consideraciones de implementación: 
- Se validan todos los campos del formulario en el momento de pulsar el boton enviar, mostrando mensajes de error para cada uno de los campos en los que falle la validación.
- De cada campo se valida primero que no sea vacío (todos los campos son obligatorios) y después que cumplan con los formatos requeridos.
- En caso de que falle la validación para varios campos el foco del formulario irá al último campo en el que ha fallado la validación.
- Al boton limpiar se le añaden funcionalidades para que además de limpiar los campos del formulario, tambien borre los errores e intentos de pantalla, además de reiniciar el contador de intentos a 0.

## Tarea:  UD2.2

### Comentarios

Se crea el objeto disco con los métodos solicitados. Para la prueba de ejecución se crean dos discos con el método constructor y uno con el método cargarDatos(), que se van almacenando en un array. Posteriormente se visualizan utilizando el método verColeccion() que recorre el array llamando al método verInfoDisco() para cada objeto disco.

### Captura de ejecución

![image](https://github.com/PabloTabernero/dwcc/assets/146489846/c80d3cf1-d239-4504-a052-3337cc7f6e43)
