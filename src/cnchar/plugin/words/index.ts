
import {IPlugin} from 'cnchar-types/main/common';
import {IWords} from 'cnchar-types/plugin/words';
import {addWords, args, getDict, setCnchar, words} from './words';

const plugin: IPlugin = {
    pluginName: 'words',
    install (cnchar) {
        setCnchar(cnchar);
        words.addWords = addWords;
        return {words};
    },
    args: args,
    dict: getDict(),
};

if (typeof window === 'object') {
    window.CncharWords = words;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(words, plugin) as IWords & IPlugin;