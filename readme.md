# lagden-stock-quote

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]:         https://img.shields.io/npm/v/lagden-stock-quote.svg
[npm]:             https://www.npmjs.com/package/lagden-stock-quote
[ci-img]:          https://github.com/lagden/stock-quote/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/stock-quote/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/stock-quote/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/stock-quote?branch=master


Cotações da Bolsa de Valores


## Install

```
$ npm i -S lagden-stock-quote
```


## Usage

```javascript
import consulta from 'lagden-stock-quote'

const data = await consulta('vale3')
console.log(data)
//=> {papel: 'BOV:VALE3', varicao: ...}
```


## API

### consulta(input)

#### input

*Required*  
Type: `string`


## License

MIT © [Thiago Lagden](https://github.com/lagden)
