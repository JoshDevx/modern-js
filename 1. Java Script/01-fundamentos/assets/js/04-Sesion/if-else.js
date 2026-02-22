let a = 5;

if(a > 6){
    console.log('A es mayor que 10')
}else{
    console.log('A es menor que 10')
}

///
let edad = 18;

if(edad >= 18){
    console.log('Es mayor de edad');
}else{
    console.log('Es menor de edad');
}

//
const hoy = new Date();
let dia = hoy.getDay();
console.log(hoy)
console.log(typeof dia)
console.log(dia);


if( dia  === 0){
    console.log('Es domingo')
}else{
    console.log('No es domingo');
}

//
const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

let dayHoy = 0;

console.log(dias[dayHoy]);
