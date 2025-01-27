// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []
// funcion de dimplificasion de modificacion de elementos html
function asignarNombreElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//funcion para agregar amigos 
function agregarAmigo () {
    let amigosUsuario = document.getElementById ("amigo").value.trim();
    //varificacion de campo vasio
    if (amigosUsuario=== "") {
        alert("Porfavor ingrese un nombre valido");
        return;
    }
    //agregar a la lista 
    listaAmigos.push(amigosUsuario);
    //liempieza de barra de nombres amigos
    limpiarbarra();
    //actualizacion de lista 
    actualizarListaAmigos();  
}
//funcion de limpieza de barra agregar amigos 
function limpiarbarra  () {
    document.querySelector('#amigo'). value =''
}
//funcion de actualizacon de lista de amigo html 
function actualizarListaAmigos(){
    let listahtml = document.getElementById("listaAmigos");
    listahtml.innerHTML= "";

    //bucle for para recorrer lita con amyor control 
    for(let i = 0; i < listaAmigos.length; i++){
        let amigo = listaAmigos [i];
        //creacion de <li> para cada amigo 
        let li = document.createElement("li");
        li.textContent = amigo //asignacion del nombre <li>
        //agregar el <li> al contenedor de html 
        listahtml.appendChild(li);
    }
}
