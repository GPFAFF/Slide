//gulpfile

var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var minfiyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('jpgs', function(){
	return gulp.src('source/img/*.jpg')
	.pipe(imageMin({progressive: true}))
	.pipe(gulp.dest('app/img'));
});
gulp.task('css', function(){
	return gulp.src('source/css/*.css')
	.pipe(minfiyCSS())
	.pipe(gulp.dest('app/css/'));
});

gulp.task('html', function(){
	return gulp.src('source/**/*.html')
	.pipe(minifyHTML())
	.pipe(gulp.dest('app/html'));
});
gulp.task('compress', function(){
	return gulp.src('source/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('watch', function(){
	gulp.watch('source/css/*.css', function(){
		gulp.run('css');
	});
	gulp.watch('source/js/*.js', function(){
		gulp.run('compress');
	});
	gulp.watch('source/img/', function(){
		gulp.run('jpgs');
	});
	gulp.watch('**/*.html', function(){
		gulp.run('html');
	});
});



