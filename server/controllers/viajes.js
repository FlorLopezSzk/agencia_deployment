const Viaje = require('../models/Viajes')

/*
exports.mostrarViajes = (req, res) =>{
    Viaje.findAll()//Trae todos los datos de la tabla de la BDD
     .then(viajes => res.render('viajes',{ //VIAJES: el primero son todos los viajes, el segundo son las vistas
         pagina:'Proximos viajes',
         viajes //Pasa los viajes a la vista
     }))
     .catch(error=> console.log(error))
 }
*/
exports.mostrarViajes = async(req, res) =>{
   const viajes = await Viaje.findAll()//Trae todos los datos de la tabla de la BDD
     res.render('viajes',{ //VIAJES: el primero son todos los viajes, el segundo son las vistas
         pagina:'Proximos viajes',
         viajes //Pasa los viajes a la vista
     }
    )
}

exports.mostrarViaje = (req, res) =>{
    Viaje.findByPk(req.params.id)   
        .then(viaje => res.render('viaje',{
            viaje
        }))
        .catch(error=> console.log(error))
}

 