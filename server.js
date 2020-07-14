const express = require('express'); // retorna uma função

const app = express(); // executa a dita função

/* 
.get(string, function) : método executado sempre que a rota
especificada for acessada.

'/': rota raiz.

req (requisição) feita ao servidor: contém todos os detalhes
e informações possíveis desta requisição (parâmetros, corpo e
cabeçalho da requisição, usuário, autênticação, IP, etc...) 

res (resposta) dada à requisição
*/
app.get('/', (req, res) => {
    res.send('Hello, Nycolas.');
});

app.listen(3001); // para a aplicação ouvir a porta 3001 do navegador