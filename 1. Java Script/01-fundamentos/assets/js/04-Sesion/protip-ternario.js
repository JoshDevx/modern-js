const elMayor = ( a,b ) => a > b ? a : b;



const esMiembro = (miembro) => ( miembro ) ? "2 Dolares" : "10 Dolares";

const amigo = false;

const amigoArr = [
    'Mer',
    'Joshua',
    'Jayden',
    'Karly',
    amigo ? 'Thiryon' : 'Dracko' 
]

//
console.log( elMayor(10,20) );

console.log( esMiembro(true) );

console.log( amigoArr )


let toneladas = 180
let condicion = toneladas >= 180 ? "Excelente rendimiento" :
                toneladas >= 150 ? "Buen rendimiento"      :
                toneladas >= 100 ? "Bajo rendimiento"      : "Mal rendimiento";

console.log( {toneladas, condicion} )