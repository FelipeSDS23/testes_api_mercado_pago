// api mercado pago
const gerar_link_de_pagamento = require("../helpers/api-mercado-pago");

module.exports = class TesteController { 

    static async showMainPage(req, res) {
        res.render('index');
    }
    static async compraConcluida(req, res) {
        console.log(req.query)
        res.render('compraconcluida');
    }
    static async compraNaoConcluida(req, res) {
        res.render('compranaoconcluida');
    }
    static async compraPendente(req, res) {
        res.render('comprapendente');
    }

    static async checkout(req, res) {

        const {id, title, unit_price} = req.query;

        // LINK NAO ESTA RETORNANDO (VERIFICAR DEPOIS)
        gerar_link_de_pagamento(res, id, title, unit_price);

    }

}