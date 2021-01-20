var gulp = require("gulp");
var sass = require("gulp-sass");

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src(["themes/endicott-counseling/scss/styles.scss"])
    .pipe(sass())
    .pipe(gulp.dest("themes/endicott-counseling/source/assets/css"));
});

// Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
//         .pipe(gulp.dest("src/js"));
//     });

// Static Server + watching scss/html files
gulp.task("watch", function () {
  gulp.watch("themes/endicott-counseling/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("dev", gulp.series("watch"));

gulp.task("build", gulp.series("sass"));
