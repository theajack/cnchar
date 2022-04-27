/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:03:21
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-14 22:30:14
 * @FilePath: /cnchar/src/cnchar/common/build-resource.ts
 * @Description: Coding something
 */

import ICnChar from 'cnchar-types';

export const BASE_DIR = 'https://cdn.jsdelivr.net/npm/cnchar-data@latest/';

export function buildResourceBank (dir: string) {

    let cncharResourceBase = '';

    const DEFAULT_RESOURCE_BASE = `${BASE_DIR}${dir}/`;

    let resourceBase = '';

    return {
        setResourceBase (url: string): void {
            resourceBase = url;
        },
        getResourceBase (): string {
            return resourceBase || cncharResourceBase || DEFAULT_RESOURCE_BASE;
        },
        initResourceFromCnchar (cnchar: ICnChar) {
            cncharResourceBase = `${cnchar._.getResourceBase()}${dir}/`;
        }
    };
}
