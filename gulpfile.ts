import gulp from 'gulp';
import rename from 'gulp-rename';
import gulpScss from 'gulp-sass';
import sass from 'sass';

const sassCompiler = gulpScss(sass);

function buildStyles() {
  return gulp
    .src('./lib/index.scss')
    .pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError))
    .pipe(rename('coast-ui.css'))
    .pipe(gulp.dest('./package/'));
}

export default buildStyles;
