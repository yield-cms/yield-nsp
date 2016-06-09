import glob = require('glob');
import path = require('path');
import fs = require('fs');
import namespacing = require('./namespacing');

/**
 * Load and build templates hierarhy from directory
 * and store it in scope object
 * @param {string} directory - root directory of templates
 * @return {Object} templates tree
 */
function compileDir(directory : string) : Object {
	let result : Object = {},
		rawPaths : string[] = null,
		rawContents : string[] = null,
		dirsToNamespacing : string[] = null;

	rawPaths = glob.sync(path.join(directory, '/**/*.nsp'));
	rawPaths.forEach(function(rawPath) {
		rawContents.push(
			fs.readFileSync(rawPath).toString()
		);
	});

	dirsToNamespacing = rawPaths.map(function(rawPath) {
		let newPath : string = path.parse(rawPath).dir;
		newPath = rawPath.replace(directory, '');
		if (newPath.charAt(0) === path.sep) {
			newPath = newPath.substr(1);
		}
		return newPath;
	});

	namespacing(dirsToNamespacing, result);

	return result;
}

export = {
	compileDir: compileDir
};
