const express = require('express');
const cors = require('cors');
const Correio = require('node-correios');
const correio = new Correio;
const app = express();
const PORT = 3001;

app.use(cors());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get('/', (req, res) => {
    const {nome, cep, renda, dependentes} = req.query;
    console.log(nome);
    console.log(cep);
    console.log(renda);
    console.log(dependentes);
    correio.consultaCEP({cep: cep})
    .then(result => {
        res.send(result);
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
})