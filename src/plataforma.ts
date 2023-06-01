import { Serie } from "./serie.js";
import { Plan } from "./plan.js";
import { Episodio } from "./episodio.js";

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
    buscarPlan(plan:Plan){
        const index = this.planes.indexOf(plan)
        if(index > -1){
            console.log(this.planes[index])
        }else{
            console.log("El plan no se encuentra")
        }
    }
    eliminarPlan(plan:Plan){
        const index = this.planes.indexOf(plan)
        if(index > -1){
            this.planes.splice(index, 1)
        }
    }

    listarPlanes(){
        console.log(this.planes)
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
    detalleSerie(Serie_nombre:string){
        const index = this.series.find(serie => serie.nombre == Serie_nombre)
        if (index != undefined){
            //console.log(index)
            console.log("Detalle de la serie")
            console.log("Nombre de la serie: "+index.nombre)
            console.log("Direccion de la imagen: "+index.imagen)

            this.listarSeries()
        }else{
            console.log("La serie no se encuentra")
        }
    }

    listarSeries(){
        console.log("Lista de Series:")
        this.series.forEach((value) => {
            console.log("[+] "+value.nombre)
        })
    }
}