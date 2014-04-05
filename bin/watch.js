// windows doesn't support running tasks in parallel using the & operator
// let's just fake it like this

var exec = require('child_process').exec;
var miniwatch = require('miniwatch');
var _ = require('underscore');

// build info
require('./build-info.js');

// js
var js = exec('npm run watch-js');
js.stderr.pipe(process.stderr);
js.stdout.pipe(process.stdout);

// css
// don't use node-sass --watch - it kills the process on syntax errors
// for some reason miniwatch double fires, so debounce the calls
miniwatch('browser/css', _.debounce(function(err, files){
	var css = exec('npm run build-css');
	css.stderr.pipe(process.stderr);
	css.stdout.pipe(process.stdout);
}, 500));

// start app
var app = exec('nodemon ./app.js');
app.stderr.pipe(process.stderr);
app.stdout.pipe(process.stdout);