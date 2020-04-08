const Testimonial = require('../models/Testimonios')
exports.mostrarTestimonios = (req, res) =>{
    Testimonial.findAll()
    .then(testimoniales =>res.render('testimoniales',{
        testimoniales,
        pagina:'Testimonios'
    }))
}
exports.agregarTestimonio = (req, res) =>{
    //Validar que los campos esten completos
    let{nombre, email, mensaje} = req.body;//lee los name de los input  
    let errores = [];
    if(!nombre){
        errores.push({'mensaje':'Agrega tu nombre'})
    }
    if(!email){
        errores.push({'mensaje':'Agrega tu correo'})
    }        
    if(!mensaje){
        errores.push({'mensaje':'Agrega tu mensaje'})
    }
    //Revistar por errores (si hay o no hay)
    if(errores.length > 0){
        //mostrar alert
        res.render('testimoniales',{
            errores,
            nombre,
            email,
            mensaje
        })
    }else{
        //Pasar la info a la base de datos
        Testimonial.create({
            nombre,
            email,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
}