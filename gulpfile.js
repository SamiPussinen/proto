var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
	gulp.src('./src/**/*.coffee')
	.pipe(coffee({bare: true}).on('error', gutil.log))
	.pipe(gulp.dest('./build'));
});

gulp.task('templates', function() {
	var YOUR_LOCALS = {};

	gulp.src('./src/**/*.jade')
	.pipe(jade({
		locals: YOUR_LOCALS
	}))
	.pipe(gulp.dest('./build'));
});

gulp.task('browserify', function () {
	var browserified = transform(function(filename) {
		var b = browserify(filename);
		return b.bundle();
	});

	return gulp.src(['./build/**/*.js'])
		.pipe(browserified)
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['coffee', 'templates', 'browserify']);
