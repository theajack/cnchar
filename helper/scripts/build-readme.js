const gulp = require('gulp');
const toc = require('gulp-markdown-toc');

module.exports = function buildReadme () {
    gulp.src(['helper/README.md'])
        .pipe(toc())
        .pipe(gulp.dest('.'));
    
    gulp.src(['helper/README.en.md'])
        .pipe(toc())
        .pipe(gulp.dest('.'));
};