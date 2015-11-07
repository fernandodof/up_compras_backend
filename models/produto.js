var mongoose = require('mongoose');

var produtoSchema = new mongoose.Schema({
    codigo_barras : { type: String, index: true }, 
    descricao: String,
    embalagem: String,
    um: String,
    peso_liquido: String,
    peso_bruto: String,
    codigo_departamento: String,
    codigo_secao: String,
    codigo_fornecedor: String,
    um_master: String,
    ncm: String,
    codigo_fabricante: String,
    codigo_produto_similar: String,
    codigo_categoria: String,
    codigo_barras_master: String,
    imagem: String,
    preco : Number,
    preco_promo: Number,
    atualizacao:  {type: Date, Default: Date.now},
});

module.exports = mongoose.model('produto', produtoSchema);