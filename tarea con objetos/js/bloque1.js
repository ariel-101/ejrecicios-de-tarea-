// bloque #1 
// 1) registrar libros con arreglos
console.log(" #1) ---- Registro de Libros ----");
let Libros =[];
function agregarLibros(titulo, autor, año) {
    let n , i=0;
    n=prompt("Cuantos libros desea agregar");
    while(i<n){
        titulo=prompt("Ingrese el titulo del libro");
        autor=prompt("Ingrese el autor del libro");
        año=prompt("Ingrese el año del libro");
        let=Libros.push({ titulo, autor, año });
        i++;
    }
    console.log(Libros);

}
debugger;
agregarLibros();

// 2)buscar libros por titulo

console.log(" #2) ---- Busqueda de Libros ----");

function buscarLibros(Libros) {
    let tituloBuscado = prompt("Ingrese el titulo del libro a buscar");
    let encontrado;
    for (let i = 0; i < Libros.length; i++) {
        let libro = Libros[i];
        if (libro.titulo === tituloBuscado) {
            encontrado = libro;
            break;
        }
    }
    if (encontrado) {
        console.log("Libro:",tituloBuscado,"existente");
    } else {
        console.log("El Libro",tituloBuscado,"no existe");
    }
    return encontrado;
}
debugger;
buscarLibros(Libros);

//3) contar libros publicados despues de los 2000
console.log(" #3) ---- Libros publicados despues del 2000 ----");
function contarLibros(Libros) {
    for (let i = 0; i < Libros.length; i++) {
        let libro = Libros[i];
        if (libro.año >= 2000) {
            console.log(libro);
        }
    }
}
debugger;
contarLibros(Libros);

// 4) concatenar todos los titulos en una cadena 

console.log (" #4) ---- Concatenar titulos de libros ----");

function concatenarTitulos(Libros){
    let cadena = " ";
    for (let i = 0; i < Libros.length; i++) {
        cadena += Libros[i].titulo;
        if (i < Libros.length - 1) {
            cadena += ", ";
        }
    }
    console.log("Titulos:", cadena);
    return cadena;
}
debugger;
concatenarTitulos(Libros);

// #5) actualizar el año de un libro

console.log(" #5) ---- Actualizar año de un libro ----");

function actualizarLibro(Libros) {
    let tituloBuscado = prompt("Ingrese el título del libro a actualizar");
    let nuevoAño = prompt("Ingrese el nuevo año");
    for (let i = 0; i < Libros.length; i++) {
        if (Libros[i].titulo === tituloBuscado) {
            Libros[i].año = nuevoAño;
            console.log("Año actualizado:", Libros[i]);
            break;
        }
    }
}
debugger;
actualizarLibro(Libros);