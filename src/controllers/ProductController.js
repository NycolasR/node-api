// Arquivo responsável por lidar com as operações como
// listagem, criação, atualização e remoção.

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find(); // Sem parâmetros para buscar todos

        return res.json(products) // Retornando em uma estrutura JSON
    },
};