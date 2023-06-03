import { Serie } from "./serie.js";
import { Persona } from "./persona.js";


export class Actor extends Persona{

    series:Serie[]
    constructor(fotografia:string,descripcion:string,nombre:string){
        super(fotografia,descripcion,nombre)

        this.series = []
    }

    agregarSerie (serie:Serie){
        this.series.push(serie)
    }

    detalleActor(){

        console.log("[+] Detalle del actor")
        console.log("[-] Nombre del actor: "+this.nombre)
        console.log("[-] Descripción del actor: "+this.descripcion)
        console.log("[-] Direccioón fotografia: "+this.fotografia)

    }
}