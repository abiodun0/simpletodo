var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean'),
	bower
 browserSync = require('browser-sync').create();


gulp.task('test',function(){
	gulp.src(['app/**/*.*'])
	
	.pipe(gulp.dest('dist/'))
});
gulp.task('clean',function(){
	gulp.src('dist/').pipe(clean());
});

gulp.task('server',['test'],function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch('app/**/*.*',['test'],browserSync.reload)
});