const gulp = require('gulp');
const rename = require('gulp-rename');
const toc = require('gulp-markdown-toc');
const {Packages} = require('./tool');
const generatePackage = require('./build-plugin-pkg-json');
const buildReadme = require('./build-readme');

const {alias, plugins} = Packages;

function buildPackageJson () {
    [
        {
            name: 'cnchar',
            isPlugin: false,
            isTypes: false,
        },
        {
            name: 'cnchar-types',
            isPlugin: false,
            isTypes: true,
        },
        ...alias.map(name => {
            return {
                name,
                isPlugin: false,
            };
        }),
        ...plugins.map(name => {
            return {
                name,
                isPlugin: true,
            };
        }),
    ].forEach(item => {
        generatePackage(item);
    });
}


function task () {
    copyToNPM();
    copyLatest();
    buildReadme();
}

function buildPluginGulpFiles (plugin) {
    const path = `src/cnchar/plugin/${plugin}/`;
    return [`${path}index.d.ts`];
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
    gulp.src(['src/cnchar-types/**/*.ts'])
        .pipe(gulp.dest('npm/packages/cnchar-types'))
        .on('end', () => {
            buildPackageJson(); // 必须在这个之后执行，否则 npm/packages/cnchar-types 目录不存在
        });

    gulpReadme.pipe(gulp.dest(`npm/packages/cnchar-types`));
}

function copyLatest () {
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