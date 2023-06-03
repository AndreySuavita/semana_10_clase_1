export class Serie {
    constructor(imagen, nombre) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.plataformas = [];
        this.categorias = [];
        this.directores = [];
        this.actores = [];
        this.episodios = [];
    }
    detalleSerie() {
        console.log("[+] Detalle de la Serie");
        console.log("[-] Nombre de la Serie: " + this.nombre);
        console.log("[-] Direccion imagen: " + this.imagen);
    }
    agregarDirector(director) {
        this.directores.push(director);
        director.agregarSerie(this);
    }
    listarDirectores() {
        console.log("Lista de Directores:");
        this.directores.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
    agregarActor(actor) {
        this.actores.push(actor);
        actor.agregarSerie(this);
    }
    listarActores() {
        console.log("Lista de Actores:");
        this.actores.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
        categoria.agregarSerie(this);
    }
    listarCategorias() {
        console.log("Lista de Categorias:");
        this.categorias.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
        plataforma.agregarSerie(this);
    }
    listarPlataformas() {
        console.log("Lista de plataformas:");
        this.plataformas.forEach((value) => {
            console.log("[+] " + value.nombre);
        });
    }
}
