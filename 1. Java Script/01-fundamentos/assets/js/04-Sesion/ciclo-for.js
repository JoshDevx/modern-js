const heroes = ['Batman', 'Superman', 'Mujer Maravilla'];

console.warn('Ciclo for Tradicional');

for(let x = 0 ; x < heroes.length ; x++){
    console.log(heroes[x])
}

console.warn('For in')

for(let i in heroes){
    console.log(heroes[i])
}

console.warn('For Of');

for(let heroe of heroes){
    console.log(heroe)
}