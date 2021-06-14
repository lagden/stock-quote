import test from 'ava'
import stockQuote from '../src/stock-quote.js'

test('quote', async t => {
	const r = await stockQuote('mglu3')
	t.snapshot(r)
})

test('throws', async t => {
	await t.throwsAsync(stockQuote('xxx'), {
		instanceOf: Error,
		message: 'Cotação não encontrada.'
	})
})
