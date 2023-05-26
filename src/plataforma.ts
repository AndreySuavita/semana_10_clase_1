import { Serie } from "./serie.js";
import { Plan } from "./plan.js";

export class Plataforma{
    nombre:string
    sitio_web:string

    series:Serie[]
    planes:Plan[]

    constructor(nombre:string,sitio_web:string){
        this.nombre = nombre
        this.sitio_web = sitio_web

        this.series = []
        this.planes= []

    }

    crearPlan (precio:number){
        this.planes.push(new Plan(precio,this))
    }
    eliminarPlan(plan:Plan){
        const index = this.planes.indexOf(plan)
        if(index > -1){
            this.planes.splice(index, 1)
        }
    }

    buscarPlan(plan:Plan){
        const index = this.planes.indexOf(plan)
        if(index > -1){
            console.log(this.planes[index])
        }else{
            console.log("El plan no se encuentra")
        }
    }

    listarPlan(){
        console.log(this.planes)
    }

    crearSerie (imagen:string,nombre:string){
        this.series.push(new Serie(imagen,nombre))
    }
    agregarSerie (serie:Serie){
        this.series.push(serie)
    }
    eliminarSerie(serie:Serie){
        const index = this.series.indexOf(serie)
        if(index > -1){
            this.series.splice(index, 1)
        }
    }
    buscarSerie(Serie_nombre:string){
        const index = this.series.find(serie => serie.nombre == Serie_nombre)
        if (index != undefined){
            console.log(index)
        }else{
            console.log("La serie no se encuentra")
        }
    }

    listarSeries(){
        console.log(this.series)
    }
}