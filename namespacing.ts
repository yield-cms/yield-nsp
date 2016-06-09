import camelCase = require('camel-case');
import path = require('path');
import assert = require('assert');

/**
 * Special tests for this module, executes only on launch with flag "test"
 */
function _runTests() {
	if (process.argv[2] === 'test') {
		let someScope = {};
		let somePaths = [
			'n-pages',
			'n-pages/l-main',
			'n-pages/l-article',
			'n-pages/l-feedback',
			'n-components',
			'n-components/l-header',
			'n-components/l-footer'
		];
		namespacing(somePaths, someScope);
		console.log(someScope);
	}
};

/**
 * Splits directory path by system separator and creates scopes
 * hierarchy by result. Directories names will be "camelCased".
 * @param {string} directoryPath
 * @param {Object} rootScope
 */
function _buildTree(directoryPath : string, rootScope : Object) : void {
	let readyNames : string[] = null,
		currentScope : Object = rootScope;

	readyNames = directoryPath.split(path.sep).map(
		function(directoryName : string) {
			return camelCase(directoryName);
		}
	);

	for (let i = 0; i < readyNames.length; i++) {
		if (currentScope[readyNames[i]] === undefined) {
			currentScope[readyNames[i]] = {};
		}
		currentScope = currentScope[readyNames[i]];
	}
}

/**
 * Build namespace object by raw paths array
 * @param {string[]} rawPaths
 * @param {Object} rootScope
 */
function namespacing(rawPaths : string[], rootScope : Object) {
	rawPaths.forEach(function(directoryPath : string) {
		_buildTree(directoryPath, rootScope);
	});
};

//Run tests
_runTests();

export = namespacing;
