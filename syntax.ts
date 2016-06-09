class SyntaxParser {
	/**
	 * Template string to parse in JS
	 * @private
	 * @type {string}
	 */
	private _stringToParse : string;

	/**
	 * @constructor
	 * @param {string} stringToParse
	 */
	constructor(stringToParse : string) {
		this._stringToParse = stringToParse;
	}

	/**
	 * Convert "renderer" directives to JS class expressions
	 * @private
	 * @returns {SyntaxParser} This object (for chaining)
	 */
	private _renderer() : SyntaxParser {
		let rendererRegExp : RegExp = null,
			endRendererRegExp : RegExp = null,
			rendererMatches : string[] = null,
			endRendererMatches : string[] = null;

		rendererRegExp = /\{\?renderer ".*"[ extends ".*"]{0,}\?\}/g;
		endRendererRegExp = /\{\?endrenderer\?\}/g;

		rendererMatches = this._stringToParse.match(rendererRegExp);
		endRendererMatches = this._stringToParse.match(endRendererRegExp);

		endRendererMatches.forEach(function(rendererMatch : string) {
			this._stringToParse =
				this._stringToParse.replace(rendererMatch, '}');
		});

		rendererMatches.forEach(this._rendererMatchToClass, this);

		return this;
	}

	/**
	 * Convert
	 */
	private _rendererMatchToClass(rendererMatch : string) {

	};

	/**
	 * Convert "template" directives to JS class expressions
	 * @private
	 * @returns {SyntaxParser} This object (for chaining)
	 */
	private _template() : SyntaxParser {
		let templateRegExp : RegExp = null,
			endTemplateRegExp : RegExp = null,
			templateMatches : string[] = null,
			endTemplateMatches : string[] = null;

		templateRegExp = /\{\?template ".*"\?\}/g;
		endTemplateRegExp = /\{\?endtemplate\?\}/g;

		templateMatches = this._stringToParse.match(templateRegExp);
		endTemplateMatches = this._stringToParse.match(endTemplateRegExp);

		return this;
	}

	/**
	 * Convert template string
	 * @public
	 * @returns {string} Ready JS template
	 */
	public go() : string {
		this._renderer()._template();
		return this._stringToParse;
	}
}

export = SyntaxParser;
