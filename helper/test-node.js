/*
 * @Author: tackchen
 * @Date: 2022-04-10 21:41:16
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-10 21:43:49
 * @FilePath: /cnchar/helper/test-node.js
 * @Description: Coding something
 */

const https = require('https');

https.get('https://cdn.jsdelivr.net/npm/cnchar-data@latest/explanation/%E9%98%BF.json', res => {
    if (res.statusCode === 200) {
        res.on('data', chunk => {
            console.log(chunk.toString());
        });
        res.on('error', () => {});
    }
});