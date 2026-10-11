/*
 * 包清单：集中描述每个可发布包的目录、UMD 全局名与产物文件名。
 * 供 build / publish / post-build / clean 等脚本复用。
 */

export const mainPackage = {
    dir: 'cnchar',
    name: 'cnchar',
    global: 'cnchar',
    file: 'cnchar.min.js',
};

export const pluginPackageNames = [
    'poly',
    'order',
    'trad',
    'draw',
    'idiom',
    'xhy',
    'radical',
    'words',
    'explain',
    'voice',
    'random',
    'input',
    'code',
    'info',
    'name',
];

export const plugins = pluginPackageNames.map((plugin) => ({
    dir: `cnchar-${plugin}`,
    name: `cnchar-${plugin}`,
    global: `cnchar${plugin[0].toUpperCase()}${plugin.slice(1)}`,
    file: `cnchar.${plugin}.min.js`,
}));

export const allPackage = {
    dir: 'cnchar-all',
    name: 'cnchar-all',
    global: 'cncharAll',
    file: 'cnchar.all.min.js',
};

/** 由其他包产物复制而来（历史行为） */
export const copies = [
    {
        dir: 'hanzi-util',
        file: 'hanzi.util.min.js',
        from: 'cnchar-all/cnchar.all.min.js',
        name: 'hanzi-util',
    },
    {
        dir: 'hanzi-util-base',
        file: 'hanzi.base.min.js',
        from: 'cnchar/cnchar.min.js',
        name: 'hanzi-util-base',
    },
];

/** 需要独立 vite 构建的全部包 */
export const buildPackages = [mainPackage, ...plugins, allPackage];

/** 全部需要发布/复制的包（含类型包与别名包） */
export const allPublishDirs = [
    'cnchar-types',
    ...buildPackages.map((p) => p.dir),
    ...copies.map((p) => p.dir),
];
