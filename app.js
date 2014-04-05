var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

var build;
try {
	build = require('./public/build/build-info.json');
} catch (err) {
	build = { revision: new Date().toISOString() };
}
app.set('build', build);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pejs');
app.disable('x-powered-by');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// TODO: add error handler

// development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
