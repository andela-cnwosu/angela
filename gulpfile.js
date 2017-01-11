var gulp = require('gulp');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
require('dotenv').load();
var port = process.env.PORT || 8000;

var isProduction = process.env.NODE_ENV == 'production'

gulp.task('build-html', function(){
  return gulp.src('app/**/*.jade')
      .pipe(jade({ pretty: !isProduction }))
      .pipe(gulp.dest('public'));
});

gulp.task('build-css', function(){
  return gulp.src('app/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(concat('application.css'))
      .pipe(gulp.dest('public/css'));
});

gulp.task('build-js', function(){
  return gulp.src('app/js/*.js')
      .pipe(uglify())
      .pipe(concat('application.js'))
      .pipe(gulp.dest('public/js'));
});

gulp.task('serve', function(){
  nodemon({
    script: 'server.js',
    watch: ["server.js", 'public/*', 'public/*/**'],
    ext: 'js'
  }).on('restart', function(){
    console.log("Server restarting...");
  });
});

gulp.task('launch', ['serve'], function() {
  browserSync.init({
    proxy: "http://localhost:8000"
  });
});

gulp.task('watch', ['build-html', 'build-css', 'build-js'], function(){
  gulp.watch('app/*.jade', ['build-html', 'build-css', 'build-js'])
      .on('change', browserSync.reload);
});

gulp.task('default', ['launch', 'watch']);