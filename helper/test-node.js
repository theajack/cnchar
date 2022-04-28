/*
 * @Author: tackchen
 * @Date: 2022-04-10 21:41:16
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-28 12:38:31
 * @FilePath: /cnchar/helper/test-node.js
 * @Description: Coding something
 */

// const https = require('https');

// https.get('https://cdn.jsdelivr.net/npm/cnchar-data@latest/explanation/%E9%98%BF.json', res => {
//     if (res.statusCode === 200) {
//         res.on('data', chunk => {
//             console.log(chunk.toString());
//         });
//         res.on('error', () => {});
//     }
// });

let nodeHttps;

function nodeGetJson (url) {
    if (!nodeHttps) nodeHttps = require('https');
    return new Promise((resolve) => {
        nodeHttps.get(url, (res) => {
            if (res.statusCode === 200) {
                let body = '';
                res.on('data', (chunk) => {
                    body += chunk.toString();
                });
                res.on('end', () => {
                    resolve(JSON.parse(body));
                });
                res.on('error', (err) => {
                    console.warn(err);
                    resolve(null);
                });
            } else {
                resolve(null);
            }
        });
    });
}


nodeGetJson('https://cdn.jsdelivr.net/npm/cnchar-data@latest/explanation/%E4%BD%A0.json').then(d => console.log(d));