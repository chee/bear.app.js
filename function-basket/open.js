import {spawn} from "child_process"
import yargs from "yargs"

export default async function open (url) {
	let child = spawn("open", [url], {
		stdio: [0, 1, 2]
	})

	if (yargs.argv.debug) {
		console.log({url})
	}

	return new Promise((resolve, reject) => {
		child.on("error", reject)
		child.on("exit", resolve)
	})
}
