#!/usr/bin/env node

import path from 'node:path'
import {promises, createWriteStream} from 'node:fs'

async function read(file, options = {}) {
	let filehandle
	let content
	try {
		filehandle = await promises.open(file, 'r')
		content = await filehandle.readFile(options)
	} finally {
		if (filehandle) {
			await filehandle.close()
		}
	}
	return content
}

const packageFile = path.resolve(process.cwd(), 'package.json')
const packageBuf = await read(packageFile)
const packageJson = JSON.parse(packageBuf)

function _error(message) {
	process.stderr.write(message)
	process.exit(1)
}

if (Reflect.has(packageJson, 'devDependencies') === false) {
	process.stdout.write('nothing happened.')
	process.exit(0)
}

Reflect.deleteProperty(packageJson, 'devDependencies')
createWriteStream(packageFile)
	.on('finish', () => {
		process.stdout.write('devDependencies was removed.')
	})
	.on('close', () => {
		process.exit(0)
	})
	.on('error', error => {
		_error(error.message)
	})
	.end(JSON.stringify(packageJson, undefined, '  '))
