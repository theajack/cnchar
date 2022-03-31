const gulp = require('gulp');
const rename = require('gulp-rename');
const fs = require('fs');
const toc = require('gulp-markdown-toc');
const version = require('../package.json').version;

const plugins = ['order', 'poly', 'trad', 'draw', 'idiom', 'xhy', 'radical'];

const alias = ['cnchar-all', 'hanzi-util', 'hanzi-util-base'];

const depFiles = alias.map(alia => `../src/cnchar/alias/${alia}/package.json`);

const files = [
    '../src/cnchar-types/package.json',
    '../src/cnchar/main/package.json',
    ...plugins.map(plugin => `../src/cnchar/plugin/${plugin}/package.json`),
    ...depFiles,
];

function modVersion () {
    files.forEach(file => {
        const pkg = require(file);
        pkg.version = version;
        if (file.indexOf('cnchar-types') === -1) {
            if (!pkg.dependencies) {
                pkg.dependencies = {};
            }
            pkg.dependencies['cnchar-types'] = `^${version}`;
        }
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
}

function buildPluginGulpFiles (plugin) {
    const path = `src/cnchar/plugin/${plugin}/`;
    return [`${path}index.d.ts`, `${path}package.json`];
}

function gulpPlugin (plugin) {
    gulp.src(buildPluginGulpFiles(plugin))
        .pipe(gulp.dest(`npm/packages/${plugin}`));
}

function copyToNPM () {
    let gulpReadme = gulp.src(['helper/README.md', 'LICENSE'])
        .pipe(toc())
        .pipe(gulp.dest('.'))
        .pipe(gulp.dest('npm/packages/cnchar'));

    plugins.forEach(plugin => {
        gulpReadme = gulpReadme.pipe(gulp.dest(`npm/packages/${plugin}`));
    });
    alias.forEach(alia => {
        gulpReadme = gulpReadme.pipe(gulp.dest(`npm/packages/${alia}`));
    });

    gulp.src(['src/cnchar/main/index.d.ts'])
        .pipe(gulp.dest('npm/packages/cnchar'))
        .pipe(gulp.dest('npm/packages/hanzi-util-base'));
    
    gulp.src(['src/cnchar/alias/cnchar-all/index.d.ts'])
        .pipe(gulp.dest('npm/packages/cnchar-all'))
        .pipe(gulp.dest('npm/packages/hanzi-util'));

    gulp.src(['src/cnchar/main/package.json'])
        .pipe(gulp.dest('npm/packages/cnchar'));
    
    copyCncharTypes(gulpReadme);
    
    alias.forEach(alia => {
        gulp.src(`src/cnchar/alias/${alia}/package.json`)
            .pipe(gulp.dest(`npm/packages/${alia}`));
    });
        
    plugins.forEach(plugin => {
        gulpPlugin(plugin);
    });
}

function copyCncharTypes (gulpReadme) {
    gulp.src(['src/cnchar-types/**/*.ts', 'src/cnchar-types/package.json'])
        .pipe(gulp.dest('npm/packages/cnchar-types'));

    gulpReadme.pipe(gulp.dest(`npm/packages/cnchar-types`));
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
    //         .pipe(gulp.dest('npm/packages/' + name));
    // });
    gulp.src(`npm/packages/cnchar-all/cnchar.all.min.js`)
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('cnchar.all.min', 'hanzi.util.min');
            return path;
        }))
        .pipe(gulp.dest('npm/packages/hanzi-util'));
    gulp.src(`npm/packages/cnchar/cnchar.min.js`)
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('cnchar.min', 'hanzi.base.min');
            return path;
        }))
        .pipe(gulp.dest('npm/packages/hanzi-util-base'));
}


task();