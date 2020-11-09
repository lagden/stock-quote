'use strict'

const cheerio = require('cheerio')

function parse(html) {
	const $ = cheerio.load(html)
	return {
		papel: $('#symbol_entry').val(),
		variacao: $('#quoteElementPiece9').text(),
		ultimo: $('#quoteElementPiece10').text(),
		max: $('#quoteElementPiece14').text(),
		min: $('#quoteElementPiece13').text(),
		negocio: $('#quoteElementPiece20').text(),
		volume: $('#quoteElementPiece21').text(),
		hora: $('#quoteElementPiece11').text()
	}
}

module.exports = parse
