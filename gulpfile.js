'use strict'
/* ---------- */
/* setup */
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('default', () => {
  return gulp.src('src/*.js')
        .pipe(gulp.dest('docs'))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
})
