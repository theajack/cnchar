let dict = require('../src/main/spell-dict-jian.json');
const {isCnChar} = require('../src/main/tool');
const tool = require('./tool');

let polyArr = []; ;
let words = [];

for (let k in dict) {
    for (let i = 0; i < dict[k].length; i++) {
        let word = dict[k][i];
        if (isCnChar(word)) {
            if (words.indexOf(word) === -1) {
                words.push(word);
            } else {
                if (polyArr.indexOf(word) === -1) {
                    polyArr.push(word);
                }
            }
        }
    }
}

tool.write('helper/polyword.txt', polyArr.join(''));