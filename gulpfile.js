var gulp = require('gulp');
var cp = require('child_process');

function exec(cmd, args, callback) {
	var proc = cp.spawn(cmd, args);
	proc.stdout.on('data', function(buf) {
		process.stdout.write(buf);
	});
	proc.stderr.on('data', function(buf) {
		process.stderr.write(buf);
	});
	proc.on('close', function() {
		callback();
	});
}

gulp.task('build', function(done) {
	exec('tsc', [], done);
});

gulp.task('test', function(done) {
	exec('mocha', ['dist/modules/test/src/test.js'], done);
})