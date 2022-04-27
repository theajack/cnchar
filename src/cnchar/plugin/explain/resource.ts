/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:00:04
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-10 21:07:27
 * @FilePath: /cnchar/src/cnchar/plugin/explain/resource.ts
 * @Description: Coding something
 */

import {buildResourceBank} from '@common/build-resource';

export const {
    getResourceBase,
    setResourceBase,
    initResourceFromCnchar,
} = buildResourceBank('explanation');