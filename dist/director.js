import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(fotografia, descripcion, nombre) {
        super(fotografia, descripcion, nombre);
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
    detalleDirector() {
        console.log("[+] Detalle del Director");
        console.log("[-] Nombre del director: " + this.nombre);
        console.log("[-] Descripción: " + this.descripcion);
        console.log("[-] Dirección de la fotografía: " + this.fotografia);
    }
}
