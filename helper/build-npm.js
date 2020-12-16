const gulp = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');
const babel = require('gulp-babel');
const toc = require('gulp-markdown-toc');
const version = require('../package.json').version;

const plugins = ['order', 'poly', 'trad', 'draw', 'idiom', 'xhy', 'radical'];

const alias = ['cnchar-all', 'hanzi-util', 'hanzi-util-base'];

const depFiles = alias.map(alia => `../src/alias/${alia}/package.json`);

const files = [
    '../src/main/package.json',
    ...plugins.map(plugin => `../src/plugin/${plugin}/package.json`),
    ...depFiles,
];

function modVersion () {
    files.forEach(file => {
        const pkg = require(file);
        pkg.version = version;
        fs.writeFile(file.substr(1), JSON.stringify(pkg, null, 4), 'utf8', (err) => {
            if (err) throw err;
        });
    });
}

function modDep () {
    depFiles.forEach(file => {
        const pkg = require(file);
        const dep = pkg.dependencies;
        for (const key in dep) {
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

function buildPluginGulpFiles (plugin) {
    const path = `src/plugin/${plugin}/`;
    return [`${path}types/*.*`, `${path}*.d.ts`];
}

function gulpPlugin (plugin) {
    gulp.src(buildPluginGulpFiles(plugin))
        .pipe(gulp.dest(`npm/${plugin}`));
}

function copyToNPM () {
    let gulpReadme = gulp.src(['helper/README.md', 'LICENSE'])
        .pipe(toc())
        .pipe(gulp.dest('.'))
        .pipe(gulp.dest('npm/cnchar'));

    plugins.forEach(plugin => {
        gulpReadme = gulpReadme.pipe(gulp.dest(`npm/${plugin}`));
    });

    gulp.src(['src/main/types/*.*', 'src/main/*.d.ts'])
        .pipe(gulp.dest('npm/cnchar'));
    
    plugins.forEach(plugin => {
        gulpPlugin(plugin);
    });

    gulp.src(['src/main/*.d.ts', 'src/main/types'])
        .pipe(gulp.dest('npm/hanzi-util-base'));

    gulp.src(['helper/all/*.d.ts'])
        .pipe(gulp.dest('npm/all'))
        .pipe(gulp.dest('npm/hanzi-util'));
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

    gulp.src('src/plugin/radical/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('npm/radical'));
        
    // gulp.src('src/plugin/all/*.js')
    //     .pipe(babel({presets: ['@babel/env']}))
    //     .pipe(gulp.dest('npm/all'));
}

task();