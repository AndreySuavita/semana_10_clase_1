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
    detalleDirector(){
        console.log("[+] Detalle del Director")
        console.log("[-] Nombre del director: "+this.nombre)
        console.log("[-] Descripción: "+this.descripcion)
        console.log("[-] Dirección de la fotografía: "+this.fotografia)

    }
}

