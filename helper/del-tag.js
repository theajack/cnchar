/*
 * @Author: tackchen
 * @Date: 2022-04-06 09:14:55
 * @LastEditors: tackchen
 * @LastEditTime: 2022-04-06 09:38:23
 * @FilePath: /cnchar/helper/del-tag.js
 * @Description: Coding something
 */

const {exec} = require('./tool');

const tagName = process.argv[2];

async function main () {
    // await exec(`git tag -d ${tagName}`);
    // await exec(`git push origin :refs/tags/${tagName}`);
    await exec(`git tag -m "version ${tagName}" ${tagName} master`);
    await exec('git push --tags');
}

main();