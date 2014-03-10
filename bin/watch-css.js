var fs = require('fs');
var miniwatch = require('miniwatch');
var sass = require('node-sass');

buildSass();

miniwatch('browser/css', function (err, files) {
	if (err) {
		throw err;
	}
	buildSass();
});

function buildSass() {
	var start = new Date();
	var css = sass.renderSync({
		file: 'browser/css/style.scss',
		imagePath: '/img',
		sourceComments: 'map'
	});
	fs.writeFileSync('static/bundle.css', css);
	console.log('rebuilt css in ' + (new Date() - start) + ' ms');
}
