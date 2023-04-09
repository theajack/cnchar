/*
 * @Author: chenzhongsheng
 * @Date: 2022-10-09 09:18:54
 * @Description: Coding something
 */
const gulp = require('gulp');
const toc = require('gulp-markdown-toc');

// ! 从 v3.2.4起不在单独维护readme 该功能已不再需要
// 该功能主要是生成toc

module.exports = function buildReadme () {
    gulp.src(['helper/README.md'])
        .pipe(toc())
        .pipe(gulp.dest('.'));
    
    gulp.src(['helper/README.en.md'])
        .pipe(toc())
        .pipe(gulp.dest('.'));
};