/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:00:04
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-14 23:01:07
 * @FilePath: /cnchar/src/cnchar/plugin/voice/resource.ts
 * @Description: Coding something
 */

import {buildResourceBank} from '@common/build-resource';

export const {
    getResourceBase,
    setResourceBase,
    initResourceFromCnchar,
} = buildResourceBank('voice');