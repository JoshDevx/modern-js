/**  Recibimos valores para un objeto, cuando los valores recibidos son igual al 
*que se va a retornar no es necesario especificar asi:
*return{
 *  nombre: nombre,
 * apellido: apellido
 * }
**/
function crearPersona(nombre, apellido){
    return{ nombre, apellido}
}

//console.log( crearPersona('Joshua', 'Mendoza') )


/**Con flecha se encierra en parentesis para indicar 
*  a la funcion que queremos retornar el valor de la funcion 
**/
const people = (nombre, apellido) => ({nombre,apellido});

console.log(people('Karly', 'Janelly'));

//Una funcion de flecha no guarda o genera los arguments
const imprimiendoArguments = () => {
    return( arguments );
}

// Si queremos que retorne debemos hacer con(rest parameter) ...
/**
 * Es una sintaxis que permite representar un número indefinido de 
 * argumentos como un Array. 
 * Se identifica por los tres puntos suspensivos (...) 
 * seguidos del nombre del array que los contendrá.
 * Solo podemos usar uno por funcion
 * es un array de verdad a diferencia del objeto arguments
 * Al ser un array de verdad se puede usar map(), filter() o reduce() 
 */

//Ideal para cuando no sabes cuántos datos enviará el usuario (como una lista de precios o nombres
const listarNombres = (...nombres) => {
    return console.log(nombres); 
};

listarNombres("Jhocsua", "Pedro", "Ana");


//.join(" separador "): Tú eliges qué poner entre cada elemento (un espacio, una coma, un guion, o incluso un salto de línea).
const registrarAlumno = (ciclo, ...materias) => {
    console.log(`Ciclo: ${ciclo}`);
    console.log(`Materias inscritas: ${materias.join(", ")}`);
};

// "5to" va a 'ciclo'. Los demás van a 'materias'.
registrarAlumno("5to", "Java", "Kotlin", "SQL");

// Aqu solo estamos imprimiendo el rest parameter
const animales = (mamifero, ...invertebrados) => {return invertebrados}; 
console.log(animales('Vaca', 'Serpiente', 'Gusano'));

// Podemos devolver como un objeto 
const listaUsuarios = (admin, ...args) =>{
    return{
        admin,
        usuarios: args
    }
}

console.log(listaUsuarios('Joshua','Mer', 'Jayden', 'Karly'));

// O devolver como un arreglo

const listaUtiles = (grado, ...utiles) => {
    return[
        grado, utiles
    ]
}

console.log( listaUtiles('1ero', 'Cuaderno', 'Lapicero', 'Colores') );

// Otra manera de imprimir
const detallePersona = (...args) => args;


const [casado, nombre, saludos] = detallePersona(true, 'Joshua', 'Hola');

console.log( {casado, nombre, saludos} );

//
function crearPersona(nombre, apellido){
    return{ nombre, apellido}
}

const {apellido} = crearPersona('Mer', 'Mendoza')
console.log( {apellido} )

// Destructuracion de Objetos
const tony = {
    nombrex: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 26,
    trajes: ['Mark I','Mark V']
}

const imprimePropiedades = ({nombrex, codemane, vivo, edad= 0, trajes}) =>{
    console.log({nombrex}); 
    console.log({codemane}); 
    console.log({vivo}); 
    console.log({edad}); 
    console.log({trajes})
}

console.log( imprimePropiedades(tony) );

