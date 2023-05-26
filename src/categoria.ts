import { Serie } from "./serie.js";

export class Categoria{
    nombre:string

    series:Serie[]

    constructor(nombre:string){
        this.nombre = nombre
        this.series = []

    }
    crearSerie (imagen:string,nombre:string){
        this.series.push(new Serie(imagen,nombre))
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