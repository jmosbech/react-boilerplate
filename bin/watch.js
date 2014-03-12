// windows doesn't support running tasks in parallel using the & operator
// let's just fake it like this

var exec = require('child_process').exec;
var miniwatch = require('miniwatch');

// build info
require('./build-info.js');

// js
var js = exec('npm run watch-js');
js.stderr.pipe(process.stderr);
js.stdout.pipe(process.stdout);

// css
// don't use node-sass --watch - it kills the process on syntax errors
miniwatch('browser/css', function(err, files){
	var css = exec('node-sass --source-map --output static/build/bundle.css browser/css/style.scss');
	css.stderr.pipe(process.stderr);
	css.stdout.pipe(process.stdout);
});

// start app
require('../app.js');
