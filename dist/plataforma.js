export class Plataforma {
    constructor(nombre, sitio_web) {
        this.nombre = nombre;
        this.sitio_web = sitio_web;
        this.series = [];
        this.planes = [];
    }
    agregarPlan(plan) {
        this.planes.push(plan);
        plan.agregarPlataforma(this);
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
    listarSeries() {
        console.log("Lista de Series:");
        this.series.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
    detallePlataforma() {
        console.log("[+] Detalle de la plataforma");
        console.log("[-] Nombre de la plataforma: " + this.nombre);
        console.log("[-] Sitio web: " + this.sitio_web);
    }
}
