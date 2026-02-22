//const arr = new Array(10);
//console.log(arr);
//const arr = [];


let juegos = ['Zelda', 'Mario', 'Chromo'];
console.log('Largo: ' + juegos.length);

let arregloCosas = [
    true,
    123,
    'Joshua',
    1+2,
    function(){},
    ()=>{},
    {a: 1},
    ['x', 'Megamant', 'Joshua']
];

console.log(arregloCosas[7][2]);

console.log({arregloCosas});

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

// Recorrer un array
juegos.forEach( (elemento, indice, arr) =>{
    console.log({ elemento, indice, arr})
});

//agregar un elemento al final de un array
let nuevaLongitud = juegos.push( 'F-Zero');
console.log({ nuevaLongitud, juegos });

//Agregar elementos al inicio
nuevaLongitud = juegos.unshift('Fire')
console.log({ nuevaLongitud, juegos });


//Borrar el ultimo elemtno
let juegoBorrado = juegos.pop();
console.log({juegoBorrado})

console.log(juegos);
let pos = 1;

//Borrar un elemento de una posicion especifica
let juegosBorrados = juegos.splice(pos, 1)
console.log({juegoBorrado, juegos})


// Bucar un elemento del arreglo
let metroIndex = juegos.indexOf('Chromo');
console.log({metroIndex});