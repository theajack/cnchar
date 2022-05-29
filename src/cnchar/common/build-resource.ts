/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:03:21
 * @LastEditors: tackchen
 * @LastEditTime: 2022-05-24 08:02:34
 * @FilePath: /cnchar/src/cnchar/common/build-resource.ts
 * @Description: Coding something
 */

import ICnChar from 'cnchar-types';

export const BASE_DIR = 'https://fastly.jsdelivr.net/npm/cnchar-data@latest/';

export function buildResourceBank (dir: string) {

    const DEFAULT_RESOURCE_BASE = `${BASE_DIR}${dir}/`;

    let getBaseDIR = () => DEFAULT_RESOURCE_BASE;

    let resourceBase = '';

    return {
        setResourceBase (url: string): void {
            resourceBase = url;
        },
        getResourceBase (): string {
            return resourceBase || getBaseDIR() || DEFAULT_RESOURCE_BASE;
        },
        initResourceFromCnchar (cnchar: ICnChar) {
            getBaseDIR = () => `${cnchar._.getResourceBase()}${dir}/`;
        }
    };
}
