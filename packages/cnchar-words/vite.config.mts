import {libConfig} from '../../scripts/vite-lib';

export default libConfig({
    entry: 'src/index.ts',
    name: 'cncharWords',
    fileName: 'cnchar.words.min.js',
});
