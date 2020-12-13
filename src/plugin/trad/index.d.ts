import './extend';

declare const trad: Function;

export declare interface ConvertInterface {
    simpleToSpark(sentence: string): string;
    simpleToTrad(sentence: string): string;
    sparkToSimple(sentence: string): string;
    sparkToTrad(sentence: string): string;
    tradToSimple(sentence: string): string;
    tradToSpark(sentence: string): string;
}
declare module 'cnchar' {
    interface CnCharStatic {
        convert: ConvertInterface;
    }
}

export default trad;