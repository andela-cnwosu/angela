var gulp = require('gulp');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var dotenv = require('dotenv');
dotenv.load();

var isProduction = process.env.NODE_ENV == 'production'

gulp.task('html', function(){
  return gulp.src('app/*.jade')
      .pipe(jshint())
      .pipe(jade({ pretty: !isProduction }))
      .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('app/*.jade', ['html']);
});

gulp.task('default', ['watch']);