const Contato = require('../models/ContatoModel');

exports.paginaInicial = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
    return;
};