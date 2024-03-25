window.addEventListener('load',iniciarJuego)



//VARIABLES DE LA SECCION DE SELECCIONAR MASCOTA


let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let tarjetaIndividual
let divTarjetas = document.getElementById("div-tarjetas")
let botonContinuar = document.getElementById("boton-continuar")
botonContinuar.addEventListener('click', seleccionarMascotaJugador)
let mascotaJugador = null
let arregloDeInputs = []





// VARIABLES DE LA SECCION DEL MAPA


let sectionMapa = document.getElementById("seccion-mapa")
sectionMapa.style.display = 'none'
let mascotaJugadorObjeto 

let mapa = document.getElementById("mapita")
let lienzo = mapa.getContext("2d")



// VARIABLES QUE USO EN TODOS LADOS 


let mokepones = []


class Mokepon{

    constructor(nombre,foto,vida,fotoCara,x,y){

        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;

        this.ancho =50;
        this.alto =50;

        this.x = x;
        this.y = y;

        this.fotoCara = new Image()
        this.fotoCara.src = fotoCara;

        this.velocidadX = 0;
        this.velocidadY = 0;

        
        
        
    }

    pintarPersonaje(){

        lienzo.drawImage(this.fotoCara,this.x,this.y,this.ancho,this.alto)

    }


    
    
}

Hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png",5,"./assets/hipodoge.png",50,50)
Capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png",5,"./assets/capipepo.png",50,50)
Ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5,"./assets/ratigueya.png",50,50)




// HipodogeEnemigo = new Mokepon ("Enemigo","",5,"",,)
// CapipepoEnemigo = new Mokepon ("Enemigo","",5,"",,)
// RatigueyaEnemigo = new Mokepon ("Enemigo","",5,"",,)



mokepones.push(Hipodoge,Capipepo,Ratigueya)
console.log(mokepones)



function iniciarJuego(){
    
    mokepones.forEach((mokepon) => {
        
        tarjetaIndividual =
        
        `
        <input type = "radio" , name = "mascotas" , id = "${mokepon.nombre}" class = "inputsito" >
        <label for = "${mokepon.nombre}" class ="tarjeta-mokepon">
        
        ${mokepon.nombre}
        <img src = "${mokepon.foto}" class = "imagen-mokepon" />
        
        
        </label>
        
        
        `
        
        divTarjetas.innerHTML += tarjetaIndividual
        
    });
    
    
    arregloDeInputs = document.querySelectorAll(".inputsito")
    console.log(arregloDeInputs)
    
}
    

function seleccionarMascotaJugador(){
    
    arregloDeInputs.forEach((inputsito) => {
        
        if(inputsito.checked) 
        {mascotaJugador = inputsito.id
            console.log(mascotaJugador)
            alert(`Usted eligio a ${mascotaJugador}`)
            sectionSeleccionarMascota.style.display = 'none'
            sectionMapa.style.display = 'flex'}
        });
        
        if (mascotaJugador == null ){
            
            alert("Seleccione un personaje por favor")
            
        }


    mokepones.forEach((mokepon) => {
        if(mascotaJugador == mokepon.nombre)

            {mascotaJugadorObjeto = mokepon}

    });


    console.log (mascotaJugadorObjeto)    

    pintarCanvas(mascotaJugadorObjeto)

}        
       
        
        
function pintarCanvas(mascotaJugadorObjeto){

    mascotaJugadorObjeto.pintarPersonaje()

}



function moverDerecha(){

    lienzo.clearRect(0,0,mapa.width,mapa.height)
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + 5

    pintarCanvas(mascotaJugadorObjeto)


}


function moverIzquierda(){

    lienzo.clearRect(0,0,mapa.width,mapa.height)
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x - 5

    pintarCanvas(mascotaJugadorObjeto)


}

function moverArriba(){

    lienzo.clearRect(0,0,mapa.width,mapa.height)
    mascotaJugadorObjeto. y= mascotaJugadorObjeto.y - 5

    pintarCanvas(mascotaJugadorObjeto)


}


function moverAbajo(){

    lienzo.clearRect(0,0,mapa.width,mapa.height)
    mascotaJugadorObjeto. y= mascotaJugadorObjeto.y + 5

    pintarCanvas(mascotaJugadorObjeto)


}































