// windows doesn't support running tasks in parallel using the & operator
// let's just fake it like this

var fs = require('fs');
var miniwatch = require('miniwatch');
var sass = require('node-sass');
var exec = require('child_process').exec;

// js
exec('npm run watch-js').stderr.pipe(process.stderr);

// css
buildSass();
miniwatch('browser/css', function(err, files) {
	if (err) {
		throw err;
	}
	buildSass();
});

// start app
require('../app.js');

function buildSass(){
	var start = new Date();
	var css = sass.renderSync({
		file: 'browser/css/style.scss',
		imagePath: '/img',
		sourceComments: 'map'
	});
	fs.writeFile('static/bundle.css', css);
	console.log('rebuilt css in ' + (new Date() - start) + ' ms');
}
