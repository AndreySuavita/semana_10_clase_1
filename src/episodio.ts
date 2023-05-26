import { Serie } from "./serie.js";

export class Episodio{
    nombre:string
    resumen:string
    duracion:number

    serie:Serie

    constructor(nombre:string,resumen:string,duracion:number,serie:Serie){
        this.nombre = nombre
        this.resumen = resumen
        this.duracion = duracion

        this.serie = serie

    }
    
}