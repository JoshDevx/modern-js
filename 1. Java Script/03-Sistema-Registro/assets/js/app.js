// Capturar elementos del DOM 
const formularioRegistro = document.querySelector('#formulario-registro');
const supervisor = document.querySelector('#input-supervisor');
const sector = document.querySelector('#input-sector');
const kilos = document.querySelector('#input-kilos');

// Almacenar resultados
const totalKilos = document.querySelector('#total-kilos');
const totalRegistros = document.querySelector('#total-registros');
const tablaRegistros = document.querySelector('#tabla-registros');

let registroCampos = [];

// Evento para escuchar formulario
formularioRegistro.addEventListener('submit', (evento) =>{
    //Evitar que al enviar la respuesta se recargue la pagina
    evento.preventDefault();
    console.log('Formulario enviado, sin recargar la página');

    const nuevoRegistro = {
        supervisor: supervisor.value,
        sector: sector.value,
        kilos: Number(kilos.value)
    }

    //Insertar datos en mi arreglo
    registroCampos.push(nuevoRegistro);

    //Limpiar Formulario
    formularioRegistro.reset();
    actualizarMetricas();
    registroTabla();
});

console.log(registroCampos);

//Actualizar html
const actualizarMetricas = () =>{
    let sumaKilos = 0;
    totalRegistros.innerText = registroCampos.length;
    for(let i = 0; i < registroCampos.length; i++){
        sumaKilos += registroCampos[i].kilos;
    }

    totalKilos.innerText = sumaKilos;
};

const registroTabla = () =>{
    tablaRegistros.innerHTML = '';
    let html = '';
    for(let y = 0; y < registroCampos.length; y++){
        html += `<tr>
                <td>${y+1}</td>
                <td>${registroCampos[y].supervisor}</td>
                <td>${registroCampos[y].sector}</td>
                <td>${registroCampos[y].kilos}</td>
                </tr>`
    }

    tablaRegistros.innerHTML = html;

}
