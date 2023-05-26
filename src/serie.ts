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
    crearDirector (fotografia:string,descripcion:string,nombre:string){
        this.directores.push(new Director(fotografia,descripcion,nombre))
    }
    agregarDirector (director:Director){
        this.directores.push(director)
    }
    eliminarDirector(director:Director){
        const index = this.directores.indexOf(director)
        if(index > -1){
            this.directores.splice(index, 1)
        }
    }
    
    buscarDirector(director_nombre:string){
        const index = this.directores.find(director => director.nombre == director_nombre)
        if (index != undefined){
            console.log(index)
        }else{
            console.log("El director no se encuentra")
        }
    }
    
    listarDirectores(){
        console.log(this.directores)
    }

    crearActor (fotografia:string,descripcion:string,nombre:string){
        this.actores.push(new Actor(fotografia,descripcion,nombre))
    }
    agregarActor (actor:Actor){
        this.actores.push(actor)
    }
    eliminarActor(actor:Actor){
        const index = this.actores.indexOf(actor)
        if(index > -1){
            this.actores.splice(index, 1)
        }
    }

    buscarActor(Actor_nombre:string){
        const index = this.actores.find(actor => actor.nombre == Actor_nombre)
        if (index != undefined){
            console.log(index)
        }else{
            console.log("El actor no se encuentra")
        }
    }

    listarActores(){
        console.log(this.actores)
    }

    crearEpisodio (nombre:string,resumen:string,duracion:number,serie:Serie){
        this.episodios.push(new Episodio(nombre,resumen,duracion,this))
    }
    eliminarEpisodio(episodio:Episodio){
        const index = this.episodios.indexOf(episodio)
        if(index > -1){
            this.episodios.splice(index, 1)
        }
    }

    buscarEpisodio(Episodio_nombre:string){
        const index = this.episodios.find(episodio => episodio.nombre == Episodio_nombre)
        if (index != undefined){
            console.log(index)
        }else{
            console.log("El episodio no se encuentra")
        }
    }

    listarEpisodios(){
        console.log(this.episodios)
    }
    
    crearCategoria (nombre:string){
        this.categorias.push(new Categoria(nombre))
    }
    agregarCategoria (categoria:Categoria){
        this.categorias.push(categoria)
    }
    eliminarCategoria(categoria:Categoria){
        const index = this.categorias.indexOf(categoria)
        if(index > -1){
            this.categorias.splice(index, 1)
        }
    }

    buscarCategoria(Categoria_nombre:string){
        const index = this.categorias.find(categoria => categoria.nombre == Categoria_nombre)
        if (index != undefined){
            console.log(index)
        }else{
            console.log("La categoría no se encuentra")
        }
    }

    listarCategorias(){
        console.log(this.categorias)
    }

    crearPlataforma (nombre:string,sitio_web:string){
        this.plataformas.push(new Plataforma(nombre,sitio_web))
    }
    eliminarPlataforma(plataforma:Plataforma){
        const index = this.plataformas.indexOf(plataforma)
        if(index > -1){
            this.plataformas.splice(index, 1)
        }
    }

    buscarPlataforma(Plataforma_nombre:string){
        const index = this.plataformas.find(plataforma => plataforma.nombre == Plataforma_nombre)
        if (index != undefined){
            console.log(index)
        }else{
            console.log("La plataforma no se encuentra")
        }
    }

    listarPlataformas(){
        console.log(this.plataformas)
    }
}