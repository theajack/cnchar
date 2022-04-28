/*
 * @Author: tackchen
 * @Date: 2022-04-10 19:03:08
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-28 12:36:21
 * @FilePath: /cnchar/src/cnchar/common/request-json.ts
 * @Description: Coding something
 */

import {Json} from 'src/cnchar-types/main/common';
import {Env} from './adapter';
import {parseJSON, _warn} from './util';

let nodeHttps: any = null;

export const requestJson = (() => {
    if (Env === 'miniapp') return wxGetJson;
    if (Env === 'web') return webGetJson;
    return nodeGetJson;
})();

// 浏览器环境
function webGetJson (url: string): Promise<Json | null> {
    return new Promise((resolve) => {
        const xhr = new window.XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.status === 200) {
                if (xhr.readyState === 4) {
                    resolve(parseJSON(xhr.responseText) as any);
                }
            } else {
                resolve(null);
            }
        };
        xhr.onerror = () => {resolve(null);};
        xhr.ontimeout = () => {resolve(null);};
        xhr.send();
    });
}

declare const wx: any;
function wxGetJson (url: string): Promise<Json | null> {
    return new Promise((resolve) => {
        wx.request({
            url,
            method: 'get',
            success (res: any) {
                if (res.statusCode === 200) {
                    resolve(parseJSON(res.data));
                } else {
                    resolve(null);
                }
            },
            fail (err: any) {
                _warn(err);
                resolve(null);
            }
        });
    });
}

function nodeGetJson (url: string): Promise<Json | null> {
    if (!nodeHttps) nodeHttps = require('https');
    return new Promise((resolve) => {
        nodeHttps.get(url, (res: any) => {
            if (res.statusCode === 200) {
                let body = '';
                res.on('data', (chunk: any) => {
                    body += chunk.toString();
                });
                res.on('end', () => {
                    resolve(parseJSON(body));
                });
                res.on('error', (err: any) => {
                    _warn(err);
                    resolve(null);
                });
            } else {
                resolve(null);
            }
        });
    });
}
