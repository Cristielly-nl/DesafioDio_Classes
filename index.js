class heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
     
    atacar() {

        let ataque
        if (this.tipoHeroi === "mago" ) {
            ataque = "magia"
       } else if(this.tipoHeroi === "guerreiro"){
            ataque = "Espada"
       } else if (this.tipoHeroi === "monge"){
            ataque = "Artes Marciais"
       } else if (this.tipoHeroi === "ninja"){
            ataque = "shuriken"
       }
       
    console.log(`O ${this.tipoHeroi} atacou usando ${ataque} `)
    }
}

let heroi1 = new heroi("Pedro", "35", "mago")
let heroi2 = new heroi("Marcos", "46", "guerreiro")
let heroi3 = new heroi("Thiago", "48", "monge")
let heroi4 = new heroi("Daniel", "26", "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()



