const gulp = require("gulp");
const { series, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Compile sass into CSS & auto-inject into browsers
function compileSass() {
  return gulp
    .src(["themes/endicott-counseling/scss/**/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("themes/endicott-counseling/source/assets/css"));
}

function compileJS() {
  return gulp
    .src(["themes/endicott-counseling/js/**/*.js"])
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest("themes/endicott-counseling/source/assets/js"));
};


// Static Server + watching scss/html files
function watchFiles() {
  watch("themes/endicott-counseling/scss/**/*.scss", compileSass);
  watch("themes/endicott-counseling/js/**/*.js", compileJS);
}

exports.build = series(compileSass, compileJS);
exports.dev = series(compileSass, compileJS, watchFiles);
