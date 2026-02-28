let edad = 16; 

let esMayor = edad >=18 ? console.log("Es mayor"): console.log("es menor");

let diaSemana = true;

let abierto = diaSemana == true ? console.log("abierto") : console.log("Cerrado");

let horaApertura;
let horaActual = 10;

let dia = 0; // 0. domingo, 1 lunes...

horaApertura = ( [0,6].includes( dia ) ) ? 11 : 9;

let mensaje = ( horaActual >= horaApertura ) ? "Esta abierto" : `Esta cerrado, abrimos a las: ${horaApertura}`

console.log( {horaApertura, mensaje} )