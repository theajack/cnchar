import {Json} from '../../main/common';
import {ICnChar} from '../../main'; // ! important for declare module '../../main/index'

export interface IVoiceArgs {
    loop: boolean;
    rate: number;
    volume: number;
    autoStart: boolean;
    onSingleComplete: (options: {
        index: number;
        duration: number;
        success: boolean;
    }) => void;
    onComplete: (options: {
        duration: number;
        success: boolean;
    }) => void;
    onAudioLoaded: (data: (AudioBuffer|null)[]) => void;
}

export interface IVoicePlayer {
    getCurrentIndex(): number;
    getDurations(): Promise<number[]>;
    getTotalDuration(): Promise<number>;
    start(): void;
    stop(): void;
    pause(): void;
    resume(): void;
    isPaused(): boolean;
    isPlaying(): boolean;
}

export interface IVoicePlayIniter {
    getDuration: () => number;
    getCurrentTime: () => number;
    stop: () => void;
}

interface IVoicePlaySingleBase {
    rate?: number;
    volume?: number;
    offset?: number;
    oninit?: (initer: IVoicePlayIniter) => void;
}

export interface IVoicePlaySingleFromUrl extends IVoicePlaySingleBase {
    url: string;
}

export interface IVoicePlaySingleFromBuffer extends IVoicePlaySingleBase {
    buffer: AudioBuffer;
}

export type IVoiceOptions = {
    [prop in keyof IVoiceArgs]?: IVoiceArgs[prop];
}

export interface IVoice {
    (words: string, options: IVoiceOptions): IVoicePlayer;
    addVoice(json: Json<string>): void;
    addVoice(words: string, url: string): void;
    getVoiceList(word: string): string[];
    setResourceBase(url: string): void;

    speak: ISpeak;
    recognize: IRecognize;
}

export type TLang = 'zh-CN' | 'en-US' | 'ja-JP' | 'ko-KR' | 'zh-HK' | 'zh-TW';

export interface ISpeakOptions {
    lang?: TLang;
    volume?: number; // 0-1 音量
    rate?: number; // 0.1-10 语速
    pitch?: number; // 0-1 音高
    onstart?: (e: SpeechSynthesisEvent) => void;
    onpause?: (e: SpeechSynthesisEvent) => void;
    onresume?: (e: SpeechSynthesisEvent) => void;
    onerror?: (e: SpeechSynthesisErrorEvent) => void;
    onend?: (e: SpeechSynthesisEvent) => void;
}

export interface ISpeak {
    (text: string, options?: ISpeakOptions): SpeechSynthesisUtterance;
    cancel(): void;
    pause(): void;
    resume(): void;
    supported: boolean;
}

export interface IRecognizeOptions {
    lang?: TLang;
    onstart?: () => void;
    onaudiostart?: (e: any) => void;
    onaudioend?: (e: any) => void;
    onspeechstart?: (e: any) => void;
    onspeechend?: (e: any) => void;
    onerror?: (e: SpeechSynthesisErrorEvent) => void;
    onend?: (result: string) => void;
}

export interface IRecognize {
    (options?: IRecognizeOptions): any;
    stop(): void;
    supported: boolean;
}

declare global {
    interface Window {
        CncharVoice: IVoice,
    }
}

declare module '../../main/index' {
    interface ICnChar {
        voice: IVoice;
    }
}
