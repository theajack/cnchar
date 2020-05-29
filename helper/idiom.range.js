// 用于根据 idiom.json 生成拼音范围
const dict = require('../src/plugin/idiom/idiom.json').slice(0, 1000);
const cnchar = require('../src/plugin/all/index');
const fs = require('fs');
const {initToneCodes, getCharCode} = require('../src/plugin/idiom/tone');

initToneCodes(cnchar);

let stack = [];

let json = {};

let last = 0;

function main () {
    for (let i = 0; i < dict.length; i++) {
        let spell = cnchar.spell(dict[i], 'array', 'low', 'tone')[0];
        if (!cnchar._.isCnChar(spell)) {
            let sum = 0;
            spell.split('').forEach((s) => {
                sum += getCharCode(s, true) - 97;
            });
            if (sum !== last) {
                stack.push(sum);
            }
            last = sum;
        }

        
    }
    
    fs.writeFileSync('./helper/count.json', JSON.stringify(stack), 'utf8');
};

const TYPE = {
    MORE: 1, // 大于
    LESS: 2, // 小于
    EVEN: 3, // 等于
    ERROR: -1
};

function compareSpell (_spell, target, tone) {

    for (let i = 0; i < _spell.length; i++) {
        if (!target[i]) { // 中值与目标值前面拼音一样，但是中长度大于目标 说明 中 > 目标
            return TYPE.MORE;
        }
        let code = getCharCode(_spell[i], tone);
        if (code > target[i]) { // 中值 > 目标
            return TYPE.MORE;
        } else if (code < target[i]) { // 中值 < 目标
            return TYPE.LESS;
        }
    }
    if (_spell.length === target.length) {
        return TYPE.EVEN;
    }
    return TYPE.LESS; // 中值与目标值前面拼音一样，但是中长度小于目标 说明 中 < 目标
}

main();

// const spell = require('./spell.json');
// let keys = Object.keys(spell);

// let arr = [];

// for (let i = 1; i < keys.length - 1; i++) {
//     let cur = keys[i].charCodeAt();
//     let prev = keys[i - 1].charCodeAt();
//     let next = keys[i + 1].charCodeAt();
//     let d = Math.abs(cur - prev);
//     if (cur < prev || cur > next || !(d <= 1 || (cur === 106 && d <= 2) || (cur === 119 && d <= 3))) {
//         arr.push(keys[i]);
//         keys.splice(i, 1);
//         i--;
//     }
// }

// arr.forEach((item) => {
//     delete spell[item];
// });

// fs.writeFileSync('./helper/spell2.json', JSON.stringify(spell, null, 4), 'utf8');
