/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:03:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-18 13:12:58
 * @FilePath: /cnchar/src/cnchar/common/build-resource.ts
 * @Description: Coding something
 */

import ICnChar from 'cnchar-types';

export const BASE_DIR = 'https://unpkg.com/cnchar-data@latest/';
// export const BASE_DIR = 'https://fastly.jsdelivr.net/npm/cnchar-data@latest/'; // jsdelivr 由于仓库太大被限制访问了

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
            const base = cnchar._.getResourceBase();
            if (base)
                getBaseDIR = () => `${base}${dir}/`;
        }
    };
}
