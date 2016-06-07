import glob = require('glob');
import path = require('path');
import fs = require('fs');

/**
 * @private
 * @param {string} directory - root directory of templates
 * @returns {Promise}
 */
let _getFiles = function(directory : string) : Promise<string[]> {
	return new Promise(function(resolve, reject) {
		glob(path.join(directory, '/**/*.nsp'), function(error, files) {
			if (error) {
				reject(error);
			} else {
				resolve(files);
			};
		});
	});
};

/**
 * Compile .NSP-file to JavaScript
 * @private
 * @param {string} file
 * @returns {Promise}
 */
let _compileToJS = function(file : string) : Promise<string> {
	return new Promise(function(resolve, reject) {
		fs.readFile(file, function(error, data) {
			if (error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
};

/**
 * Build templates files
 * @param {string} directory - root directory of your templates
 * @return {Promise}
 */
let build = function(directory : string) : Promise<any> {
	return _getFiles(directory)
		.then(function(files) {
			let compilePromises : Promise<string>[] = files.map(_compileToJS);
			return Promise.all(compilePromises);
		});
};

let using = function() {

};

export = {
	build : build,
	using: using
};
