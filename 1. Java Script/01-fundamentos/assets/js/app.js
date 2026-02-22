// Soy un comentario xddd

console.log("Hola mundo");

let a = 10; 

// Otra manera de declarar variables 
let b = 5,
    c = 6,
    d = "Hola ";
    f = "Harry potter",
    c = b + c;

const saludo = d + f;


// Impresión en consola
console.log('b', c);
console.log('c', c);
console.log('d', d);

// Imprimiendo
console.warn(b);
console.error(b);

// Imprimiendo variables 
console.log({b});
console.log({c});
console.log({d});

// Darle diseño a la consola con CSS--> %c
console.log('%c Mis variables', 'color:blue; font-weigth: bold; background-color: white');

console.table({b, c, d, f, c});