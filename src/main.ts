import { Plataforma } from "./plataforma.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Actor } from "./actor.js";
import { Episodio } from "./episodio.js";
import { Plan } from "./plan.js";
import { Serie } from "./serie.js";

// 8. crear una nueva serie
const Spiderman = new Serie("direccion imagen spiderman","Spiderman")
// 9. crear una nueva categoria
const categoria1 = new Categoria("Drama")

// 10. crear un nuevo actor
const actor1 = new Actor("imgaen Keira","flaca","Keira Knightley")
const actor2 = new Actor("imagen Jennifer","flaca","Jennifer Anninston")
// 11. crear un nuevo director
const director1 = new Director("imagen Christopher Nolan","alto","Christopher Nolan")
const director2 = new Director("imagen Joe","gordo","Joe Wright")

const episodio1 = new Episodio("La picadura2","acerca de venom",2,Spiderman)
const HBO = new Plataforma("HBO","HBO.com")

// 12. agregar categoria a una serie
Spiderman.agregarCategoria(categoria1)
// 13. agregar actor a una serie
Spiderman.agregarActor(actor1) 
Spiderman.agregarActor(actor2)
// 14 agregar un director a una serie
Spiderman.agregarDirector(director1)
Spiderman.agregarDirector(director2)


Spiderman.agregarPlataforma(HBO)

console.log("1. listado de todas las series: ")
HBO.listarSeries()

console.log("2. detalle de una serie")
Spiderman.detalleSerie()

console.log("3. listado de categorías")
Spiderman.listarCategorias()

console.log("4. listado de directores y actores de una serie")
Spiderman.listarDirectores()
Spiderman.listarActores()

console.log("5. Mostrar detalle de un director y de un actor")
director1.detalleDirector()
actor1.detalleActor()

console.log("6. listado de las plataformas")
Spiderman.listarPlataformas()

console.log("7. detalle de una plataforma")
HBO.detallePlataforma()








