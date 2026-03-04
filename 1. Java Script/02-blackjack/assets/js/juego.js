/**
 * 2C = dos de TREBOL
 * 2D = dos de DIAMANTES
 * 2H = dos de CORAZONES
 * 2S = dos de ESPADAS
 */

// let porque se va a modificar
// Una lista vacia para nuestra baraja 
let deck = [];

//Una lista para cada simbolo de carta
const tipos = ['C', 'D', 'H', 'S'];

// Lista de Cartas de letras
const especiales = ['A', 'J','K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const small = document.querySelectorAll('small');
// Funcion para crear nuestra baraja de cartas
const crearDeck = () => {
    // Creamos una lista de cartas 
    //Nuestras cartas incian en dos 
    for(let i = 2; i <= 10; i++){
        //Recorremos el array
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    //Recorremos la lista de las letras
    for(let tipo of tipos){
        //Recorremos la lista de las especiales
        for(esp of especiales){
            deck.push(esp + tipo)
        }
    }
    //Ya tenemos toda nuestra baraja lista
    //console.log(deck)
    // Baraja aleatoriamente el arreglo
    deck = _.shuffle( deck );
    return deck;

}

crearDeck()

// Esta funcion me permite elegir una carta y eliminar del arreglo la carta elegida
const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el desk'
    }
    
    const carta = deck.pop();
    return carta;
}

// Creamos una funcion para devolver el valor de una carta
const valorCarta = ( carta ) => {
    // Extraemos el valor de la carta
    // Substring: permite extraer valores de una cadena
    // cadena.substring(indiceA[, indiceB'])
    const valor = carta.substring(0, carta.length - 1);
    
    return ( isNaN( valor ) ) ? (( valor === 'A' ) ? 11 : 10):
                                    puntos = valor * 1

    // Condicion para ver si devuelve un numero
    //if( isNaN( valor ) ) {
    //    puntos = (valor === 'A') ? 11 : 10;
    //} else {
    //    console.log('Es un numero');
     //   puntos = valor * 1
    //}
}

let valor = valorCarta( pedirCarta() );

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    small[0].innerText = (puntosJugador)

    

} )

