export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
