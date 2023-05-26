import { Plataforma } from "./plataforma.js";

export class Plan{
    precio:number

    plataforma:Plataforma

    constructor(precio:number,plataforma:Plataforma){
        this.precio = precio

        this.plataforma = plataforma

    }
}