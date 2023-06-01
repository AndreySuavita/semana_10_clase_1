import { Plataforma } from "./plataforma.js";

export class Plan{

    precio:number
    plataforma:Plataforma | undefined


    constructor(precio:number,plataforma?:Plataforma){
        this.precio = precio
        if (plataforma){
            this.plataforma = plataforma
        }else{
            this.plataforma = undefined
        }
    }
}