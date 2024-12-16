async function gerar_link_de_pagamento(res, _id, _title, _unit_price) {

	// Converte parâmetros
	_id = String(_id)
	_title = String(_title)
	_unit_price = Number(_unit_price)


	// Step 1: Import the parts of the module you want to use
	const { MercadoPagoConfig, Preference } = require("mercadopago");

	// Step 2: Initialize the client object
	const client = new MercadoPagoConfig({ accessToken: process.env.TOKEN, options: { timeout: 5000, idempotencyKey: 'abc' } });

	// Step 3: Initialize the API object
	const preference = new Preference(client);

	// Step 4: Create the request object
	const body = {
		items: [
			{
				id: _id,
				title: _title,
				quantity: 1,
				currency_id: 'BRL',
				unit_price: _unit_price,
			},
		],
		back_urls: {
			success: 'http://localhost:3000/teste/compraconcluida',
			failure: 'http://localhost:3000/teste/compranaoconcluida',
			pending: 'http://localhost:3000/teste/comprapendente',
		},
		auto_return: 'approved',
	};

	// Step 6: Make the request
	const response = await preference.create({ body })
		.then((response) => {
			// console.log(res)
			// console.log(response.init_point)
			res.redirect(`${response.init_point}`);
		}).catch((err) => {
			console.log(err);
		});
	
}

module.exports = gerar_link_de_pagamento;