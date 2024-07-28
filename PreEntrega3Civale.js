//Programa para que cada persona ingrese sus datos y elegir un ganador random entre ellos 

let apiKey = "c7ef50d654279538dac0d2efd4a5bcfb"; 

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=BuenosAires&appid=${apiKey}`)
  .then((response) => response.json())
  .then(data => console.log(data));   

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-34.6075682&lon=-58.4370894&appid=${apiKey}&lang=es&units=metric`)
  .then((response) => response.json())
  .then(data => console.log(data));

let listaParticipantes = [];

function registro(){
    let nombre = document.getElementById("nombreParticipante").value; 
    let apellido = document.getElementById("apellidoParticipante").value;
    let dni = document.getElementById("dniParticipante").value;  
    let telefono = document.getElementById("telefonoParticipante").value; 

    let dniDuplicado = listaParticipantes.find(objParticipante => objParticipante.dni == dni);
   
    if (dniDuplicado) {
        Swal.fire({
            title: 'Error!',
            text: 'Este usuario ya esta participando',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        return; 
    }

    class DatosParticipantes { 
        constructor (nombre, apellido, dni, telefono){
            this.nombre = nombre; 
            this.apellido = apellido; 
            this.dni = dni; 
            this.telefono = telefono; 
        }
    } 
       
    if (!nombre || !apellido || !dni || !telefono) {
        Swal.fire({
            title: 'Error!',
            text: 'Hay datos sin completar',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        return; 
    }

    let nuevoParticipante = new DatosParticipantes (nombre, apellido, dni, telefono); 
    listaParticipantes.push (nuevoParticipante);  

    console.log (listaParticipantes); 

    let participantesStringify = JSON.stringify(listaParticipantes); 
    sessionStorage.setItem("listaParticipantes", participantesStringify); 

    let recuperoLista = sessionStorage.getItem("listaParticipantes");
    let lista = JSON.parse(recuperoLista); 

    if(lista.length == 10){
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
