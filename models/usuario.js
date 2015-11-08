var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
    nome :String,
    id_facebook: String,
    token_facebook : String,
    expires_in_facebook : String,
    refresh_token : String, 
    token : String,
    primeiro_login : { type: Boolean, default: false,  required: true },
});

module.exports = mongoose.model('usuario', usuarioSchema);