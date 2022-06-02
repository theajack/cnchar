const version = require('../../package.json').version;
const fs = require('fs');
const path = require('path');

const BasePackage = {
    version,
    'description': '功能全面、多端支持的汉字拼音笔画 js 库',
    'typings': 'index.d.ts',
    'scripts': {},
    'repository': {
        'type': 'git',
        'url': 'git+https://github.com/theajack/cnchar.git'
    },
    'keywords': [
        '汉字拼音',
        '汉字笔画',
        '汉字可视化',
        '繁体字',
        '汉字编码',
        '汉字输入法',
        '语音合成',
        '语音识别',
        'theajack',
        'tackchen'
    ],
    'author': 'theajack',
    'license': 'MIT',
    'bugs': {
        'url': 'https://github.com/theajack/cnchar/issues'
    },
    'homepage': 'https://theajack.github.io/cnchar/',
};

module.exports = ({name, isPlugin = true, isTypes = false}) => {

    const pkgName = isPlugin ? `cnchar-${name}` : name;

    const jsHead = pkgName.replace(/-/g, '.');

    const pkg = {
        'name': pkgName,
        'main': `${jsHead}.min.js`,
        'unpkg': `${jsHead}.min.js`,
        'jsdelivr': `${jsHead}.min.js`,
        'dependencies': {
            'cnchar-types': `^${version}`
        }
    };

    if (isTypes) {
        delete pkg.dependencies;
        delete pkg.unpkg;
        delete pkg.jsdelivr;
        pkg.main = 'index.d.ts';
    }

    Object.assign(pkg, BasePackage);

    fs.writeFileSync(
        path.resolve(__dirname, `../../npm/packages/${name}/package.json`),
        JSON.stringify(pkg, null, 4),
        'utf8'
    );
    return pkg;
};