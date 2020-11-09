'use strict'

const test = require('ava')
const stockQuote = require('..')

test('vale3', async t => {
	const r = await stockQuote('vale3')
	t.is(r.papel, 'BOV:VALE3')
})

test('throws', async t => {
	await t.throwsAsync(stockQuote('xxx'), {
		instanceOf: Error,
		message: 'Cotação não encontrada.'
	})
})
