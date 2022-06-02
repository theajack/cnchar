const gulp = require('gulp');
const babel = require('gulp-babel');

function main () {
    gulp.src('public/config.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('docs'));
    gulp.src('vuepress/assets/readme/**')
        .pipe(gulp.dest('docs/assets/readme'));
    gulp.src('vuepress/assets/v1/**')
        .pipe(gulp.dest('docs/assets/v1'));
    gulp.src(['vuepress/v1.html', '.gitignore'])
        .pipe(gulp.dest('docs'));
}

main();