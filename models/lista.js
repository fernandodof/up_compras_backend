var mongoose = require('mongoose');

var listaSchema = new mongoose.Schema({
    nome : String, 
    produtos  : [{type: mongoose.Schema.Types.ObjectId, ref : 'produto'}]
});

module.exports = mongoose.model('lista', listaSchema);