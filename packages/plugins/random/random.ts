import {IRandom} from 'cnchar-types/plugin/random';
import {randomSpell, randomWord} from './plugins/cnchar';
import {usePlugin} from './store';
import {randomIdiom} from './plugins/idiom';
import {randomXHY} from './plugins/xhy';
import {randomWords} from './plugins/words';
import {randomWithInfo} from './plugins/info';

export const random: IRandom = {
    use: usePlugin,
    spell: randomSpell,
    word: randomWord,
    idiom: randomIdiom,
    xhy: randomXHY,
    words: randomWords,
    info: randomWithInfo,
};