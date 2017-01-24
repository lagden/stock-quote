'use strict'

const cheerio = require('cheerio')

function parse(html) {
	const $ = cheerio.load(html)
	const dado = {
		papel: $('#symbol_entry').val(),
		variacao: $('#quoteElementPiece5').text(),
		ultimo: $('#quoteElementPiece6').text(),
		max: $('#quoteElementPiece7').text(),
		min: $('#quoteElementPiece8').text(),
		abertura: $('#quoteElementPiece9').text(),
		fechamento: $('#quoteElementPiece10').text(),
		hora: $('#quoteElementPiece11').text()
	}
	return dado
}

exports.parse = parse
