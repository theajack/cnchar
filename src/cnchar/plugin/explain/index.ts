
import {IPlugin} from 'cnchar-types/main/common';
import {IExplain} from 'cnchar-types/plugin/explain';
import {explain, setCnchar, args} from './explain';
import {initResourceFromCnchar, setResourceBase} from './resource';

const plugin: IPlugin = {
    pluginName: 'explain',
    install (cnchar) {
        setCnchar(cnchar);
        initResourceFromCnchar(cnchar);
        explain.setResourceBase = setResourceBase;
        return {explain};
    },
    args: args,
};

if (typeof window === 'object') {
    window.CncharExplain = explain;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(explain, plugin) as IExplain & IPlugin;