// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo(){
    let nuevoamigo = (document.getElementById('amigo').value);
    if (nuevoamigo !== null && nuevoamigo !== undefined && nuevoamigo !== "") {
        arrayAmigos.push(nuevoamigo);
        let nuevoElemento = document.createElement('li'); 
        nuevoElemento.textContent = nuevoamigo; 
        listaAmigos.appendChild(nuevoElemento);
        resultado.innerHTML='';
        console.log(arrayAmigos);
        limpiarCaja()
    }else{
        alert("Por favor ingrese un nombre válido");
    }

}
function sortearAmigo(){
    console.log(arrayAmigos.length);
    if (arrayAmigos.length >0) {
        let numeroGenerado =  Math.floor(Math.random()*arrayAmigos.length);
        let nuevoElemento = document.createElement('li'); 
        nuevoElemento.textContent = arrayAmigos[numeroGenerado]; 
        resultado.innerHTML='';
        listaAmigos.innerHTML='';
        resultado.appendChild(nuevoElemento);
        console.log(arrayAmigos);
        arrayAmigos = [];
    }else{
        alert("Por favor ingrese al menos un amigo");
    }
}
    
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}