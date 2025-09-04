const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp.src("assets/scss/**/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("assets/css"));
}

function watchFiles() {
  gulp.watch("assets/scss/**/style.scss", buildStyles);
}

exports.default = gulp.series(buildStyles, watchFiles);
