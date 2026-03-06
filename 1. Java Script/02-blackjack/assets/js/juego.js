// Patron Modulo
(() => {
    'use strict'

    // Una lista vacia para nuestra baraja 
    let deck = [];

    //Una lista para cada simbolo de carta
    const   tipos = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J','K'];

    let puntosJugador = 0,
        puntosComputadora = 0;

    //Referencias HTML
    const   btnPedir = document.querySelector('#btnPedir'),
            btnNuevo = document.querySelector('#btnNuevo'),
            btnDetener = document.querySelector('#btnDetener');

    const   small = document.querySelectorAll('small'),
            divCartasJugador = document.querySelector('#jugador-cartas'),
            divCartasComputadora = document.querySelector('#computadora-cartas');

    // Esta funcion inicializa el juego
    const incializarJuego = () =>{
            deck = crearDeck();
    }

    // Funcion para crear nuestra baraja de cartas
    const crearDeck = () => {
        deck = [];
        // Creamos una lista de cartas 
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
        // Baraja aleatoriamente el arreglo
        return _.shuffle( deck );
    }



    // Esta funcion me permite elegir una carta y eliminar del arreglo la carta elegida
    const pedirCarta = () => {
        if(deck.length === 0){
            throw 'No hay cartas en el desk'
        }
        return deck.pop();
    }

    // Creamos una funcion para devolver el valor de una carta
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                (( valor === 'A' ) ? 11 : 10):
                (valor * 1);

    }

    const acumularPuntos = () =>{
        
    }

    // turno Computadora
    const turnoComputador = (puntosMinimos) => {
        do{
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta( carta );
            small[1].innerText = (puntosComputadora)

            const imgCarta = document.createElement('img'); 
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append( imgCarta );
            if(puntosMinimos > 21){
                break;
            }
        }while(  puntosComputadora < puntosMinimos && puntosComputadora <= 21)
        
        mensaje(puntosJugador,puntosComputadora);
    }





    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta( carta );
        small[0].innerText = (puntosJugador)

        const imgCarta = document.createElement('img'); 
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append( imgCarta );

        if(puntosJugador > 21){
            console.warn('Lo siento, perdiste!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputador(puntosJugador);
        } else if(puntosJugador === 21){
            console.warn('21: Genial!');
            btnDetener.disabled = true;    
            btnPedir.disabled = true;
            turnoComputador(puntosJugador);
        }

    } )

    btnDetener.addEventListener('click', () =>{
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(puntosJugador);
    });

    const mensaje = (puntosJug, puntosPc) => {
        setTimeout(() => {
            
            if(puntosJug > 0 || puntosPc > 0) {
                if(puntosJug === puntosPc){
                    alert('Nadie gano');
                } else if(puntosJug > 21){
                    alert('Gano la computadora!');
                } else if(puntosPc > 21){
                    alert('Gano el Jugador!');
                } else if(puntosPc > puntosJug){
                    alert('Gano la Computadora!');
                } else {
                    alert('Gano el jugador!');
                }
            }
            
        }, 100);
    } 

    btnNuevo.addEventListener('click', () =>{
        
        console.clear();
        incializarJuego ();
        //crearDeck();
        puntosJugador = 0;
        puntosComputadora = 0;

        small[0].innerText = 0;
        small[1].innerText = 0;

        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;
        
    })


})();


