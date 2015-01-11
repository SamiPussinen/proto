gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
uglify = require 'gulp-uglify'
jade = require 'gulp-jade'

# Bundle task
gulp.task('bundle', ->

	browserify(
		entries: ['./src/index.coffee']
		extensions: ['.coffee']
	)

	# Apply transforms and bundle
	.transform('coffeeify')
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('./build'))
)

gulp.task('jade', ->
	YOUR_LOCALS = {}

	gulp.src('./src/**/*.jade')
	.pipe(jade({locals: YOUR_LOCALS}))
	.pipe(gulp.dest('./build'))
)

# Run the tasks
gulp.task('default', ['bundle', 'jade'])
