import spell from './dict/spell-dict-jian.json';
import stroke from './dict/stroke-count-jian.json';
import spellDefault from './dict/spell-default.json';
import info from './dict/info-dict.json';
import {Json} from 'cnchar-types/main/common';

export default {
    spell: spell as Json<string>,
    stroke: stroke as Json<string>,
    spellDefault: spellDefault as Json<string>,
    info: info as any
};