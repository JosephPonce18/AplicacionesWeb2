// Definir una función con Callback que reciba como parámetro su arreglo de elementos
// y un ID y devuelva el objeto correspondiente, luego mostrarlo por consola usando el
// callback.

// Definimos un arreglo de usuarios
const  Foro = require("./Entidades");


// Función para buscar usuario por ID usando callback
function buscarPorId(id, callback) {

    const ForoEncontrado = Foro.find((element) => { return element.Id === id })
    if (!ForoEncontrado) {
        return callback("No se ha encontrado el usuario");
    }
    return callback(null, ForoEncontrado);
}
// Ejemplo de uso de la función 'buscarPorId'
buscarPorId(1, (error, foro) => {
    if (error) {
        console.log("Ha ocurrido un error")
    }
    console.log(foro);
});

