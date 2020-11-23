declare const poly: Function;

declare module 'cnchar' {
    interface CnCharStatic {
        setPolyWord(word: string, spell: string): void;
        setPolyWord(json: {[key: string]: string}): void;
    }
}

export default poly;