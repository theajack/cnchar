
import {IPlugin} from 'cnchar-types/main/common';
import {IVoice} from 'cnchar-types/plugin/voice';
import {voice, setCnchar} from './voice';
import {initResourceFromCnchar, setResourceBase} from './resource';
import {recognize, speak} from './speech-api';

const plugin: IPlugin = {
    pluginName: 'voice',
    install (cnchar) {
        setCnchar(cnchar);
        initResourceFromCnchar(cnchar);
        voice.speak = speak;
        voice.recognize = recognize;
        voice.setResourceBase = setResourceBase;
        return {voice};
    },
};

if (typeof window === 'object') {
    window.CncharVoice = voice;
    if (window.CnChar) window.CnChar.use(plugin);
}

export default Object.assign(voice, plugin) as IVoice & IPlugin;