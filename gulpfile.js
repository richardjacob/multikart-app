const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

//scss to css
function style() {
  return gulp.src('assets/scss/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass({
      //outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('assets/css'));
}

// Watch function
function watch() {
  browserSync.init({
    proxy: 'localhost/multikart-app/index.html'
  });
  gulp.watch('assets/scss/**/*.scss', style);
  // gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('assets/css/*.css').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

const build = gulp.series(watch);
gulp.task('default', build, 'browser-sync');