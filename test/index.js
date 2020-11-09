'use strict'

const test = require('ava')
const stockQuote = require('..')

test('quote', async t => {
	const r = await stockQuote('mglu3')
	console.log(r)
	t.is(r.papel, 'BOV:MGLU3')
})

test('throws', async t => {
	await t.throwsAsync(stockQuote('xxx'), {
		instanceOf: Error,
		message: 'Cotação não encontrada.'
	})
})
