import {encode} from "querystring"

/**
 * 
 * @param {string} app 
 * @param {string} action 
 * @param {Object.<string, string>} options 
 * @returns {string} url
 */
export default (app, action, options) =>
	`${app}://x-callback-url/${action}?${encode(options)}`
