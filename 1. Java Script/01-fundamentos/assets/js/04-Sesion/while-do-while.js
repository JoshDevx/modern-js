const carros = ['Ford', 'Mazda', 'Toyota'];
let i = 0

console.warn('While')

while( i < carros.length ){
    console.log(carros[i]);
    i++;
}

//null
//undefined
//false
while( carros[i] ){
    console.log( carros[i] );
    i++;
}

let vocales = ['a', 'e', 'i', 'o', 'u']
let j =0
while( vocales[j] ){
    if(j === 0){
        j++
        continue;
    }
    console.log(vocales[j])
    j++
}


console.warn('Do While')
let y = 0; 
do{
    console.log(vocales[y])
    y++;
}while(vocales[y])
