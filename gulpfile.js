const excel2json = require('gulp-excel2json'),
      gulp = require('gulp'),
      rename = require("gulp-rename"),
      prettify = require('gulp-jsbeautifier'),
      dateFormat = require('dateformat'),
      now = new Date(),
      htmlPrettify = require('gulp-prettify'),
      cssbeautify = require('gulp-cssbeautify'),
      jsbeautify = require('gulp-beautify');

gulp.task('convert-to-html', () => {
    gulp.src('analyses.xlsx')
        .pipe(excel2json({
            headRow: 1,
            valueRowStart: 2,
            trace: true
        }))
        .pipe(rename("analyses.json"))
        .pipe(prettify())
        .pipe(gulp.dest('./report/'))
});
      
gulp.task('backup-excel-data', ['convert-to-html'], () => {
    gulp.src('analyses.xlsx')
        .pipe(excel2json({
            headRow: 1,
            valueRowStart: 2,
            trace: true
        }))
        .pipe(rename("analyses_convertedon_" + dateFormat(now, "mmmmdSyyyy") + ".xlsx"))
        .pipe(gulp.dest('./'))
});

gulp.task('backup-json-data', ['convert-to-html', 'backup-excel-data'], () => {
    gulp.src('./report/analyses.json')
        .pipe(rename("analyses_convertedon_" + dateFormat(now, "mmmmdSyyyy") + ".json"))
        .pipe(prettify())
        .pipe(gulp.dest('./report/'))
});

gulp.task('prettify-html', () => {
  gulp.src('./report/index.html')
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('./report/'))
});

gulp.task('prettify-js', () => {
  gulp.src('./report/js/*.js')
    .pipe(jsbeautify({indentSize: 2}))
    .pipe(gulp.dest('./report/js/'))
});

gulp.task('prettify-css', () => {
  gulp.src('./report/css/*.css')
    .pipe(cssbeautify())
    .pipe(gulp.dest('./report/css/'));
});

gulp.task('default', ['convert-to-html', 'prettify-html', 'prettify-js', 'prettify-css', 'backup-json-data', 'backup-excel-data']);