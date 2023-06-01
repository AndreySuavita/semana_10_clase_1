export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.series = [];
    }
    eliminarSerie(serie) {
        const index = this.series.indexOf(serie);
        if (index > -1) {
            this.series.splice(index, 1);
        }
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
