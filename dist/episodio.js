export class Episodio {
    constructor(nombre, resumen, duracion, serie) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        if (serie) {
            this.serie = serie;
        }
        else {
            this.serie = undefined;
        }
    }
    agregarSerie(serie) {
        this.serie = serie;
    }
}
