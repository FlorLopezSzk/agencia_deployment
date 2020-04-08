const Sequalize = require('sequelize')
const db = require('../config/database')

//Definir el model
const Viaje = db.define('viaje',{
    titulo:{
        type: Sequalize.STRING
    },
    precio:{
        type: Sequalize.STRING
    },
    fechaIda: {
        type: Sequalize.DATE
    },
    fechaVuelta:{
        type: Sequalize.DATE
    },
    imagen:{
        type: Sequalize.STRING
    },
    descripcion:{
        type: Sequalize.STRING
    },
    disponible:{
        type: Sequalize.STRING
    }
});
module.exports = Viaje;