import HanziWriter from 'cnchar-types/plugin/draw/hanzi-writer';

export function addWordNotFoundCallback(callback: (word: string)=>void): void;
export function triggerWordNotFound(word: string): void;

export default HanziWriter;