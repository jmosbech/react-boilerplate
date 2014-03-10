exports.index = function (req, res) {
	res.render('index', {build: req.app.get('build')});
};
