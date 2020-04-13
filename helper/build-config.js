const gulp = require('gulp');
const babel = require('gulp-babel');

function main () {
    gulp.src('public/config.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('docs'));
}

main();