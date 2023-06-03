import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(fotografia, descripcion, nombre) {
        super(fotografia, descripcion, nombre);
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
    detalleActor() {
        console.log("[+] Detalle del actor");
        console.log("[-] Nombre del actor: " + this.nombre);
        console.log("[-] Descripción del actor: " + this.descripcion);
        console.log("[-] Direccioón fotografia: " + this.fotografia);
    }
}
