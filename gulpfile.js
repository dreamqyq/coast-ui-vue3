const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./lib/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename("coast-ui.css"))
    .pipe(gulp.dest('./package/'));
};

exports.default = buildStyles;