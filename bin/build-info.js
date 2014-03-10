var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

exec('git describe 2> /dev/null || git rev-parse HEAD', function (err, stdout) {
	if (err) {
		stdout = new Date().toISOString();
	}

	var info = {
		revision: stdout.trim()
	};

	fs.writeFileSync(path.join(__dirname, '../static', 'build-info.json'), JSON.stringify(info));
});