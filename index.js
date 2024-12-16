require("dotenv").config();
const express = require('express');
const exphbs = require('express-handlebars');


// api mercado pago
// const gerar_link_de_pagamento = require("./helpers/api-mercado-pago");



const app = express();



// LINK NAO ESTA RETORNANDO (VERIFICAR DEPOIS)
// const linkDePagamento = gerar_link_de_pagamento()





// import routes
const testeRoutes = require('./routes/testeRoutes');

// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars');

// receive response from body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// public path
app.use(express.static('public'));

// Routes
app.use('/teste', testeRoutes);

app.listen(3000, () => {
    console.log("Servidor em execução: ")
})