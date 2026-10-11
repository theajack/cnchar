/*
 * 共享的 vite library(UMD) 构建配置工厂
 *
 * 所有可发布包（cnchar / cnchar-* / cnchar-all）通过该工厂生成 vite 配置，
 * 以保证产物与历史 webpack 产物在以下方面完全一致：
 *   - 输出文件名（cnchar.min.js / cnchar.<plugin>.min.js / cnchar.all.min.js）
 *   - UMD 全局变量名（cnchar / cncharXxx / cncharAll）
 *   - 导出方式为 default 导出（等价于 webpack libraryExport: 'default'）
 *
 * 约定：构建命令在各自包目录中执行（pnpm -r run build），因此以 process.cwd()
 * 作为包目录。
 */
import {defineConfig, type AliasOptions, type Plugin, type UserConfig} from 'vite';
import path from 'node:path';

/**
 * cnchar-types 是纯类型包（.d.ts），运行时不需要任何实现。
 * 部分源码存在 `import 'cnchar-types/plugin/xxx'` 这类副作用导入，
 * 这里统一将其解析为空模块，避免 rollup 去解析 .d.ts 文件。
 */
export function cncharTypesStub (): Plugin {
    const VIRTUAL_ID = '\0cnchar-types-stub';
    return {
        name: 'cnchar-types-stub',
        enforce: 'pre',
        resolveId (source: string) {
            if (source === 'cnchar-types' || source.startsWith('cnchar-types/')) {
                return VIRTUAL_ID;
            }
            return null;
        },
        load (id: string) {
            if (id === VIRTUAL_ID) return 'export default {};';
            return null;
        },
    };
}

export interface LibOptions {
    /** 入口文件，相对包目录，例如 'src/index.ts' */
    entry: string;
    /** UMD 全局变量名 */
    name: string;
    /** 产物文件名，例如 'cnchar.min.js' */
    fileName: string;
    /** 构建 target，默认 es2015 */
    target?: string;
    /** 额外的模块别名（cnchar-all 用于指向各子包源码） */
    alias?: AliasOptions;
}

export function libConfig (options: LibOptions): UserConfig {
    const pkgDir = process.cwd();
    return defineConfig({
        root: pkgDir,
        publicDir: false,
        build: {
            target: options.target || 'es2015',
            outDir: '.',
            emptyOutDir: false,
            copyPublicDir: false,
            minify: 'esbuild',
            lib: {
                entry: path.resolve(pkgDir, options.entry),
                name: options.name,
                formats: ['umd'],
                fileName: () => options.fileName,
            },
            rollupOptions: {
                // 与历史 webpack externals 保持一致
                external: ['https'],
                output: {
                    // 等价于 webpack libraryExport: 'default'
                    exports: 'default',
                    globals: {https: 'https'},
                },
            },
        },
        resolve: {
            alias: options.alias,
        },
        plugins: [cncharTypesStub()],
    });
}
