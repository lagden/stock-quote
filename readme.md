# lagden-stock-quote

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![XO code style][xo-img]][xo]

[npm-img]:       https://img.shields.io/npm/v/lagden-stock-quote.svg
[npm]:           https://www.npmjs.com/package/lagden-stock-quote
[ci-img]:        https://travis-ci.org/lagden/stock-quote.svg
[ci]:            https://travis-ci.org/lagden/stock-quote
[coveralls-img]: https://coveralls.io/repos/github/lagden/stock-quote/badge.svg?branch=master
[coveralls]:     https://coveralls.io/github/lagden/stock-quote?branch=master
[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo


Cotações da Bolsa de Valores


## Install

```
$ npm i -S lagden-stock-quote
```


## Usage

```javascript
const consulta = require('lagden-stock-quote')

consulta('vale5')
  .then(res => {
    console.log(res) // { papel: 'BOV:VALE5', varicao: ...}
  })
  .catch(err => {
    console.log(err.message) // 'Cotação não encontrada'
  })
```


## API

### consulta(input)

#### input

*Required*  
Type: `string`


## License

MIT © [Thiago Lagden](http://lagden.in)
