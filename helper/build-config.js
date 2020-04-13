const gulp = require('gulp');
const fs = require('fs');
const babel = require('gulp-babel');

function main () {
    gulp.src('public/config.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('docs'));
    modPath();
}

function modPath () {
    var html = fs.readFileSync('./docs/assets/v2/index.html', 'utf8');
    html = html.replace(/\/cnchar\/assets\//g, '/cnchar/assets/v2/assets/');
    fs.writeFileSync('./docs/index.html', html, 'utf8');
}
main();