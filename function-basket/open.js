import {spawn} from "child_process"

export default async function open (url) {
	let child = spawn("open", [url], {
		stdio: [0, 1, 2]
	})

	return new Promise((resolve, reject) => {
		child.on("error", reject)
		child.on("exit", resolve)
	})
}