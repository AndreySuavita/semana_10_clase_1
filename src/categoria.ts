import { Serie } from "./serie.js";


export class Categoria{
    nombre:string

    series:Serie[]

    constructor(nombre:string){
        this.nombre = nombre
        this.series = []

    }

    eliminarSerie(serie:Serie){
        const index = this.series.indexOf(serie)
        if(index > -1){
            this.series.splice(index, 1)
        }
    }
    agregarSerie (serie:Serie){
        this.series.push(serie)
    }

}