var mongoose = require('mongoose');

var supermercadoSchema = new mongoose.Schema({
    nome : String, 
    rede : String,
    endereco :{ 
        rua: String,
        bairro : String,
        numero : Number,
        cep: String
    },
    produtos  : [{type: mongoose.Schema.Types.ObjectId, ref : 'produto'}]
});

module.exports = mongoose.model('supermercado', supermercadoSchema);