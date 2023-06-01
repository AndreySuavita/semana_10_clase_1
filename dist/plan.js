export class Plan {
    constructor(precio, plataforma) {
        this.precio = precio;
        if (plataforma) {
            this.plataforma = plataforma;
        }
        else {
            this.plataforma = undefined;
        }
    }
}
