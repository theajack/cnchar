import cnchar from 'cnchar';
import order from 'cnchar-order';
import trad from 'cnchar-trad';
import poly from 'cnchar-poly';
import draw from 'cnchar-draw';
import idiom from 'cnchar-idiom';
import xhy from 'cnchar-xhy';
import radical from 'cnchar-radical';
import words from 'cnchar-words';
import explain from 'cnchar-explain';
import voice from 'cnchar-voice';
import random from 'cnchar-random';
import input from 'cnchar-input';
import code from 'cnchar-code';
import info from 'cnchar-info';
import name from 'cnchar-name';
cnchar.use(
    order, trad, poly, draw, idiom, xhy,
    radical, words, explain, voice, random,
    input, code, info, name
);
export default cnchar;
