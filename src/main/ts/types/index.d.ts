import './extend';
import {has, _throw, _warn, isCnChar, mapJson} from '../util';
import {
    arg, removeTone, tones, checkArgs, transformTone,
    sumStroke, dealUpLowFirst
} from '../tool';
import {ConvertInterface} from '../../../plugin/trad/index';
import {Json} from './common';
import {setIntoJson} from '../config';


export declare type SpellArg = 'array' | 'low' | 'up' | 'first' | 'poly' | 'tone' | 'simple' | 'trad';
export declare type StrokeArg = 'letter' | 'shape' | 'count' | 'name' | 'detail' | 'array' | 'order' | 'simple' | 'trad';
export declare type SpellToWordArg = 'poly' | 'alltone' | 'array' | 'simple' | 'trad';
export declare type StrokeToWordArg = 'array' | 'simple' | 'trad';
declare type OrderToWordArg = 'match'  | 'matchorder' | 'contain' | 'start' | 'array' | 'simple' | 'trad';
declare type IdomArg = 'char' | 'stroke' | 'spell' | 'tone';
export declare type SortSpellArg = 'tone' | 'desc';

export declare type AllArgs = SpellArg | StrokeArg
    | SpellToWordArg | StrokeToWordArg | OrderToWordArg
    | IdomArg | SortSpellArg;

export declare type PluginArg = 'order' | 'trad' | 'poly' | 'draw' | 'idiom' | 'xhy' | 'radical';
export declare type ToneType = 0 | 1 | 2 | 3 | 4;
export declare type CompareType = 'more' | 'less' | 'even' | 'error';


export declare interface spellInfoReturnInterface {
    spell: string;
    initial: string;
    final: string;
    tone: number;
    index: number;
}

export declare interface CncharToolInterface {
    arg: typeof arg,
    has: typeof has,
    _throw: typeof _throw,
    tones: typeof tones,
    setIntoJson: typeof setIntoJson,
    _warn: typeof _warn,
    dealUpLowFirst: typeof dealUpLowFirst,
    removeTone: typeof removeTone,
    sumStroke: typeof sumStroke,
    isCnChar: typeof isCnChar,
    checkArgs: typeof checkArgs,
    transformTone: typeof transformTone,
    convert?: ConvertInterface, //
    dict: {
        getTradOrders?(): Json<string>;
        getTradCount?(): Json<string>;
    },
    mapJson: typeof mapJson,
    poly?: boolean,
}

export declare type TypeProp = 'spell' | 'stroke' | 'spellToWord' | 'strokeToWord' | 'orderToWord' | 'idiom' | 'xhy' | 'radical';

export declare type TypeValueObject = {
    [prop in AllArgs]?: AllArgs;
};

export declare interface CnCharInterface {
    [x: string]: any;
    spell(sentence: string, ...args: Array<SpellArg>): string | Array<any>;
    stroke(sentence: string, ...args: Array<StrokeArg>): number | Array<any>;
    use(...plugins: Array<Function>): void;
    spellToWord(spell: string, ...args: Array<SpellToWordArg>): string | Array<string>;
    strokeToWord(stroke: number, ...args: Array<StrokeToWordArg>): string | Array<string>;
    spellInfo: {
        (spell: string): spellInfoReturnInterface;
        tones: Array<string>;
        initials: Array<string>;
    };
    plugins: Array<PluginArg>;
    type: {
        [prop in TypeProp]?: TypeValueObject;
    };
    check: boolean;
    readonly version: string;

    transformTone(spell: string, tone?: boolean, type?: 'low' | 'up'): {
        spell: string;
        tone: ToneType;
        index: number;
        isTrans: boolean;
    };
    isCnChar(word: string): boolean;
    isPolyWord(word: string): boolean;
    compareSpell(spell1: string, spell2: string, tone?: boolean): CompareType;
    compareStroke(stroke1: string | number, stroke2: string | number): CompareType;
    sortSpell(spells:Array<string> | string, ...args: Array<SortSpellArg>): Array<string> | string;
    sortStroke(strokes:Array<string|number> | string, desc?: 'desc'): Array<string | number> | string;
    setSpellDefault(word: string, spell: string): void;
    setSpellDefault(json: {[key: string]: string}): void;
    setSpell(word: string, spells: string | Array<string>): void;
    setSpell(json: {[key: string]: string | Array<string>}): void;
    setStrokeCount(word: string, count: number): void;
    setStrokeCount(json: {[key: string]: number}): void;
    shapeSpell(spell: string): string;

    _: CncharToolInterface;
}

declare const cnchar: CnCharInterface;

export default cnchar;