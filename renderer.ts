/**
 * Abstract class for all compiled renderers
 */
abstract class Renderer {

	/**
	 * Internal method for special HTML symbols escaping
	 * @protected
	 * @param {string} unescaped
	 */
	protected _escape(unescaped : string) : string {
		return unescaped
			.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
	}

	/**
	 * Internal method for special HTML symbols unescaping
	 * @protected
	 * @param {string} escaped
	 */
	protected _unescape(escaped : string) : string {
		return escaped
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#039;/g, '\'');
	}
}

export = Renderer;
