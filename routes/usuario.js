var express = require('express');
var router = express.Router();

var Usuario = require('../models/usuario');

/* GET users listing. */
router.get('/:id', function(req, res) {
    
     Usuario.findById(req.user._id, function(err,usuario){
        if(err){
             res.status(500).json({succes: false, message: 'Usuario nao encontrado'});
        }
         
        return res.json(usuario);
     });
    
});

router.route('/')
    .post(function (req, res) {
        console.log(req.body);  
        var usuario = req.body; 
        
        Usuario.create(usuario, function(err, usuario){
            if(err){
                res.status(500).json({succes: false, message: 'Erro ao cadastrar usuario'});
            }    
            
            return res.json(usuario);
        });

    });

module.exports = router;


