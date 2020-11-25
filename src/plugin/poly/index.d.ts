declare const poly: Function;

declare module 'cnchar' {
    interface CnCharStatic {
        setPolyPhrase(word: string, spell: string): void;
        setPolyPhrase(json: {[key: string]: string}): void;
    }
}

export default poly;