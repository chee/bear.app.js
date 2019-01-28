#!/usr/bin/env node
let kebab = require("just-kebab-case")
let yargs = require("yargs")
let commands = require("../index.js")
let {readFileSync} = require("fs")

Object.entries(commands)
	.forEach(([name, fn]) => {
		yargs = yargs.command({
			command: kebab(name),
			describe: fn.description,
			handler: argv => fn(commands.transformOptions(argv))
		})
	})


yargs
	.coerce("file", path =>
		readFileSync(path).toString("base64")
	)
	.demandCommand()
	.help()
	.argv
