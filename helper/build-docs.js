const gulp = require('gulp');
const fs = require('fs');
const babel = require('gulp-babel');

function main () {
    gulp.src('public/config.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('docs'));
    gulp.src('vuepress/assets/readme/**')
        .pipe(gulp.dest('docs/assets/readme'));
    gulp.src('vuepress/assets/v1/**')
        .pipe(gulp.dest('docs/assets/v1'));
    gulp.src('vuepress/v1.html')
        .pipe(gulp.dest('docs'));
    addMta();
}

function addMta () {
    const mta = /* html*/`<script type="text/javascript" src="https://v1.cnzz.com/z_stat.php?id=1281058979&web_id=1281058979"></script>`;
    var html = fs.readFileSync('./docs/index.html', 'utf8');
    html = html.replace('</body>', mta + '</body>');
    fs.writeFileSync('./docs/index.html', html, 'utf8');
}
main();