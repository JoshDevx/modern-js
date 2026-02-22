// Funcion que recibe un parametro
function saludar(name){
    console.log('Hola: ' + name)
};

saludar("Joshua");

// Funcion anonima

const saludar2 = function saludar(){
    console.log("Hola")
};

saludar2();


// Arguments en las funciones
// lAS FUNCIONES
function tip(name){
    console.log(arguments)
    console.log('Hola: ' + name)
};

tip('Hola: ' + 'Joshua', 26, 'Dev');

// Funciones de flecha

const saludarFlecha = () => {
    console.log('Hola flecha')
};

saludarFlecha();

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola: ' + nombre)
};

saludarFlecha2('Joshua');