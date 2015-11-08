var express = require('express');
var router = express.Router();

var Usuario = require('../models/usuario');

/* GET users listing. */
router.get('/:id', function(req, res) {
    
     Usuario.findById(req.user._id, function(err,usuario){
        if(err){
             res.status(500).json({'succes': false, 'message': 'Usuario nao encontrado'});
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
                res.status(500).json({'succes': false, 'message': 'Erro ao cadastrar usuario'});
            }    
            
            return res.json(usuario);
        });
        console.log('aqui');
    });

router.route('/login')
    .post(function(req, res){
    var novoUsuario = req.body;
    Usuario.findOne({id_facebook : novoUsuario.id_facebook}, function(err, usuarioEncontrado){
        if(err){
            console.error(err);
            return res.status(500).json('Desculpe, erro interno');
        }else if(usuarioEncontrado === null){
            Usuario.create(novoUsuario, function(err, usuarioCriado){
                if(err){
                    return res.status(500).json({'success': false, 'message': 'Desculpe, usuário não pode ser salvo'});
                }
                else{
                    return res.status(201).json(usuarioCriado);
                }
            });
        }else{
            Usuario.findByIdAndUpdate(usuarioEncontrado._id, novoUsuario, function(err, usuarioAtualizado){
                if(err) {
                    return res.status(500).json({'success': false, 'message': 'Descuple, erro interno'});
                }
                return res.status(200).json(usuarioAtualizado);
            });
        }
    });
    
});

router.route('/login/gcm')
    .post(function(req,res){
        var id = req.body.id_facebook;
        var token = req.body.token;

        console.log(req.body);
    
        Usuario.findOneAndUpdate({id_facebook: id}, {token: token, primeiro_login: true}, {new: true}, function(err, usuario) {
        if (err) {
            console.log(err);
            return res.status(500).json({'success': false, 'message': 'Descuple, erro interno'});
        }
        
        if(usuario === null){
            return res.status(500).json({'success': false, 'message': 'Desculpe, usuario não encontrado'});
        }
            
        return res.send(usuario);    

        });
        
    });

module.exports = router;