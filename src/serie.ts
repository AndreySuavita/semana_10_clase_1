import { Plataforma } from "./plataforma.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Actor } from "./actor.js";
import { Episodio } from "./episodio.js";

export class Serie {
    imagen:string
    nombre:string


    plataformas: Plataforma[]
    categorias:Categoria[]
    directores:Director[]
    actores:Actor[]
    episodios:Episodio[]

    constructor(imagen:string, nombre:string){
        this.imagen = imagen
        this.nombre = nombre

        this.plataformas = []
        this.categorias = []
        this.directores = []
        this.actores = []

        this.episodios = []
        
    }

    detalleSerie(){
        console.log("[+] Detalle de la Serie")
        console.log("[-] Nombre de la Serie: "+this.nombre)
        console.log("[-] Direccion imagen: "+this.imagen)
    }
    agregarDirector (director:Director){
        this.directores.push(director)
        director.agregarSerie(this)
    }
    
    
    listarDirectores(){
        console.log("Lista de Directores:")
        this.directores.forEach((value) => {
            console.log("[+] "+value.nombre)
        })
    }

    agregarActor (actor:Actor){
        this.actores.push(actor)
        actor.agregarSerie(this)
    }



    listarActores(){
        console.log("Lista de Actores:")
        this.actores.forEach((value) => {
            console.log("[+] "+value.nombre)
        })
    }

    agregarEpisodio (episodio:Episodio){
        this.episodios.push(episodio)
    }

    agregarCategoria (categoria:Categoria){
        this.categorias.push(categoria)
        categoria.agregarSerie(this)
    }

    listarCategorias(){
        console.log("Lista de Categorias:")
        this.categorias.forEach((value) => {
            console.log("[+] "+value.nombre)
        })
    }

    agregarPlataforma (plataforma:Plataforma){
        this.plataformas.push(plataforma)
        plataforma.agregarSerie(this)
    }



    listarPlataformas(){
        console.log("Lista de plataformas:")
        this.plataformas.forEach((value) => {
            console.log("[+] "+value.nombre)
        })
    }
}