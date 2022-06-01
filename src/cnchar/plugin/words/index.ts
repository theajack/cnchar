
import {IPlugin} from 'cnchar-types/main/common';
import {IWords} from 'cnchar-types/plugin/words';
import {addWords, args, getDict, setCnchar, words} from './words';

const plugin: IPlugin & IWords = Object.assign(words, {
    pluginName: 'words',
    install (cnchar) {
        setCnchar(cnchar);
    },
    addWords,
    args,
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharWords = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;
