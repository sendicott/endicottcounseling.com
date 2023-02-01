const gulp = require("gulp");
const { series, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const babel = require('@babel/core');

// Compile sass into CSS & auto-inject into browsers
function compileSass() {
  return gulp
    .src(["themes/endicott-counseling/scss/**/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("themes/endicott-counseling/source/assets/css"));
}


// Static Server + watching scss/html files
function watchFiles() {
  watch("themes/endicott-counseling/scss/**/*.scss", compileSass);
}

exports.build = series(compileSass);
exports.dev = series(compileSass, watchFiles);
