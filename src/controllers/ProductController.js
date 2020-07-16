// Arquivo responsável por lidar com as operações como
// listagem, criação, atualização e remoção.

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        // Recuperando o número da página requerido
        // por meio da desestruturação de objetos.
        // 1: valor default

        const products = await Product.paginate({  }, { page, limit: 10 });
        // {  }: Sem parâmetros para buscar todos
        // { page: 1, limit: 10 }: page é referente à página atual e
        // limit é referente ao tamanho da página

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