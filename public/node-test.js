/*
 * @Author: tackchen
 * @Date: 2022-04-14 21:57:35
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-14 22:03:52
 * @FilePath: /cnchar/public/node-test.js
 * @Description: Coding something
 */
const nodeHttps = require('https');
nodeHttps.get('https://cdn.jsdelivr.net/npm/cnchar-data@latest/draw/你.json', (res) => {
    if (res.statusCode === 200) {
        let body = '';
        res.on('data', (chunk) => {
            console.log(chunk);
            body += chunk.toString();
        });
        res.on('end', () => {
            console.log(JSON.parse(body));
        });
        res.on('error', () => {
        });
    } else {
    }
});