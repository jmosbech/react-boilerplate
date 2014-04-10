var express = require('express');
var routes = require('./routes');
var logger = require('morgan');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var http = require('http');
var path = require('path');

var app = express();

try {
	app.locals.build = require('./public/build/build-info.json');
} catch (err) {
	app.locals.build = { revision: new Date().toISOString() };
}

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pejs');
app.disable('x-powered-by');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', routes.index);

app.use(express.static(path.join(__dirname, 'public')));

// TODO: add error handler

// development only
if ('development' === app.get('env')) {
	app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
