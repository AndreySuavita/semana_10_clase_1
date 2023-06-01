import { Plataforma } from "./plataforma.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Actor } from "./actor.js";
import { Episodio } from "./episodio.js";
import { Plan } from "./plan.js";
import { Serie } from "./serie.js";

const episodio1 = new Episodio("La picadura2","acerca de venom",2)
const serie1 = new Serie("asd","Spiderman",episodio1)
episodio1.agregarSerie(serie1)
serie1.crearEpisodio("La picadura","acerca de el origen de los poderes de spiderman",2)
const plataforma1 = new Plataforma("HBO","HBO.com")
plataforma1.crearPlan(15000)
serie1.crearDirector("asdd","alto","Christopher Nolan")
serie1.crearActor("fdsad","flaca","Keira Knightley")


const actor1 = new Actor("fdsafasd","flaca","Jennifer Anninston")
const director1 = new Director("fdsafsasd","gordo","Joe Wright")
const categoria1 = new Categoria("Drama")

serie1.agregarActor(actor1)
serie1.agregarDirector(director1)
serie1.agregarCategoria(categoria1)

actor1.agregarSerie(serie1)
director1.agregarSerie(serie1)
categoria1.agregarSerie(serie1)

serie1.listarCategorias()
serie1.listarActores()
serie1.listarDirectores()

plataforma1.agregarSerie(serie1)
plataforma1.listarSeries()

plataforma1.detalleSerie("Spiderman")
serie1.detalleActor("Keira Knightley")
serie1.detalleDirector("Christopher Nolan")





