'use strict'

const querystring = require('querystring')
const got = require('got')
const parse = require('./lib/utility')

async function consulta(req) {
	const opts = {
		body: querystring.stringify({
			symbol: String(req),
			symbol_ok: 'OK'
		}),
		followRedirect: true,
		methodRewriting: false,
		headers: {
			pragma: 'no-cache',
			'cache-control': 'no-cache',
			'upgrade-insecure-requests': '1',
			'content-type': 'application/x-www-form-urlencoded'
		}
	}

	const {body} = await got.post('https://br.advfn.com/common/search/exchanges/quote', opts)
	const data = parse(body)
	if (data?.papel) {
		return parse(body)
	}

	throw new Error('Cotação não encontrada.')
}

module.exports = consulta
