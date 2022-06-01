import {IRadical} from 'cnchar-types/plugin/radical';
import {IPlugin} from 'cnchar-types/main/common';
import {getDict, radical, setCnchar, setRadical} from './radical';


const plugin: IPlugin & IRadical = Object.assign(radical, {
    pluginName: 'radical',
    install (cnchar) {
        setCnchar(cnchar);
    },
    setRadical,
    dict: getDict(),
} as IPlugin);

if (typeof window === 'object') {
    window.CncharRadical = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;