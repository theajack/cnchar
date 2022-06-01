
import {IPlugin} from 'cnchar-types/main/common';
import {IExplain} from 'cnchar-types/plugin/explain';
import {explain, setCnchar, args, getTempDict} from './explain';
import {initResourceFromCnchar, setResourceBase} from './resource';

const plugin: IPlugin & IExplain = Object.assign(explain, {
    pluginName: 'explain',
    install (cnchar) {
        setCnchar(cnchar);
        initResourceFromCnchar(cnchar);
    },
    setResourceBase,
    args: args,
    dict: {
        temp: getTempDict()
    }
} as IPlugin);

if (typeof window === 'object') {
    window.CncharExplain = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;
