
import {IPlugin} from 'cnchar-types/main/common';
import {IVoice} from 'cnchar-types/plugin/voice';
import {voice, setCnchar, getTempDict} from './voice';
import {initResourceFromCnchar, setResourceBase} from './resource';
import {recognize, speak} from './speech-api';

const plugin: IPlugin & IVoice = Object.assign(voice, {
    pluginName: 'voice',
    install (cnchar) {
        setCnchar(cnchar);
        initResourceFromCnchar(cnchar);
    },
    speak,
    recognize,
    setResourceBase,
    dict: {temp: getTempDict()},
} as IPlugin);

if (typeof window === 'object') {
    window.CncharVoice = plugin;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default plugin;