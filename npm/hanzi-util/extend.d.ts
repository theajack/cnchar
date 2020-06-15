declare type spellArgs = 'array' | 'low' | 'up' | 'first' | 'poly' | 'tone' | 'simple' | 'trad';
declare type strokeArgs = 'letter' | 'shape' | 'count' | 'name' | 'detail' | 'array' | 'order' | 'simple' | 'trad';

interface String {
    spell(...args: Array<spellArgs>): string | Array<any>;
    stroke(...args: Array<strokeArgs>): number | Array<any>;
    convertSimpleToTrad(): string;
    convertSimpleToSpark(): string;
    convertTradToSimple(): string;
    convertTradToSpark(): string;
    convertSparkToSimple(): string;
    convertSparkToTrad(): string;
}