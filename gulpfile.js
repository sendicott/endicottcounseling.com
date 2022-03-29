const { src, dest, watch, series } = require('gulp');
const compileSass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
  return src('themes/endicott-counseling/scss/styles.scss')
    .pipe(sourceMaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat('bundle.css'))
    .pipe(dest('themes/endicott-counseling/source/assets/css'));
};

const bundleJs = () => {
  return src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(dest('src/js'));
};

const devWatch = () => {
  watch('themes/endicott-counseling/scss/**/*.scss', bundleSass);
};

exports.bundleSass = bundleSass;
exports.bundleJs = bundleJs;
exports.devWatch = devWatch;
