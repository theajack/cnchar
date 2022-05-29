/*
 * @Author: tackchen
 * @Date: 2022-04-14 22:38:32
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-28 10:58:14
 * @FilePath: /cnchar/src/cnchar/plugin/voice/voice.ts
 * @Description: Coding something
 */
import {mapJson, _warn} from '@common/util';
import ICnChar from 'cnchar-types';
import {Json} from 'cnchar-types/main/common';
import {IVoice, IVoiceOptions, IVoicePlayer, IVoicePlayIniter} from 'cnchar-types/plugin/voice';
import {getResourceBase} from './resource';
import {loadAudos, playMp3Buffer} from './play-mp3';
import {mergeVoiceOption} from './options';

const TempDict: Json<string> = {};

export function getTempDict () {
    return TempDict;
}

export const arg: Json = {
};

let _cnchar: ICnChar;
export function setCnchar (cnchar: ICnChar) {
    _cnchar = cnchar;
}

async function voiceAudios ({
    audioList,
    index = 0,
    offset = 0,
    isPaused,
    onNext,

    loop,
    volume,
    rate,
    oninit,
    onComplete,
    onSingleComplete
}: {
    audioList: (AudioBuffer|null)[];
    index?: number;
    offset?: number,
    isPaused: () => boolean;
    onNext: (index: number) => void;
    oninit?: (initer: IVoicePlayIniter) => void;
} & IVoiceOptions) {
    console.log(index);
    const buffer = audioList[index];
    const success = buffer ? await playMp3Buffer({buffer, volume, rate, offset, oninit}) : false;
    if (isPaused()) return;
    const duration = buffer ? buffer.duration : 0;
    if (onSingleComplete) onSingleComplete({index, duration, success});
    
    index += 1;
    if (index >= audioList.length) {
        index = (loop) ? 0 : -1;
        if (onComplete) onComplete({} as any);
    }
    if (index >= 0) {
        voiceAudios({
            audioList, isPaused, onNext, index, loop, volume, rate,
            onComplete, onSingleComplete
        });
        if (onNext) onNext(index);
    }
}

function createVoicePlayer (urlList: string[], options: IVoiceOptions) {
    let audioIndex = 0;
    let paused = false;
    let playing = false;
    let initer: IVoicePlayIniter = {
        stop () {},
        getCurrentTime: () => 0,
        getDuration: () => 0,
    };
    let pauseTime = 0;

    let totalPlayedTime = 0;

    let audioList: (AudioBuffer|null)[] | null = null;

    let playSuccess = true;

    const {onSingleComplete, onComplete} = options;
    options.onSingleComplete = (data) => {
        if (paused) return;
        if (onSingleComplete) onSingleComplete(data);
        if (!data.success) {
            playSuccess = false;
        }
        totalPlayedTime += initer.getDuration();
    };

    options.onComplete = () => {
        if (paused) return;
        reset();
        if (onComplete) {
            onComplete({
                duration: totalPlayedTime,
                success: playSuccess
            });
        }
    };

    const reset = () => {
        playSuccess = true;
        audioIndex = 0;
        playing = false;
        paused = false;
        totalPlayedTime = 0;
    };

    const start = (index?: number, offset?: number) => {
        if (!audioList) {
            console.warn('音频未加载完成');
            return;
        }
        voiceAudios({
            audioList,
            index,
            onNext (next) {audioIndex = next;},
            offset,
            oninit (_initer) {
                initer = _initer;
            },
            isPaused: () => paused,
            ...options
        });
    };
    const player = {
        getDurations () {
            if (!audioList) {
                console.warn('音频未加载完成');
                return [];
            }
            return audioList.map(buffer => {
                return buffer ? buffer.duration : 0;
            });
        },
        getTotalDuration () {
            const durations = this.getDurations();
            let sum = 0;
            durations.forEach(n => {sum += n;});
            return sum;
        },
        getCurrentDuration () {
            return initer.getDuration();
        },
        getCurrentTime () {
            return initer.getCurrentTime();
        },
        getPlayTime () {
            return totalPlayedTime + initer.getCurrentTime();
        },
        start () {
            this.stop();
            playing = true;
            start();
        },
        stop () {
            reset();
            initer.stop();
        },
        pause () {
            if (paused) return;
            paused = true;
            pauseTime = this.getCurrentTime();
            // console.info('pause', audioIndex, pauseTime);
            initer.stop();
        },
        resume () {
            if (!paused) return;
            paused = false;
            // console.info('resume', audioIndex, pauseTime);
            start(audioIndex, pauseTime);
        },
        isPaused: () => paused,
        isPlaying: () => playing,
        getCurrentIndex: () => audioIndex,
    };

    loadAudos(urlList).then(audios => {
        audioList = audios;
        if (options.autoStart) {
            player.start();
        }
        if (options.onAudioLoaded) options.onAudioLoaded(audioList);
    });

    return player;
}

export const voice = ((word: string, options: IVoiceOptions) => {
    if (!_cnchar) {
        _warn('使用voice前请先安装cnchar');
        return {} as IVoicePlayer;
    }
    const args = mergeVoiceOption(options);
    
    const urlList = getVoiceAudios(word);

    return createVoicePlayer(urlList, args);
}) as IVoice;

function getVoiceAudios (word: string) {
    if (TempDict[word]) {
        return [TempDict[word]];
    } else {
        return (_cnchar.spell(word, 'tone', 'flat', 'array', 'low') as string[]).map(spell => {
            return `${getResourceBase()}${spell}.mp3`;
        });
    }
}

voice.addVoice = (words:string | Json<string>, voice?: string) => {
    mapJson(words, voice, (k, v) => {
        TempDict[k] = v;
    });
};

voice.getVoiceList = getVoiceAudios;


