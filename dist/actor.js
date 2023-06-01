import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(fotografia, descripcion, nombre) {
        super(fotografia, descripcion, nombre);
        this.series = [];
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
}
