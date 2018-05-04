var gulp        = require('gulp');
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['themes/endicott-counseling/source/scss/styles.scss'])
        .pipe(sass())
        .pipe(gulp.dest('themes/endicott-counseling/source/assets/css'));
});

// Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
//         .pipe(gulp.dest("src/js"));
//     });

// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {
    gulp.watch(['themes/endicott-counseling/source/scss/**/*.scss'], ['sass']);
});

gulp.task('dev', ['watch']);

gulp.task('build', ['sass']);