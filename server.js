const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Permitir que dados sejam recebidos pela aplicação no formato JSON
app.use(express.json()); 

// Permintindo acesso a outros domínios
app.use(cors())
    // Permitirá acesso a todos os domínios dada a falta de parâmetros

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));
    // O use() receberá todas requisições
    // Sempre que for recebida uma requisição a partir da rota '/api',
    // será redirecionada para './src/routes'

app.listen(3001);