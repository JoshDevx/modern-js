let lotesCosecha = [
    { id: 1, nombre: 'Lote Norte 01', toneladas: 120, estado: 'completado' },
    { id: 2, nombre: 'Lote Sur 05', toneladas: 85, estado: 'pendiente' },
    { id: 3, nombre: 'Lote Este 02', toneladas: 200, estado: 'completado' },
    { id: 4, nombre: 'Lote Norte 02', toneladas: 45, estado: 'en proceso' },
    { id: 5, nombre: 'Lote Oeste 01', toneladas: 150, estado: 'completado' }
];

// TAREA 1: Crea un nuevo array que solo contenga los nombres de los lotes (Usa .map)
let nombresLotes = lotesCosecha.map(name => name.nombre);// Tu código aquí


// TAREA 2: Filtra los lotes que tengan más de 100 toneladas y estén 'completado' (Usa .filter)
let lotesTop = lotesCosecha.filter((tn) => tn.toneladas > 100);

// TAREA 3: Calcula el total de toneladas de todos los lotes (Usa .reduce)
// Pista: el valor inicial del acumulador debe ser 0
const valorInicial = 0; 
let totalToneladas = lotesCosecha.reduce((acumulador, actualValor) => acumulador + actualValor.toneladas , valorInicial);

// TAREA 4: Encuentra la posición (índice) del lote 'Lote Sur 05' y cámbiale el estado a 'completado'
// (Usa .findIndex)
//let indice = lotesCosecha.findIndex('Lote Sur 05')

console.log({ nombresLotes, lotesTop, totalToneladas});