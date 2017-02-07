'use strict'

const assert = require('assert')
const stockQuote = require('../')

describe('lagden-stock-quote', () => {
	it('vale5', done => {
		stockQuote('vale5').then(r => {
			assert.ok(r.success)
			assert.equal(r.papel, 'BOV:VALE5')
			assert.deepEqual(Object.keys(r), ['papel', 'variacao', 'ultimo', 'max', 'min', 'abertura', 'fechamento', 'negocio', 'volume', 'hora', 'success'])
			done()
		})
	})

	it('not found', done => {
		stockQuote('xxx').catch(err => {
			assert.strictEqual(err.success, false)
			assert.equal(err.message, 'Cotação não encontrada')
			done()
		})
	})
})
