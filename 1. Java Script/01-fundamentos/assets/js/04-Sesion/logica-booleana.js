//
const regresaTrue = () => {
    console.log('Regresa True')
    return true;
};

const regresaFalse = () => {
    console.log('Regresa False')
    return false;
};



//Usamos negacion
console.warn('Not a la negacion');
console.log(!regresaFalse()) //true

console.warn('and') // true: si todo los valores son verdaderos
console.log(true && true); // true
console.log(true && !true); // false

console.log('========');
//aqui solo se ejecuta false
//al entrar a la pirmera funcion detecta false, ya no es necesario saber la segunda funcion, el resultado sera false
console.log(regresaFalse() && regresaTrue()); // false
// Aqui entra en ambos, ingresa a true y necesita saber que es la segunda funcion
//entra y es false, resultado false
console.log(regresaTrue() && regresaFalse()); // false

console.log('=== && ===');
regresaFalse() && regresaTrue();

//true: si al menos uno es verdad
console.warn('OR')
console.log(true || false) // true
console.log(false||true) // false

console.log(regresaTrue() || regresaFalse());

