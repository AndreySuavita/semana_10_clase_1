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

    agregarPlan (plan:Plan){
        this.planes.push(plan)
        plan.agregarPlataforma(this)
    }

    agregarSerie (serie:Serie){
        this.series.push(serie)
    }

    listarSeries(){
        console.log("Lista de Series:")
        this.series.forEach((value) => {
            console.log("[+] "+value.nombre)
        })
    }

    detallePlataforma(){
        console.log("[+] Detalle de la plataforma")
        console.log("[-] Nombre de la plataforma: "+this.nombre)
        console.log("[-] Sitio web: "+this.sitio_web)
    }
}