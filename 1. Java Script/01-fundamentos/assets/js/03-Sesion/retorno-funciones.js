console.clear(); // Esto limpia todo lo anterior cada vez que el script corre
// ... resto de tu código
// Funciones con retorno
// Si no se agrega un valor de retorno, retorna undefined
function tip(name){
    console.log(arguments)
    console.log('Hola: ' + name)
    return 1;
};

tip('Hola: ' + 'Joshua', 26, 'Dev'); // 1

const retornoDeTip = tip('Hola: ' + 'Joshua', 26, 'Dev');

console.log({ retornoDeTip })


//  
function saludo(){
    return 10;
    // Este codigo no se va a ejecutar
    console.log("Soy un codigo despues del return")
}

const retornoDeSaludo = saludo();
console.log({ retornoDeSaludo });

function arreglo(){
    return [1,2,3]
}

const arr = arreglo();

console.log( {arr} )

// Dos parametros
function suma(a,b){
    return a +b;
}

const sum = suma(1,2);

console.log({sum});

//Usando funcion de flecha

const restar = (a,b) =>{
    return a - b;
}

console.log( restar(20,10) );

// Si solo usaremos una linea
//A esto se le llama return implicito
const restar2 = (a,b) => a-b;

console.log( restar2(40,15) )

//

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

// Con funcion de flecha
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());

