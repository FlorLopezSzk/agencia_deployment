const express = require('express');
const router = express.Router();

//Importar controladores
const nosotrosControlador = require('../controllers/nosotros')
const inicioControlador = require('../controllers/home')
const viajesControlador = require('../controllers/viajes')
const testimonialesControlador = require('../controllers/testimoniales')

module.exports = function(){

    router.get('/',inicioControlador.consultasInicio)
    router.get('/nosotros',nosotrosControlador.infoNosotros)
    router.get('/viajes',viajesControlador.mostrarViajes)
    router.get('/viajes/:id',viajesControlador.mostrarViaje)    
    router.get('/testimoniales',testimonialesControlador.mostrarTestimonios)
    //Cuando se llena el formulario
    router.post('/testimoniales',testimonialesControlador.agregarTestimonio)
    return router;
}