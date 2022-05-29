import {ICnChar} from 'cnchar-types/main';
import {IRadical} from 'cnchar-types/plugin/radical';
import {IPlugin} from 'cnchar-types/main/common';
import {getDict, radical, setCnchar, setRadical} from './radical';

const plugin: IPlugin = {
    pluginName: 'radical',
    install (cnchar: ICnChar) {
        setCnchar(cnchar);
        radical.setRadical = setRadical;
        return {radical};
    },
    dict: getDict()
};

if (typeof window === 'object') {
    window.CncharRadical = radical;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(radical, plugin) as IRadical & IPlugin;