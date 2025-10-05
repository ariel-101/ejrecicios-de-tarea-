// #6) implementar pila de libros

console.log(" #6 pila de libros:")

let pilaLibros = []; // pila de libros
function agregarLibro() {
    let titulo = prompt("Ingrese el título del libro");
    let autor = prompt("Ingrese el autor del libro");
    let año = prompt("Ingrese el año del libro");
    pilaLibros.push({ titulo, autor, año });
}
function mostrarLibros() {
    for (let i = pilaLibros.length - 1; i >= 0; i--) {
        console.log(pilaLibros[i]);
    }
}
debugger;
let n = prompt("¿Cuántos libros desea agregar");
for (let i = 0; i < n; i++) {
    agregarLibro();
}
mostrarLibros();

// #7 eliminar el ultimo libro ingresado

console.log(" #7 eliminar ultimo libro:")
function eliminarUltimoLibro() {
    let libroEliminado = pilaLibros.pop()
    console.log( "libro eliminado:",libroEliminado)
}
debugger;
eliminarUltimoLibro();

// #8 ver el ultimo en la cima

console.log(" #8 ver el ultimo en la cima")
function verUltimoLibro() {
    console.log("Libro en la cima:", pilaLibros[pilaLibros.length - 1]);
}
debugger;
verUltimoLibro();

// #9 verificar si la pila esta vacia

console.log(" #9 vericar pila vacia o con libros:")

function verificarPlia(){
    if (pilaLibros.length === 0){
        console.log("La pila está vacía");
    }
    else{
        console.log(`La pila tiene ${pilaLibros.length} libros`);
    }
}
debugger;
verificarPlia();

// #10 vaciar completamente pila

console.log(" #10 vaciar completamente la pila:")  

function vaciarPila() {
    let contador= pilaLibros - 1
    let i = 0
    while (contador >= i) {
        contador--
    }
    if (contador === -1) {
        console.log("La pila está vacía.");
    }
}
debugger;
vaciarPila();