declare type SpellArg = 'array' | 'low' | 'up' | 'first' | 'poly' | 'tone' | 'simple' | 'trad';

interface String {
    convertSimpleToTrad(): string;
    convertSimpleToSpark(): string;
    convertTradToSimple(): string;
    convertTradToSpark(): string;
    convertSparkToSimple(): string;
    convertSparkToTrad(): string;
}