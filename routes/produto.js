var express = require('express');
var router = express.Router();

var Produto = require('../models/produto');

router.get('/:code', function(req, res) {
    
    Produto.findOne({codigo_barras: req.params.code}, function(err, produto){
        if(err){
            res.status(500).json({succes: false, message: 'Erro ao procurar produto'});
        }
        
        if(produto){
            res.send(produto);
        }else{
            res.status(500).json({succes: false, message: 'Produto não encontrado'});
        }
                    
        
    });
    
});

router.route('/')
    .post(function (req, res) {
        console.log(req.body);  
        var produto = req.body; 
        
        Produto.create(produto, function(err, produtoSalvo){
            if(err){
                res.status(500).json({succes: false, message: 'Erro ao cadastrar produto'});
            }    
            
            return res.json(produtoSalvo);
        });

    })
    .put(function(req,res){
        Produto.findAndUpdate({codigo_barras: req.params.code}, function(err, produto){
            if (err) {
                console.log(err);
                return res.status(500).send({ 
                        success: false, 
                        message: 'Erro ao atualizar produto'
               });
            }
            
            return res.json(produto);
        });
    });

//var products = require('./product.json');
//router.get('/save/p', function(req,res){
//    for(p in products){
//        Produto.create(products[p], function(err, saved){
//            console.log(saved._id);
//        })
//    }
//});

var products = require('./product.json');
router.get('/save/p', function(req,res){
    for(p in products){
        var prod = products[p];
        prod.atualizacao = Date.now();
        prod.imagem = 'imagem';
        prod.preco = Math.random()*(15-1+1)+1;
        prod.preco = prod.preco.toFixed(2); 
        prod.preco_promo = prod.preco;
        
        Produto.create(prod, function(err, saved){
            console.log(saved._id);
        })
    }
    res.send('saved');
});


module.exports = router;
