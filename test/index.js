import test from 'ava'
import stockQuote from '../src/stock-quote.js'

test('quote mglu', async t => {
	const r = await stockQuote('mglu3')
	t.snapshot(r)
})

test('quote azul', async t => {
	const r = await stockQuote('azul4')
	t.snapshot(r)
})

test('throws', async t => {
	await t.throwsAsync(stockQuote('xxx'), {
		instanceOf: Error,
		message: 'Ativo não encontrado.'
	})
})
