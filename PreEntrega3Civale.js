//Programa para que cada persona ingrese sus datos y elegir un ganador random entre ellos 

let listaParticipantes = [];

function registro(){
    let nombre = document.getElementById("nombreParticipante").value; 
    let apellido = document.getElementById("apellidoParticipante").value;
    let dni = document.getElementById("dniParticipante").value;  
    let telefono = document.getElementById("telefonoParticipante").value;

    let dniDuplicado = listaParticipantes.find(objParticipante => objParticipante.dni == dni);

    if (dniDuplicado) {
        document.body.innerHTML = `<h2>Lo siento :(</h2>
                                   <p>Ya se ha registrado un participante con este DNI</p>;
                                   <a href="PreEntrega3Civale.html">Volver</a>`;
    }

    class DatosParticipantes { 
        constructor (nombre, apellido, dni, telefono){
            this.nombre = nombre; 
            this.apellido = apellido; 
            this.dni = dni; 
            this.telefono = telefono; 
        }
    } 
       
    let nuevoParticipante = new DatosParticipantes (nombre, apellido, dni, telefono); 
    listaParticipantes.push (nuevoParticipante);  

    console.log (listaParticipantes); 

    let participantesStringify = JSON.stringify(listaParticipantes); 
    localStorage.setItem("listaParticipantes", participantesStringify); 

    if(listaParticipantes.length == 10){
        btnRegistro.remove(); 
        crearBtnSortear(); 
    }
} 

let btnRegistro = document.getElementById("btnRegistro"); 
btnRegistro.addEventListener("click", registro);   

function sorteo() {
    let ganador = Math.round(Math.random() * listaParticipantes.length); 
    return ganador 
}

function sortearParticipantes (){

    let uno, dos, tres;

    uno = sorteo();

    dos = sorteo();
    while (dos === uno) {
        dos = sorteo();
    }

    tres = sorteo();
    while (tres === uno || tres === dos) {
        tres = sorteo();
    }

    let ganadorUno = listaParticipantes[uno];
    let ganadorDos = listaParticipantes[dos];
    let ganadorTres = listaParticipantes[tres];

    document.body.innerHTML = `<h2>¡Felicidades!</h2>
                               <p>${ganadorUno.nombre} ${ganadorUno.apellido} DNI: ${ganadorUno.dni} Telefono: ${ganadorUno.telefono} gano el primer premio</p>
                               <h2>¡Felicidades!</h2>
                               <p>${ganadorDos.nombre} ${ganadorDos.apellido} DNI: ${ganadorDos.dni} Telefono: ${ganadorDos.telefono} gano el segundo premio</p>
                               <h2>¡Felicidades!</h2>
                               <p>${ganadorTres.nombre} ${ganadorTres.apellido} DNI: ${ganadorTres.dni} Telefono: ${ganadorTres.telefono} gano el tercer premio</p>`; 
                               
    console.log (listaParticipantes);
}


function crearBtnSortear (){
    let btnSortear = document.createElement("button");
    btnSortear.textContent = "Sortear"; 
    botones.append(btnSortear); 
    btnSortear.addEventListener("click", sortearParticipantes);

}
