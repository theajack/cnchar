/*
 * @Author: tackchen
 * @Date: 2022-04-15 11:39:02
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-27 10:13:14
 * @FilePath: /cnchar/src/cnchar/plugin/voice/options.ts
 * @Description: Coding something
 */

import {IVoiceArgs, IVoiceOptions} from 'cnchar-types/plugin/voice';

const DefaultOption: IVoiceArgs = {
    loop: false,
    rate: 1,
    volume: 1,
    autoStart: true,
    onSingleComplete: () => {},
    onComplete: () => {},
};

export function mergeVoiceOption (options: IVoiceOptions): IVoiceArgs {
    return Object.assign({}, DefaultOption, options);
}