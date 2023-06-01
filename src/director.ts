import { Serie } from "./serie.js";
import { Persona } from "./persona.js";


export class Director extends Persona{

    series:Serie[]
    constructor(fotografia:string,descripcion:string,nombre:string){
        super(fotografia,descripcion,nombre)

        this.series = []

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

}