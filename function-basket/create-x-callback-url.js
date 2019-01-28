import {resolve} from "url"
import {encode} from "querystring"

/**
 * 
 * @param {string} app 
 * @param {string} action 
 * @param {Object.<string, string>} options 
 * @returns {string} url
 */
export default function (app, action, options) {
	let root = resolve(`${app}://`, action)
	let query = encode(options)
	return `${root}?${query}`
}