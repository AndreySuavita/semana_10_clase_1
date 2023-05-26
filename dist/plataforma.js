import { Serie } from "./serie.js";
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
    eliminarPlan(plan) {
        const index = this.planes.indexOf(plan);
        if (index > -1) {
            this.planes.splice(index, 1);
        }
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
    listarPlan() {
        console.log(this.planes);
    }
    crearSerie(imagen, nombre) {
        this.series.push(new Serie(imagen, nombre));
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
    buscarSerie(Serie_nombre) {
        const index = this.series.find(serie => serie.nombre == Serie_nombre);
        if (index != undefined) {
            console.log(index);
        }
        else {
            console.log("La serie no se encuentra");
        }
    }
    listarSeries() {
        console.log(this.series);
    }
}
