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

    constructor(nombre,foto,vida,fotoCara,x,y,ataques){

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
        this.ataques = [];
        
        
        
    }

    pintarPersonaje(){

        lienzo.drawImage(this.fotoCara,this.x,this.y,this.ancho,this.alto)

    }


    
    
}

Hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png",5,"./assets/hipodoge.png",50,50)
Capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png",5,"./assets/capipepo.png",50,50)
Ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5,"./assets/ratigueya.png",50,50)

HipodogeEnemigo = new Mokepon("HipodogeEnemigo","./assets/mokepons_mokepon_hipodoge_attack.png",5,"./assets/hipodoge.png",mapa.width-100,50)
CapipepoEnemigo = new Mokepon("CapipepoEnemigo","./assets/mokepons_mokepon_capipepo_attack.png",5,"./assets/capipepo.png",50,mapa.height-100)
RatigueyaEnemigo = new Mokepon("RatigueyaEnemigo","./assets/mokepons_mokepon_ratigueya_attack.png",5,"./assets/ratigueya.png",mapa.width-100,mapa.height-100)

let mokeponesEnemigos = []
mokeponesEnemigos.push(HipodogeEnemigo,CapipepoEnemigo,RatigueyaEnemigo)



mokepones.push(Hipodoge,Capipepo,Ratigueya)
console.log(mokepones)


Hipodoge.ataques.push(


    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '🔥' , id:"ataque-fuego" },


)

HipodogeEnemigo.ataques.push(


    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '🔥' , id:"ataque-fuego" },


)

Capipepo.ataques.push(


    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '🔥' , id:"ataque-fuego" },


)


CapipepoEnemigo.ataques.push(


    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '💧' , id:"ataque-agua" },
    {nombre: '🔥' , id:"ataque-fuego" },


)


Ratigueya.ataques.push(


    {nombre: '🔥' , id:"ataque-fuego" },
    {nombre: '🔥' , id:"ataque-fuego" },
    {nombre: '🔥' , id:"ataque-fuego" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '💧' , id:"ataque-agua" },


)

RatigueyaEnemigo.ataques.push(


    {nombre: '🔥' , id:"ataque-fuego" },
    {nombre: '🔥' , id:"ataque-fuego" },
    {nombre: '🔥' , id:"ataque-fuego" },
    {nombre: '🌱' , id:"ataque-tierra" },
    {nombre: '💧' , id:"ataque-agua" },


)


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

    let intervalo = setInterval(pintarCanvas,50)
    iniciarMapa()
}        


function iniciarMapa(){

    pintarCanvas()




}

function pintarEnemigos(){

    mokeponesEnemigos.forEach((mokeponEnemigo) => {
        mokeponEnemigo.pintarPersonaje()
    });


}
        
function pintarCanvas(){

    lienzo.clearRect(0,0,mapa.width,mapa.height)
    
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY


    mascotaJugadorObjeto.pintarPersonaje()

    pintarEnemigos()
    if (mascotaJugadorObjeto.velocidadX !==0 || mascotaJugadorObjeto.velocidadY !==0 ){revisarColision()}
}



function moverDerecha(){

    mascotaJugadorObjeto.velocidadX = 5;

}


function moverIzquierda(){

    mascotaJugadorObjeto.velocidadX = - 5


}

function moverArriba(){

    mascotaJugadorObjeto.velocidadY = - 5



}


function moverAbajo(){

    mascotaJugadorObjeto.velocidadY = 5


}


function detenerMovimiento(){


    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;


}


window.addEventListener('keydown',movimientoTeclado)
window.addEventListener('keyup',detenerMovimiento)

function movimientoTeclado(event){


    switch (event.key) {
        
        
        case 'ArrowUp':
            moverArriba();
        break;

        case 'ArrowDown':
            moverAbajo()
        break;

        case 'ArrowRight':
            moverDerecha()
        break;

        case 'ArrowLeft':
            moverIzquierda()
        break;

    
        default:
            break;
    }



}


function revisarColision(){

    let arribaEnemigo
    let abajoEnemigo
    let izquierdaEnemigo
    let derechaEnemigo

    let arribaJugador = mascotaJugadorObjeto.y
    let abajoJugador = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    let izquierdaJugador = mascotaJugadorObjeto.x
    let derechaJugador = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho




    mokeponesEnemigos.forEach((mokeponEnemigo) => {
        
        arribaEnemigo = mokeponEnemigo.y
        abajoEnemigo = mokeponEnemigo.y + mokeponEnemigo.alto
        izquierdaEnemigo = mokeponEnemigo.x 
        derechaEnemigo = mokeponEnemigo.x+ mokeponEnemigo.ancho

        if(arribaJugador>abajoEnemigo || abajoJugador<arribaEnemigo || izquierdaJugador>derechaEnemigo || derechaJugador<izquierdaEnemigo )
        
            {}

        else {alert("Hay colision");detenerMovimiento();acomodarSecciones()}


    });





}


let seccionCombate = document.getElementById("seccion-combate")
seccionCombate.style.display = 'none'



function acomodarSecciones(){

    sectionMapa.style.display = 'none'
    seccionCombate.style.display = 'flex'
    crearBotonesAtaque()

}




let divBotonesAtaque 
let botonAtaqueIndividual




function crearBotonesAtaque(){


    divBotonesAtaque = document.createElement('div')
    divBotonesAtaque.setAttribute("id" , "divBotonesAtaque")
    seccionCombate.appendChild(divBotonesAtaque)

    mascotaJugadorObjeto.ataques.forEach((ataque) => {

        botonAtaqueIndividual = 
        
            `
                <button id = "${ataque.id}">${ataque.nombre}</button>
            
            
            
            
            
            `






    });



}







