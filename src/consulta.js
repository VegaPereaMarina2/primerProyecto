/*
Todos los documentos de la colección juegos
*/
db.juegos.find( {} )


/*
Todos los documentos de la colección juegos presentados con otra estructura
*/
db.juegos.find( {} ).pretty()


/*
El número de documentos de la colección juegos
*/
db.juegos.find( {} ).count()


/*
Los que tienen precio = 39.95 y modo = "Un jugador"
Hecho con un and implícito
*/
db.juegos.find({precio: 39.95, modo: "Un jugador"}).pretty()


/*
Los que tienen precio = 39.95 y modo = "Un jugador"
Hecho con un and explícito
*/
//{ $and: [ { <expresion1>}, {<expresion2>},..., { <expresionN> }]}
db.juegos.find(
    { $and: [ {precio: 39.95, modo: "Un jugador"}] })
    pretty()


/*
Los que tienen precio > 10 y < 20
No funciona con el mismo campo el and implicito
*/
db.juegos.find({ precio: {$gt: 20}, precio: {$lt: 10}}).pretty()


/*
Los que tienen precio > 10 y < 20
Con and explícito, con el operador $and
*/
db.juegos.find({$and: [ precio, {$gt: 20}, precio, {$lt: 10}]}).pretty()


/*
Los que tienen precio > 10 y < 20
(La coma funciona como $and)
Con and implícito pero sin repetir el nombre del campo qty
*/
db.juegos.find({ precio: {$gt: 20, $lt: 10}}).pretty()

//todos los juegos creados a partir del "2018-3-26" y su modo sea "multijugador" 
db.juegos.find( {$and: [ {fechaLanzamiento: {$gte: new Date("2018-3-26")}}, {modo:"multijugador"}]} )



