const gulp = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');
const babel = require('gulp-babel');
const toc = require('gulp-markdown-toc');
let version = require('../package.json').version;
let files = [
    '../npm/order/package.json',
    '../npm/poly/package.json',
    '../npm/trad/package.json',
    '../npm/draw/package.json',
    '../npm/idiom/package.json',
    '../npm/xhy/package.json',
    '../npm/cnchar/package.json',
    '../npm/all/package.json',
    '../npm/hanzi-util/package.json',
    '../npm/hanzi-util-base/package.json',
];

function modVersion () {
    files.forEach(file => {
        let pkg = require(file);
        pkg.version = version;
        fs.writeFile(file.substr(1), JSON.stringify(pkg, null, 4), 'utf8', (err) => {
            if (err) throw err;
        });
    });
}
let depFiles = [
    '../npm/all/package.json',
    '../npm/hanzi-util/package.json',
    '../npm/hanzi-util-base/package.json'
];

function modDep () {
    depFiles.forEach(file => {
        let pkg = require(file);
        let dep = pkg.dependencies;
        for (let key in dep) {
            if (key.substr(0, 6) === 'cnchar') {
                dep[key] = '^' + version;
            }
        }
        fs.writeFile(file.substr(1), JSON.stringify(pkg, null, 4), 'utf8', (err) => {
            if (err) throw err;
        });
    });
}

function task () {
    modVersion();
    modDep();
    copyToNPM();
    copyLatest();
    transEs6ByBabel();
}

function copyToNPM () {
    gulp.src('helper/README.md')
        .pipe(toc())
        .pipe(gulp.dest('.'))
        .pipe(gulp.dest('npm/cnchar'))
        .pipe(gulp.dest('npm/order'))
        .pipe(gulp.dest('npm/poly'))
        .pipe(gulp.dest('npm/trad'))
        .pipe(gulp.dest('npm/draw'))
        .pipe(gulp.dest('npm/idiom'))
        .pipe(gulp.dest('npm/xhy'));

    gulp.src(['src/main/*.json', 'src/main/index.d.ts', 'LICENSE'])
        .pipe(gulp.dest('npm/cnchar'));

    gulp.src(['src/plugin/order/*.json', 'LICENSE'])
        .pipe(gulp.dest('npm/order'));

    gulp.src(['src/plugin/poly/*.json', 'LICENSE'])
        .pipe(gulp.dest('npm/poly'));

    gulp.src(['src/plugin/trad/*.json', 'LICENSE'])
        .pipe(gulp.dest('npm/trad'));

    gulp.src(['src/plugin/draw/*.json', 'src/plugin/draw/index.d.ts', 'LICENSE'])
        .pipe(gulp.dest('npm/draw'));

    gulp.src(['src/plugin/idiom/*.json', 'src/plugin/idiom/index.d.ts', 'LICENSE'])
        .pipe(gulp.dest('npm/idiom'));

    gulp.src(['src/plugin/xhy/*.json', 'src/plugin/xhy/index.d.ts', 'LICENSE'])
        .pipe(gulp.dest('npm/xhy'));

    gulp.src(['src/main/index.d.ts', 'LICENSE'])
        .pipe(gulp.dest('npm/all'))
        .pipe(gulp.dest('npm/hanzi-util'))
        .pipe(gulp.dest('npm/hanzi-util-base'));
}
function copyLatest () {
    // gulp.src(`dist/*.${version}.min.js`)
    //     .pipe(rename(function (path) {
    //         path.basename = path.basename.replace(version, 'latest');
    //         return path;
    //     }))
    //     .pipe(gulp.dest('dist'));
    // ['cnchar', 'order', 'poly', 'trad', 'draw'].forEach(name => {
    //     gulp.src(`dist/*.${version}.min.js`)
    //         .pipe(rename(function (path) {
    //             path.basename = path.basename.replace(version + '.', '');
    //             return path;
    //         }))
    //         .pipe(gulp.dest('npm/' + name));
    // });
    gulp.src(`npm/all/cnchar.all.min.js`)
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('cnchar.all.min', 'hanzi.util.min');
            return path;
        }))
        .pipe(gulp.dest('npm/hanzi-util'));
    gulp.src(`npm/cnchar/cnchar.min.js`)
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('cnchar.min', 'hanzi.base.min');
            return path;
        }))
        .pipe(gulp.dest('npm/hanzi-util-base'));
}
function transEs6ByBabel () {
    gulp.src('src/main/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/cnchar'));

    gulp.src('src/plugin/order/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/order'));

    gulp.src('src/plugin/poly/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/poly'));

    gulp.src('src/plugin/trad/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/trad'));

    gulp.src('src/plugin/draw/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/draw'));

    gulp.src('src/plugin/idiom/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/idiom'));

    gulp.src('src/plugin/xhy/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/xhy'));
    // gulp.src('src/plugin/all/*.js')
    //     .pipe(babel({presets: ['@babel/env']}))
    //     .pipe(gulp.dest('npm/all'));
}

task();