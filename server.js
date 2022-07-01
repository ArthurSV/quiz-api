const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('./routes/authenticate')
const server = express();
const port = 3000;

server.use(bodyParser.json());

// importação de rotas aqui...

server.listen(port, () => {
    console.log(`API do quiz rodando na porta: ${port}`);
});


server.use('/auth', authRoute); //autenticação


