import got from 'got'
import FormData from 'form-data'
import parse from './lib/helper.js'

async function consulta(req) {
	const frm = new FormData()
	frm.append('symbol', req)
	frm.append('symbol_ok', 'OK')

	const opts = {
		body: frm,
		methodRewriting: false,
		headers: {
			'cache-control': 'no-cache'
		}
	}

	const {body} = await got.post('https://br.advfn.com/common/search/exchanges/quote', opts)
	const data = parse(body)
	if (data?.papel) {
		return data
	}

	throw new Error('Ativo não encontrado.')
}

export default consulta
