import { Plan } from "./plan.js";
export class Plataforma {
    constructor(nombre, sitio_web) {
        this.nombre = nombre;
        this.sitio_web = sitio_web;
        this.series = [];
        this.planes = [];
    }
    crearPlan(precio) {
        this.planes.push(new Plan(precio, this));
    }
    buscarPlan(plan) {
        const index = this.planes.indexOf(plan);
        if (index > -1) {
            console.log(this.planes[index]);
        }
        else {
            console.log("El plan no se encuentra");
        }
    }
    eliminarPlan(plan) {
        const index = this.planes.indexOf(plan);
        if (index > -1) {
            this.planes.splice(index, 1);
        }
    }
    listarPlanes() {
        console.log(this.planes);
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
    eliminarSerie(serie) {
        const index = this.series.indexOf(serie);
        if (index > -1) {
            this.series.splice(index, 1);
        }
    }
    detalleSerie(Serie_nombre) {
        const index = this.series.find(serie => serie.nombre == Serie_nombre);
        if (index != undefined) {
            //console.log(index)
            console.log("Detalle de la serie");
            console.log("Nombre de la serie: " + index.nombre);
            console.log("Direccion de la imagen: " + index.imagen);
            this.listarSeries();
        }
        else {
            console.log("La serie no se encuentra");
        }
    }
    listarSeries() {
        console.log("Lista de Series:");
        this.series.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
}
