// windows doesn't support running tasks in parallel using the & operator
// let's just fake it like this

var exec = require('child_process').exec;
var miniwatch = require('miniwatch');
var _ = require('underscore');

// allow restart of nodemon by typing `rs\n`
process.stdin.resume();

// build info
fork('nodemon --quiet ./bin/build-info.js');

// js
fork('npm run watch-js');

// css
// don't use node-sass --watch - it kills the process on syntax errors
// for some reason miniwatch double fires, so debounce the calls
miniwatch('browser/css', _.debounce(function(err, files){
	fork('npm run build-css');
}, 500));

// start app
fork('nodemon ./app.js');

function fork(script) {
	var proc = exec(script);
	proc.stderr.pipe(process.stderr);
	proc.stdout.pipe(process.stdout);
	process.stdin.pipe(proc.stdin);
}
