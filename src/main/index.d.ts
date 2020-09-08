import './extend';

declare type spellArg = 'array' | 'low' | 'up' | 'first' | 'poly' | 'tone' | 'simple' | 'trad';
declare type strokeArg = 'letter' | 'shape' | 'count' | 'name' | 'detail' | 'array' | 'order' | 'simple' | 'trad';
declare type spellToWordArg = 'poly' | 'alltone' | 'array' | 'simple' | 'trad';
declare type strokeToWordArg = 'array' | 'simple' | 'trad';
declare type pluginArg = 'order' | 'trad' | 'poly' | 'draw' | 'idiom' | 'xhy' | 'radical';
declare type toneType = 0 | 1 | 2 | 3 | 4;
declare type compareType = 'more' | 'less' | 'even';

declare interface spellInfoReturnStatic {
    spell: string;
    initial: string;
    final: string;
    tone: number;
    index: number;
}
export declare interface CnCharStatic {
    spell(sentence: string, ...args: Array<spellArg>): string | Array<any>;
    stroke(sentence: string, ...args: Array<strokeArg>): number | Array<any>;
    use(...plugins: Array<Function>): void;
    spellToWord(spell: string, ...args: Array<spellToWordArg>): string | Array<string>;
    strokeToWord(stroke: number, ...args: Array<strokeToWordArg>): string | Array<string>;
    spellInfo: {
        (spell: string): spellInfoReturnStatic;
        tones: Array<string>;
        initials: Array<string>;
    };
    plugins: Array<pluginArg>;
    type: {
        spell: object;
        stroke: object;
        spellToWord: object;
        strokeToWord: object;
        orderToWord?: object;
        idiom?: object;
        xhy?: object;
        radical?: object;
    };
    check: boolean;
    readonly version: string;

    transformTone(spell: string, tone?: boolean, type?: 'low' | 'up'): {
        spell: string;
        tone: toneType;
        index: number; 
        isTrans: boolean;
    };
    isCnChar(word: string): boolean;
    compareSpell(spell1: string, spell2: string, tone?: boolean): compareType;
    compareStroke(stroke1: string | number, stroke2: string | number): compareType;
    sortSpell(spells:Array<string> | string, ...args: Array<'tone'|'desc'>): Array<string> | string;
    sortStroke(strokes:Array<string|number> | string, desc?: 'desc'): Array<string> | string;
    
}

declare const cnchar: CnCharStatic;

export default cnchar;