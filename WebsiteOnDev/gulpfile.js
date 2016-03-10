var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('compress', function() {
  return gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(rename('toTop.min.js'))
    .pipe(gulp.dest('./dist'));
});
