declare type strokeArg = 'letter' | 'shape' | 'count' | 'name' | 'detail' | 'array' | 'order' | 'simple' | 'trad';

interface String {
    stroke(...args: Array<strokeArg>): number | Array<any>;
}

