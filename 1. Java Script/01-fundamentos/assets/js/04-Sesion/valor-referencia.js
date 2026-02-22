/**
 * Tipos Primitivos (Asignación por valor)
*  Los números, textos (strings) y booleanos son tipos primitivos.
 */

let a = 10;
let b = a;
a = 30;

console.log( {a,b} )

/**
 * Tipos de Referencia (Asignación por referencia)
 * Los objetos, arrays (arreglos) y funciones son tipos de referencia.
 * guarda en un lugar de la memoria llamado heap (montículo)
 */
let joshua = {nombre: 'Joshua'};
let jayden = joshua;
joshua.nombre = 'Jayden';

console.log( {joshua} );
console.log( {jayden} );


//
let cambiarNombre = ( persona, nome ) => {
    persona.nombre = nome
    return persona;
}

let karly = {nombre: 'Karly'};

let janelly = cambiarNombre(karly, 'Janelly');

console.log({karly, janelly});


/**
*Spread Operator (...), JavaScript crea una copia del objeto y, lo 
*más importante, le asigna su propia dirección de memoria totalmente nueva.
*/

// Creamos un objeto
let mamifero = { tipo: 'mamifero' };

// Una funcion que saca una copia del objeto con Spread y retona el objeto
let copiaObjeto = ( especie, tipo ) =>{
    return {...especie, tipo: tipo} 
}

// Asignamos el objeto retornado a una variable
let invertebrado = copiaObjeto(mamifero, 'Invertebrado');

console.log( {mamifero, invertebrado} );

// Uno mas
const cambiaName = ({...person}) => {
    person.nombre = 'Meredyth'
    return person;
}

let mer = cambiaName(karly);

console.log( {karly, mer} )


// Arreglos

const frutas = ['Manazana', 'Performance','Piña'];

const otrasFrutas = frutas;
otrasFrutas.push('Mango')

console.table( {frutas, otrasFrutas} );

//Usando Spread en arreglos
const otrasFrutras2 = [...frutas];

otrasFrutras2.push('Ciruela');
console.table( { frutas, otrasFrutas, otrasFrutras2 } )

// Usando slice:
const otrasFrutas3 = frutas.slice();

otrasFrutas3.push('Sandia');

console.table( {frutas, otrasFrutas3} )

//Midiendo el tiempo de carga 
console.time('slice');
const otrasFrutas4 = frutas.slice();
console.timeEnd('slice');
//
console.time('spread');
const otrasFrutas5 = [...frutas]; //spred es mas rapido 
console.timeEnd('spread');


