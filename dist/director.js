import { Serie } from "./serie.js";
import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(fotografia, descripcion, nombre) {
        super(fotografia, descripcion, nombre);
        this.series = [];
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
