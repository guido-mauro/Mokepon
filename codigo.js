window.addEventListener('load',iniciarJuego)


let mokepones = []
let tarjetaIndividual
let divTarjetas = document.getElementById("div-tarjetas")

class Mokepon{

    constructor(nombre,foto,vida){

        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;

    }


}

Hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png",5)
Capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png",5)
Ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png",5)


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

}











