// windows doesn't support running tasks in parallel using the & operator
// let's just fake it like this

var exec = require('child_process').exec;

// build info
require('./build-info.js');

// js
var js = exec('npm run watch-js');
js.stderr.pipe(process.stderr);
js.stdout.pipe(process.stdout);

// css
require('./watch-css.js');

// start app
require('../app.js');
