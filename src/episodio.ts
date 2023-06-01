import { Serie } from "./serie.js";

export class Episodio{
    nombre:string
    resumen:string
    duracion:number

    serie:Serie | undefined;

    constructor(nombre:string,resumen:string,duracion:number,serie?:Serie|undefined){
        this.nombre = nombre
        this.resumen = resumen
        this.duracion = duracion

        if (serie){
            this.serie = serie
        }else{
            this.serie = undefined
        }


    }
    
    agregarSerie (serie:Serie){
        this.serie = serie
    }

}