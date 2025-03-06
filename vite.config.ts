/*
 * @Author: theajack
 * @Date: 2023-04-04 23:20:27
 * @Description: Coding something
 */
import type { LibraryOptions, UserConfig } from 'vite';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { upcaseFirstLetter, deepAssign } from './build/utils';

// mode_[vegame|vephone|]_[extra]

const Mode = {
    Dev: 'dev',
    BuildSDK: 'sdk',
    BuildDemo: 'demo',
    Test: 'test',
    // BuildDTS: 'dts',
};

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ mode }: {mode: string}) => {

    console.log(`mode=${mode}`);

    const [ buildMode, pkgName ] = mode.split('_');

    console.log(`vite build mode=${buildMode}; pkgName=${pkgName};`);
    // mode=vapp__wts || mode=dev__wts

    console.log(`${Date.now()}:INFO: mode=${buildMode}, pkgName=${pkgName}`);

    const config = {
        [Mode.Dev]: geneDevConfig,
        [Mode.BuildDemo]: () => geneBuildDemoConfig(),
        [Mode.BuildSDK]: () => geneBuildSDKConfig(pkgName),
        [Mode.Test]: () => ({}),
        // [Mode.BuildDTS]: () => geneBuildDTSConfig(extra, pkgName),
    };

    const __DEV__ = buildMode === Mode.Dev;

    const CommonConfig: UserConfig = {
        worker: {
            format: 'iife',
        },
        define: {
            // ! vapp 也认为是 dev 环境 保留日志
            __DEV__: `${__DEV__}`,
            __VAPP__: `${__DEV__}`,
            // __VERSION__: `"${getVersion(
            //     buildMode === Mode.BuildSDK ? pkgName : void 0
            // )}"`,
            __WIN__: 'globalThis',
        },
        plugins: [
        ],
        resolve: {
            alias: {
            },
        },
    };
    return deepAssign(CommonConfig, config[buildMode]());
});

// ! Dev VApp 时的配置
function geneDevConfig (): UserConfig {
    return {
        plugins: Plugins.Demo,
        server: {
            host: '0.0.0.0',
            port: 8090,
            hmr: false,
            headers: { // 使用sharedArrayBuffer
                'Cross-Origin-Embedder-Policy': 'require-corp',
                'Cross-Origin-Opener-Policy': 'same-origin',
            },
        },
    };
}

function geneBuildDemoConfig (): UserConfig {
    return {
        plugins: Plugins.Demo,
        base: '/',
        build: {
            rollupOptions: {
                output: {
                    dir: resolve(__dirname, './dist'),
                },
                input: {
                    main: resolve(__dirname, './demo/index.html'),
                },
            },
        },
    };
}

const babelPlugin = () => (
    babel({
        exclude: 'node_modules/**',
        extensions: [ '.js', '.ts', 'tsx' ],
        configFile: resolve(__dirname, './build/babel.config.js'),
    })
);
function SDKlibConfig (pkgName: string): Partial<LibraryOptions> {
    return {
        name: upcaseFirstLetter(pkgName), // 包名
        formats: [ 'es', 'iife' ], // 打包模式，默认是es和umd都打
        fileName: (format: string) => `${pkgName}.${format}.min.js`,
    };
}

const Plugins = {
    BuildPackage: [
        babelPlugin(),
        cssInjectedByJsPlugin(),
    ],
    Demo: [
        legacy({
            targets: [ 'defaults', 'not IE 11' ],
        }), {
            name: 'copy-index-html',
            writeBundle () {
            },
        },
    ],
};

// ! 构建 SDK 时的配置
function geneBuildSDKConfig (pkgName: string): UserConfig {
    const pkgRoot = resolve(__dirname, `./packages/${pkgName}`);

    // 取SDK包的依赖;
    // const deps = require(resolve(pkgRoot, './package.json'));
    // ! VITE 文档说明： 注意，在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。
    return {
        plugins: [ cssInjectedByJsPlugin() ],
        build: {
            minify: true,
            lib: {
                entry: resolve(pkgRoot, 'src/index.ts'), // 打包的入口文件
                ...SDKlibConfig(pkgName),
            },
            rollupOptions: {
                // 不需要
                // external: [ ...Object.keys(deps.dependencies) ],
                plugins: Plugins.BuildPackage,
            },
            outDir: resolve(pkgRoot, 'dist'), // 打包后存放的目录文件
        },
    };
}


// function getVersion (name) {
//     return require(resolve(__dirname, `./packages/${name}/package.json`)).version;
// }
