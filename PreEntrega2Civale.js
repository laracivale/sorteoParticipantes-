//Programa para que cada persona ingrese sus datos y elegir un ganador random entre ellos 

class NombresArray { 
    constructor (nombre, apellido, telefono){
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.telefono = telefono; 
    }
}

function sortearNombres() {
    let ganador = Math.round(Math.random() * 9); 
    return ganador
}

let sorteo = prompt ("Por favor ingrese `iniciar sorteo´ para comenzar o `salir´");  
sorteo = sorteo.toLowerCase();  

while (sorteo == "iniciar sorteo"){

let listaNombres = []; 

for (let i = 0; i < 10 ; i ++){ 
    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");
    let telefono = prompt ("Ingrese su numero de telefono");

    let nuevoNombre = new NombresArray (nombre, apellido, telefono); 
    listaNombres.push (nuevoNombre); 
}

console.log ("El sorteo para ganar el viaje a Brasil se realizara entre las siguientes 10 personas: ", listaNombres); 

console.log ("Felicidades ", listaNombres[sortearNombres()], " gano el viaje a Brasil!");

sorteo = prompt("Ingrese `iniciar sorteo´ para realizar un nuevo sorteo o `salir´");
sorteo = sorteo.toLowerCase(); 

}   