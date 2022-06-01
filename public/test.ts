// 验证webpack treeshake

import {isCnChar, _warn} from '../src/cnchar/common/util';

export function isCnChar2 (a: string) {
    return isCnChar(a);
}

export function _warn2 (a: string) {
    return _warn(a);
}