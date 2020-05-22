/**
 * 汉字 ['a','','c','']
 * 笔画 [1,0,1,0]
 * 拼音 ['shi', '']
 */
const dict = require('./idiom.json');

let arg = {
    char: 'char',
    stroke: 'stroke',
    spell: 'spell',
    tone: 'tone'
};

let _cnchar = null;

// spell > stroke > char
// spell 和 stroke 仅在 引入cnchar之后才可用
function idiom (...args) {
    if (args.length === 0) {
        console.warn('idiom: 请输入搜索项');
        return;
    }
    let input = args[0];
    args = args.slice(1);
    if (!(input instanceof Array || (typeof input === 'number' && args.indexOf(arg.stroke) !== -1))) {
        console.warn('idiom 输入参数仅支持数组 或 stroke模式下的数字');
        return;
    }
    if (!_cnchar) { // 单独使用的idiom 只支持汉字查询方式
        checkArg(args, arg.stroke);
        checkArg(args, arg.spell);
        checkArg(args, arg.tone);
        return idiomWithChar(input);
    } else {
        _cnchar._.checkArgs('idiom', args);
        if (_cnchar._.has(args, arg.spell)) {
            return idiomWithSpell(input, _cnchar._.has(args, arg.tone));
        } else if (_cnchar._.has(args, arg.stroke)) {
            return idiomWithStroke(input);
        } else {
            return idiomWithChar(input);
        }
    }
}

function idiomWithChar (input) {
    return dict.filter((item) => {
        return compareCommon(input, item.split(''));
    });
}
// needTone：是否需要匹配音调
function idiomWithSpell (input, needTone) {
    transformSpell(input, needTone);
    let args = ['low', 'array'];
    if (needTone) {
        args.push('tone');
    }
    return dict.filter((item) => {
        return compareCommon(input, _cnchar.spell(item, ...args));
    });
}

function transformSpell (input, needTone) {
    input.forEach((item, i) => {
        if (item) {
            let info = _cnchar._.transformTone(item, needTone);
            input[i] = info.spell;
        }
    });
}

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
}

module.exports = {idiom, arg, setCnchar};