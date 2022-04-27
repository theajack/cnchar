/*
 * @Author: tackchen
 * @Date: 2022-04-15 11:37:04
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-27 08:19:31
 * @FilePath: /cnchar/src/cnchar/plugin/voice/speech-api.ts
 * @Description: Coding something
 */

import {IRecognize, IRecognizeOptions, ISpeak, ISpeakOptions} from 'cnchar-types/plugin/voice';

export const recognize: IRecognize = (() => {
    const win = window as any;
    const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        const recognize = ((options: IRecognizeOptions) => {
            console.warn('当前浏览器暂不支持', options);
            return {};
        }) as IRecognize;
        recognize.stop = () => {console.warn('当前浏览器暂不支持');};
        recognize.supported = false;
        return recognize;
    }

    let recognition: any = null;

    let result = '';
    let _onend: (result: string) => void;
    let _onspeechend: (result: string) => void;

    const init = () => {
        if (SpeechRecognition) {
            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            // recognition.lang = 'en-US';
            recognition.lang = 'zh-CN';

            recognition.onresult = function (rst: any) {
                if (rst.results && rst.results[0][0]) {
                    const transcript = rst.results[0][0].transcript;
                    result += transcript;
                    if (rst.results[0].isFinal) {
                        recognition.stop();
                        if (_onend) _onend(result);
                        result = '';
                    }
                }
            };

            recognition.onspeechend = function (e: any) {
                recognition.stop();
                if (_onspeechend) _onspeechend(e);
            };
        }
    };

    const recognize = (({
        onstart,
        onaudiostart,
        onspeechstart,
        onspeechend,
        onaudioend,
        onend
    }: IRecognizeOptions) => {
        if (!recognition) {
            init();
        }

        if (!recognition) {
            console.warn('当前浏览器暂不支持');
            return false;
        }

        if (onstart) onstart();
        if (onend) _onend = onend;
        if (onaudiostart) recognition.onaudiostart = onaudiostart;
        if (onspeechstart) recognition.onspeechstart = onspeechstart;
        if (onspeechend) _onspeechend = onspeechend;
        if (onaudioend) recognition.onaudioend = onaudioend;
        recognition.start();

        return recognition;
    }) as IRecognize;
    recognize.stop = () => {recognition.stop();};
    recognize.supported = true;
    return recognition;
})();

export const speak: ISpeak = (() => {
    const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;

    if (!SpeechSynthesisUtterance || !window.speechSynthesis) {
        const speak = ((options: ISpeakOptions) => {
            console.warn('当前浏览器暂不支持', options);
            return {} as SpeechSynthesisUtterance;
        }) as ISpeak;
        speak.cancel =
        speak.pause =
        speak.resume = () => { console.warn('当前浏览器暂不支持');};
        speak.supported = false;
        return speak;
    }

    const speak = (({
        text,
        lang = 'zh-CN',
        volume = 1,
        rate = 1,
        pitch = 1,
        onstart,
        onpause,
        onresume,
        onend,
        onerror,
    }: ISpeakOptions) => {
        const ssu = new SpeechSynthesisUtterance();
        ssu.lang = lang;
        ssu.volume = volume; // 音量0-1
        ssu.rate = rate; // 语速0.1-10
        ssu.pitch = pitch; // 音高0-2
        ssu.text = text;
        // ssu.voiceURI = ''; // 指定希望使用的声音
        if (onerror) ssu.onerror = onerror;
        if (onstart) ssu.onstart = onstart;
        if (onpause) ssu.onpause = onpause;
        if (onresume) ssu.onresume = onresume;
        if (onend) ssu.onend = onend;
        window.speechSynthesis.speak(ssu);
        return ssu;
    }) as ISpeak;

    speak.cancel = window.speechSynthesis.cancel;
    speak.pause = window.speechSynthesis.pause;
    speak.resume = window.speechSynthesis.resume;
    speak.supported = true;
    return speak;
})();