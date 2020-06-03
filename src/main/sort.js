let {initToneCodes, getCharCode} = require('./compareSpell');

let _cnchar = null;

let arg = {
    'tone': 'tone',
    'desc': 'desc',
    'array': 'array'
};

function initSort (__cnchar) {
    _cnchar = __cnchar;
    initToneCodes(__cnchar);
}

const TYPE = {
    MORE: 'more', // 大于
    LESS: 'less', // 小于
    EVEN: 'even', // 等于
    ERROR: 'error'
};

function pretreat (spell, tone) {
    let arr = ['low'];
    if (tone) {arr.push('tone');}
    if (_cnchar.isCnChar(spell)) {
        return _cnchar.spell(spell, ...arr);
    }
    return _cnchar._.transformTone(spell, tone).spell;
}

function compareSpell (spell1, spell2, tone = false) {
    spell1 = pretreat(spell1, tone);
    spell2 = pretreat(spell2, tone);
    for (let i = 0; i < spell1.length; i++) {
        if (!spell2[i]) { // spell1与spell2值前面拼音一样，但是spell1长度大于spell2 说明 spell1 > spell2
            return TYPE.MORE;
        }
        let code = getCharCode(spell1[i], tone);
        let code2 = getCharCode(spell2[i], tone);
        if (code > code2) { // spell1 > spell2
            return TYPE.MORE;
        } else if (code < code2) { // spell1 < spell2
            return TYPE.LESS;
        }
    }
    if (spell1.length === spell2.length) {
        return TYPE.EVEN;
    }
    return TYPE.LESS; // spell1与spell2值前面拼音一样，但是spell1长度小于spell2 说明 中 < spell2
}

function sortSpell (spells, ...args) {
    let isString = false;
    if (typeof spells === 'string') {
        spells = spells.split('');
        isString = true;
    }
    let tone = args.indexOf(arg.tone) !== -1;
    let desc = args.indexOf(arg.desc) !== -1;
    let more = desc ? -1 : 1;
    let less = more * -1;
    let result = spells.sort((a, b) => {
        let res = compareSpell(a, b, tone);
        if (res === TYPE.MORE) {
            return more;
        }
        if (res === TYPE.LESS) {
            return less;
        }
        return 0;
    });
    if (isString) {
        return result.join('');
    }
    return result;
}

function compareStroke (stroke1, stroke2) {
    if (typeof stroke1 === 'string') {
        stroke1 = _cnchar.stroke(stroke1);
    }
    if (typeof stroke2 === 'string') {
        stroke2 = _cnchar.stroke(stroke2);
    }

    if (stroke1 > stroke2) {
        return TYPE.MORE;
    }
    if (stroke1 < stroke2) {
        return TYPE.LESS;
    }
    return TYPE.EVEN;
}

function sortStroke (strokes, ...args) {
    let isString = false;
    if (typeof strokes === 'string') {
        strokes = strokes.split('');
        isString = true;
    }
    let desc = args.indexOf(arg.desc) !== -1;
    let more = desc ? -1 : 1;
    let less = more * -1;
    let result = strokes.sort((a, b) => {
        let res = compareStroke(a, b);
        if (res === TYPE.MORE) {
            return more;
        }
        if (res === TYPE.LESS) {
            return less;
        }
        return 0;
    });
    if (isString) {
        return result.join('');
    }
    return result;
}

module.exports = {sortSpell, sortStroke, initSort, compareSpell, compareStroke};