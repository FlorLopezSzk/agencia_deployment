//iportar express
const express = require('express');
//importar rutas
const routes = require('./routes')
//importar config
const configs = require('./config')
//bodyParser:
const bodyParser = require('body-parser')
const path = require('path');
//BDD
const db = require('./config/database')

require('dotenv').config({path: 'variables.env'})
//Configurar express
const app =express(); //donde vamos habilitando la configuracion
//Validar si estamos en desarrollo o produccion
const config = configs[app.get('env')]//env es una variable que define el ambiente
//creamos la variable para el sitio web
app.locals.titulo = config.nombreSitio;
//habilitar pug
app.set('view engine', 'pug');
//Agregar las vistas
app.set('views', path.join(__dirname, './views'))
//Cargar una carpeta estatica llamada public
app.use(express.static('public'))
//Nuestra el year actual
app.use((req, res, next)=>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear() ; //crea una variable local
    res.locals.ruta = req.path; //trae la ruta actual
    return next();
})
//Antes de cargar las rutas ejecutamo bodyParser
app.use(bodyParser.urlencoded({
    extended:true
}))

//cargar rutas
app.use('/',routes());

/*
    Puerto y host para la app
*/
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3100;

app.listen(port, host, ()=>{
    console.log('Funciona el servidor')

})