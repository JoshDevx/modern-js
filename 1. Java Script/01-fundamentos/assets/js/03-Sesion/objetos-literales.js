const personaje = {
    nombre: 'Joshua',
    cod: 1245,
    edad: 26,
    coords: {
        lat: 34.034,
        lng: -118,
    },
    trajes: ['Mark I', 'Mark V','Traje Mio'],
    apellido: 'Mendoza Macalupu',
    direccion:{
        calle:'xd'
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Coors', personaje.coords.lat);

console.log('No de Trajes: ', personaje.trajes.length)
console.log(personaje.trajes[2]);
console.log(personaje.trajes[personaje.trajes.length - 1])

const x = 'edad';
console.log('Edad: ', personaje[x]);

console.log(personaje['apellido']);

//Mas detalles
//elimar un objeto
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

//volver a pares cada objeto
const entriesPares = Object.entries( personaje )
console.log(entriesPares)

Object.freeze( personaje ) //Congelar un objeto hasta donde se realiza el freeze
//No permite asignar o modificar mas objetos
personaje.dinero = 1500;

console.log( personaje );

//Pero a los Objetos de los objetos si se les puede modificar
personaje.direccion.calle = "Piura";

console.log( personaje )

//Propiedas de un Objeto
const propiedades =  Object.getOwnPropertyNames( personaje );
console.log(propiedades);

//Valores de un objeto
const valores = Object.values
