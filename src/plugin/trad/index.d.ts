import './extend';

declare const trad: Function;

declare module 'cnchar' {
    interface CnCharStatic {
        convert: {
            simpleToSpark(sentence: string): string;
            simpleToTrad(sentence: string): string;
            sparkToSimple(sentence: string): string;
            sparkToTrad(sentence: string): string;
            tradToSimple(sentence: string): string;
            tradToSpark(sentence: string): string;
        };
    }
}

export default trad;