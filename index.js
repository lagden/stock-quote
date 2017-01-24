/* eslint camelcase:0 */

'use strict'

const got = require('got')
const {parse} = require('./lib/utility')

function consulta(req, timeout = 5000, retries = 2) {
	const input = String(req)
	const formData = {
		body: {
			symbol: input,
			symbol_ok: 'OK'
		},
		timeout,
		retries,
		followRedirect: false,
		headers: {
			pragma: 'no-cache',
			accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
			'upgrade-insecure-requests': '1',
			'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36',
			'content-type': 'application/x-www-form-urlencoded',
			'cache-control': 'no-cache'
		}
	}
	return got
		.post('http://br.advfn.com/common/search/exchanges/quote', formData)
		.then(res => {
			if (/\/p\.php\?pid=(.*)/.test(res.headers.location) === false) {
				return got.get(res.headers.location)
			}
			const err = new Error('Cotação não encontrada')
			err.success = false
			return Promise.reject(err)
		})
		.then(res => {
			const papel = parse(res.body)
			papel.success = true
			return Promise.resolve(papel)
		})
}

module.exports = consulta
