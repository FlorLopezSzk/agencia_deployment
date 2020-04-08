//Importar el model
const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimonios')

exports.consultasInicio = (req, res) =>{
    const promises = [];
    promises.push(
        Viaje.findAll({
            limit:3
        }),//Trae todos los datos de la tabla de la BDD
        Testimonial.findAll({
            limit:3
        })//Trae todos los datos de la tabla de la BDD
    )
    //Pasar el promise y ejecutarlo
    const resultado = Promise.all(promises)


    resultado.then(resultado => res.render('index',{ //VIAJES: el primero son todos los viajes, el segundo son las vistas
        pagina:'Proximos viajes',
        viajes: resultado[0], //Pasa los viajes a la vista
        clase: 'home',
        testimoniales : resultado[1]
    }))
    .catch(error=> console.log(error))
}