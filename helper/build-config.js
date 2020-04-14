const gulp = require('gulp');
const fs = require('fs');
const babel = require('gulp-babel');

function main () {
    gulp.src('public/config.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('docs'));
    addMta();
}

function addMta () {
    let mta = /* html*/`<script>
var _mtac = {};
(function () {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500700068");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();
</script>`;
    var html = fs.readFileSync('./docs/v2/index.html', 'utf8');
    html = html.replace('</body>', mta + '</body>');
    fs.writeFileSync('./docs/v2/index.html', html, 'utf8');
}
main();