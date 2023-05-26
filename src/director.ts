import { Serie } from "./serie.js";
import { Persona } from "./persona.js";

export class Director extends Persona{

    series:Serie[]
    constructor(fotografia:string,descripcion:string,nombre:string){
        super(fotografia,descripcion,nombre)

        this.series = []

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