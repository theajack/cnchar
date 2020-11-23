/**
 * 汉字 ['a','','c','']
 * 笔画 [1,0,1,0]
 * 拼音 ['shi', '']
 */
// 小程序中json直接放一个数组会有异常，所以包一个key
const dict = require('./idiom.json').idiom;
// const {initToneCodes, getCharCode} = require('./tone');

const spellDict = require('./spell.json').spell;
const spellNoToneDict = require('./spell.notone.json').spell;

let _cnchar = null;


let arg = {
    char: 'char',
    stroke: 'stroke',
    spell: 'spell',
    tone: 'tone'
};

// spell > stroke > char
// spell 和 stroke 仅在 引入cnchar之后才可用
function idiom (...args) {
    if (args.length === 0) {
        console.warn('idiom: 请输入搜索项');
        return;
    }
    let input = args[0];
    args = args.slice(1);
    if (args.indexOf(arg.spell) !== -1 && typeof input !== 'string') {
        console.warn('idiom spell 模式下仅支持查询首个汉字的拼音');
        return;
    }
    if (!(input instanceof Array || args.indexOf(arg.spell) !== -1 || (typeof input === 'number' && args.indexOf(arg.stroke) !== -1))) {
        console.warn('idiom 输入参数仅支持数组 或 stroke模式下的数字');
        return;
    }
    let res = null;
    if (!_cnchar) { // 单独使用的idiom 只支持汉字查询方式
        checkArg(args, arg.stroke);
        checkArg(args, arg.spell);
        res = idiomWithChar(input);
    } else {
        _cnchar._.checkArgs('idiom', args);
        if (_cnchar._.has(args, arg.spell)) {
            res = idiomWithSpell(input, _cnchar._.has(args, arg.tone));
        } else if (_cnchar._.has(args, arg.stroke)) {
            res = idiomWithStroke(input);
        } else {
            res = idiomWithChar(input);
        }
    }
    return res;
}

function idiomWithChar (input) {
    return dict.filter((item) => {
        return compareCommon(input, item.split(''));
    });
}
// needTone：是否需要匹配音调
function idiomWithSpell (input, tone) {
    // console.log(input, tone);
    const total = dict.length;
    let _dict = tone ? spellDict : spellNoToneDict;

    if (tone) {
        input = _cnchar._.transformTone(input, true).spell;
    }

    let filter = _dict.filter((item) => {
        return input === item.split(':')[0];
    });

    if (filter.length === 0) {
        return [];
    }

    let res = [];
    let n = _dict.length - 1;
    filter.forEach(item => {
        let index = _dict.indexOf(item);
        let curDIndex = item.split(':')[1];
        let nextDIndex = index === n ? total : _dict[index + 1].split(':')[1];
        res = res.concat(dict.slice(curDIndex, nextDIndex));
    });

    return res;
    
    // let low = 0;
    // let high = total;
    // input = input.toLowerCase();
    // if (tone) {
    //     input = _cnchar._.transformTone(input, 'tone').spell;
    // }
    // let target = input.split('').map(c => getCharCode(c, tone));
    // let area = step1FindArea(low, high, target, tone);
    // if (area === TYPE.ERROR) {
    //     return [];
    // }
    // let floor = step2FindFloor(area.low, area.mid, target, tone).mid;
    // let ceil = step3FindCeil(area.mid, area.high, target, tone).mid;
    // return dict.slice(floor, ceil + 1);
}


// 二分查找拼音依赖拼音准确率，可能会不准确，故放弃

// function binarySearch (low, high, condition) {
//     if (low > high) {
//         return TYPE.ERROR;
//     }
//     let mid = Math.floor((low + high) / 2);
//     let res = condition(mid);
//     if (res === TYPE.MORE) {
//         return binarySearch(low, mid - 1, condition);
//     } else if (res === TYPE.LESS) {
//         return binarySearch(mid + 1, high, condition);
//     } else {
//         return {low, high, mid};
//     }
// }

// function step1FindArea (low, high, target, tone) { // 找到一个区间，该区间包含所有拼音，且中值为该拼音
//     return binarySearch(low, high, (mid) => {
//         return _cnchar._.compareSpell(mid, target, tone);
//     });
// }

// function step2FindFloor (low, high, target, tone) { // 查找下界
//     return binarySearch(low, high, (mid) => {
//         return compareBoundary(mid, target, TYPE.MORE, TYPE.LESS, -1, tone);
//     });
// }
// function step3FindCeil (low, high, target, tone) { // 查找上界
//     return binarySearch(low, high, (mid) => {
//         return compareBoundary(mid, target, TYPE.LESS, TYPE.MORE, 1, tone);
//     });
// }
// typeCenter 朝区域中心的大小type； typeSide 朝区域两端的大小type
// function compareBoundary (mid, target, typeCenter, typeSide, neighborPlus, tone) {
//     let res = _cnchar._.compareSpell(mid, target, tone);
//     if (res === typeSide) {
//         return res;
//     }
//     if (res === TYPE.EVEN) {
//         let neighborIndex = mid + neighborPlus;
//         if (neighborIndex < 0 || neighbor >= total) {
//             return TYPE.EVEN;
//         }
//         let neighbor = _cnchar._.compareSpell(neighborIndex, target, tone); // + 1
//         if (neighbor === TYPE.EVEN) {
//             return typeCenter;
//         } else if (neighbor === typeSide) {
//             return TYPE.EVEN;
//         } else {
//             console.error(neighbor);
//             throw new Error('idoim Error');
//         }
//     }
// }

function idiomWithStroke (input) {
    if (typeof input === 'number') { // 总笔画数为多少
        return dict.filter((item) => {
            return input === _cnchar.stroke(item);
        });
    }
    return dict.filter((item) => {
        return compareCommon(input, _cnchar.stroke(item, 'array'));
    });
}
/**
 * ['五','','十',''],['五','光','十','色'] => true
 * ['wu','','shi',''],['wu','guang','shi','se'] => true
 * [4, 0, 2, 0],[4, 6, 2, 6] => true
 */
//
//
//
function compareCommon (input, target) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] && input[i] !== target[i] ) {
            return false;
        }
    }
    return true;
}

function checkArg (args, name) {
    if (args.indexOf(name) !== -1) {
        console.warn(`未引入cnchar,idiom不支持${name}参数`);
    }
}

function setCnchar (cnchar) {
    _cnchar = cnchar;
    // initToneCodes(cnchar);
}

module.exports = {idiom, arg, setCnchar};