import createXCallbackUrl from "./create-x-callback-url"
import kebab from "just-kebab-case"

let createProxy = get =>
	new Proxy({}, {get: (_, key) => get(key)})

/**
 * `x.bear.addNote({text: "hello abe"})` will return
 * "bear://add-note?text=hello%20abe"
 */
export default createProxy(app =>
	createProxy(action =>
		options =>
			createXCallbackUrl(
				kebab(app),
				kebab(action),
				options
			)
	)
)
