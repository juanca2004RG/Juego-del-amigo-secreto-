// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []
// funcion de simplificasion de modificacion de elementos html
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
        alert("Porfavor, ingrese un nombre valido");
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
//Detecciond de la tecla enter 
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo(); // Llamar a la función para agregar el amigo
        limpiarbarra(); // Limpiar el campo para que el usuario pueda escribir nuevamente
    }
});
//funcion de actualizacon de lista de amigo html 
function actualizarListaAmigos(){
    let listahtml = document.getElementById("listaAmigos");
    listahtml.innerHTML= "";

    //bucle for para recorrer lita con mayor control 
    for(let i = 0; i < listaAmigos.length; i++){
        let amigo = listaAmigos [i];
        //creacion de <li> para cada amigo 
        let li = document.createElement("li");
        li.textContent = amigo //asignacion del nombre <li>
        //agregar el <li> al contenedor de html 
        listahtml.appendChild(li);
    }
}
//Fuoncion de soteo de amigo 
function amigosorteado (){
    if (listaAmigos.length ===0){
        alert ("Lista sin amigos, por favor dijite el nombre");
        return;
    }
    //asignacion aleatoria de amigo secreto 
    let selecionAleatoria = Math.floor (Math.random() * listaAmigos.length);
    //Optecion de nombre de amiog secreto 
    let amigoEscogido = listaAmigos[selecionAleatoria];

    //Mostrar gandor en pantalla (html)
    asignarNombreElemento ('#resultado', `Felicidades el  amigo secreto es: ${amigoEscogido}`);

}
//Fujncion para las condiciones inicales 
function condicionesIniciales(){
    //vaciar el resultado del sorteo 
    asignarNombreElemento("#resultado", "");
    //liampia campo de entrada 
    document.querySelector ("#amigo ").value = "";
    //vaciar lista de amigos en pantalla
    document.getElementById ("listaAmigos").innerHTML = "";
    //Limpira el array de amigos 
    listaAmigos = [];
}
function reiniciarJuego(){
    condicionesIniciales()
        document.querySelector(".button-drew").removeAttribute("diseabled");
    
}

//Ejecucuon de condiciones iniciales al cargar la pagina 
condicionesIniciales();
