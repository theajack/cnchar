import cnchar from '../../main';
import order from '../../plugin/order';
import trad from '../../plugin/trad';
import poly from '../../plugin/poly';
import draw from '../../plugin/draw';
import idiom from '../../plugin/idiom';
import xhy from '../../plugin/xhy';
import radical from '../../plugin/radical';
import words from '../../plugin/words';
import explain from '../../plugin/explain';
import voice from '../../plugin/voice';
import random from '../../plugin/random';
import input from '../../plugin/input';
import code from '../../plugin/code';
import info from '../../plugin/info';
import name from '../../plugin/name';
cnchar.use(
    order, trad, poly, draw, idiom, xhy,
    radical, words, explain, voice, random,
    input, code, info, name
);
export default cnchar;