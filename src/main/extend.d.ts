declare type spellArg = 'array' | 'low' | 'up' | 'first' | 'poly' | 'tone' | 'simple' | 'trad';
declare type strokeArg = 'letter' | 'shape' | 'count' | 'name' | 'detail' | 'array' | 'order' | 'simple' | 'trad';

interface String {
    spell(...args: Array<spellArg>): string | Array<any>;
    stroke(...args: Array<strokeArg>): number | Array<any>;
}

