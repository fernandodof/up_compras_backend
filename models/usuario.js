var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
    nome :String,
    token : String,
    expires_in_facebook : String,
    id_facebook : String,
    id_push_google : String,
    
});

module.exports = mongoose.model('usuario', usuarioSchema);