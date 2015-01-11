var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
 
gulp.task('client', function () {
  return gulp.src('./client/js/index.coffee', { read: false })
             .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
             .pipe(concat('index.js'))
             .pipe(gulp.dest('./public'));
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./client/templates/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('server', function() {
    gulp.src('server/js/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('.'));
});
 
gulp.task('default', ['client', 'templates', 'server']);