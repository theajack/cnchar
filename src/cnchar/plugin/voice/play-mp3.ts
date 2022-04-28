/*
 * @Author: tackchen
 * @Date: 2022-04-14 23:03:31
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-28 16:18:33
 * @FilePath: /cnchar/src/cnchar/plugin/voice/play-mp3.ts
 * @Description: Coding something
 */

import {Env} from '@common/adapter';
import {IVoicePlaySingleFromBuffer, IVoicePlaySingleFromUrl} from 'cnchar-types/plugin/voice';

declare const wx: any;

const audioContext: AudioContext | null = (() => {
    if (Env === 'miniapp') {
        if (!wx.createWebAudioContext) {
            console.log('wx.createWebAudioContext not found');
            return null;
        };
        return wx.createWebAudioContext();
    }
    if (Env === 'web') {
        const win = (window as any);
        const AudioContext = (win.AudioContext || win.webkitAudioContext || win.mozAudioContext);
        if (!AudioContext) {
            console.log('当前环境不支持web audio');
            return null;
        };
        return new AudioContext();
    }
    return null;
})();

export const loadAudos = (() => {
    return (urls: string[]) => {
        return Promise.all(
            urls.map(url => loadAudio(url))
        );
    };
})();

const loadAudio = ((() => {
    if (!audioContext) return () => Promise.resolve(null);

    const decodeArrayBuffer = (ab: ArrayBuffer, resolve: (buffer: AudioBuffer|null)=>void) => {
        audioContext.decodeAudioData(ab, (buffer) => {
            resolve(buffer);
        }, (err: any) => {
            console.error('decodeAudioData fail', err);
            resolve(null);
        });
    };
    
    if (Env === 'miniapp') {
        return (url: string) => {
            return new Promise((resolve) => {
                wx.request({
                    url,
                    responseType: 'arraybuffer',
                    success: (res: any) => {
                        decodeArrayBuffer(res.data, resolve);
                    },
                    fail: (res: any) => {
                        console.error('request fail', res);
                        resolve(null);
                    }
                });
            });
        };
    }

    if (Env === 'web') {
        return (url: string) => {
            return new Promise((resolve) => {
                const xhr = new window.XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';
                xhr.onreadystatechange = () => {
                    if (xhr.status === 200) {
                        if (xhr.readyState === 4) {
                            decodeArrayBuffer(xhr.response, resolve);
                        }
                    } else {
                        resolve(null);
                    }
                };
                xhr.onerror = () => {resolve(null);};
                xhr.ontimeout = () => {resolve(null);};
                xhr.send();
            });
        };
    }

    return (url: string) => {
        console.log('node 环境暂时不支持voice', url);
        return Promise.resolve(null);
    };
})()) as ((url: string)=>Promise<AudioBuffer|null>);

export async function playMp3Url ({url, rate = 1, volume = 1, offset = 0, oninit}: IVoicePlaySingleFromUrl) {
    const result = await loadAudio(url);
    if (result) {
        return playMp3Buffer({buffer: result, rate, volume, offset, oninit});
    }
    return false;
}

let lastCurrentTime = 0;
export function playMp3Buffer ({
    buffer, rate = 1, volume = 1, offset = 0, oninit
}: IVoicePlaySingleFromBuffer): Promise<boolean> {
    if (!audioContext) return Promise.resolve(false);
    return new Promise(async (resolve) => {
        const source = audioContext.createBufferSource();
        source.playbackRate.value = rate;
        source.buffer = buffer;
        
        if (audioContext.createGain) {
            const gain = audioContext.createGain();
            gain.gain.value = volume;
            source.connect(gain);
            gain.connect(audioContext.destination);
        } else {
            source.connect(audioContext.destination);
        }
        lastCurrentTime = audioContext.currentTime;
        // console.info('resume', offset, lastCurrentTime);
        source.start(0, offset);
        source.onended = () => {
            resolve(true);
            source.disconnect();
        };
        if (oninit) {
            oninit({
                getDuration: () => (buffer as AudioBuffer).duration,
                getCurrentTime: () => {
                    console.log('getCurrentTime', audioContext.currentTime, lastCurrentTime);
                    return audioContext.currentTime - lastCurrentTime;
                },
                stop: () => {source.stop();},
            });
        }
    });
}