// Arquivo responsável por lidar com as operações como
// listagem, criação, atualização e remoção.

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find(); // Sem parâmetros para buscar todos

        return res.json(products) // Retornando em uma estrutura JSON
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Pel ID, o produto será encontrado e seu conteúdo atualizado através do req.body.
        // { new: true } para que o produto com os dados atualizados seja retornado para a
        // const product.

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};