const Sequalize = require('sequelize')
const db = require('../config/database')

//Definir el model
const Testimonio = db.define('testimoniales',{
    nombre:{
        type: Sequalize.STRING
    },
    email:{
        type: Sequalize.STRING
    },
    mensaje:{
        type: Sequalize.STRING
    },
});
module.exports = Testimonio;