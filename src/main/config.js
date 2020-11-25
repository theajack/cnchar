let defDict = require('./spell-default.json');
let spellDict = require('./spell-dict-jian.json');
let strokeDict = require('./stroke-count-jian.json');
let infoDict = require('./info-dict.json');
let {mapJson} = require('./util');
let {transformTone, spell, arg, shapeSpell, stroke} = require('./tool');

// 设置多音字默认拼音
function setSpellDefault (word, spell) {
    setIntoJson({
        target: defDict,
        key: word,
        value: spell,
        isSpell: true
    });
}

function setIntoJson ({target, key, value, isSpell = false}) {
    mapJson(key, value, (k, v) => {
        if (k && v) {
            target[k] = isSpell ? shapeSpell(v) : v;
        }
    });
}

function setIntoSpellBase (dict, currentSpell, word, spells, isPoly = false) {
    if (typeof word === 'object') {
        for (let k in word) {
            setIntoSpellBase(dict, currentSpell[k], k, word[k]);
        }
        return;
    }
    if (spells instanceof Array) {
        spells.forEach((spell => {
            setIntoSpellBase(dict, currentSpell, word, spell, true);
        }));
        return;
    }
    let info = transformTone(spells);
    let str = dict[info.spell];

    if (currentSpell.length >= 1) {
        for (let i = 0; i < currentSpell.length; i++) {
            if (currentSpell[i].spell === info.spell && currentSpell[i].tone === info.tone) {
                return;
            }
        }
        if (!isPoly) isPoly = true;
    }

    let appendStr = `${word}${info.tone + (isPoly ? 5 : 0)}`;

    if (!str) {
        dict[info.spell] = `${info.index}:` + appendStr;
    } else {
        dict[info.spell] = str + appendStr;
    }
    // 修改之前的拼音
    if (currentSpell.length === 1) {
        let cinfo = currentSpell[0];
        dict[cinfo.spell] = dict[cinfo.spell].replace(`${word}${cinfo.tone}`, `${word}${cinfo.tone + 5}`);
    }
    if (isPoly) {
        addPolyWord(word);
    }
}

function setIntoSpell (dict, word, spells) {
    let currentSpell;
    if (typeof word === 'object') {
        currentSpell = {};
        for (let k in word) {
            currentSpell[k] = _getCurrentSpellInfo(dict, k);
        }
    } else {
        currentSpell = _getCurrentSpellInfo(dict, word);
    }
    
    setIntoSpellBase(dict, currentSpell, word, spells);
}

function _getCurrentSpellInfo (dict, word) {
    let s = spell(dict, [word, arg.tone, arg.poly]);
    if (s === word) {
        return [];
    }
    if (s.indexOf('|') !== -1) {
        s = s.substring(1, s.length - 1).split('|');
    } else {
        s = [s];
    }
    return s.map(sp => {
        return transformTone(sp);
    });
}

function setSpell (word, spells) {
    setIntoSpell(spellDict, word, spells);
}

function setStrokeCount (word, count) {
    mapJson(word, count, (k, v) => {
        let oldCount = stroke(strokeDict, [k]);
        if (oldCount === count) {
            return;
        }
        // 去除旧笔画数
        if (oldCount !== 0) {
            strokeDict[oldCount] = strokeDict[oldCount].replace(k, '');
        }
        if (strokeDict[v]) {
            strokeDict[v] += k;
        } else {
            strokeDict[v] = k;
        }
    });
}

function addPolyWord (word) {
    if (infoDict.polyWord.indexOf(word) === -1) {
        infoDict.polyWord += word;
    }
}

module.exports = {
    setSpellDefault, setIntoJson,
    setSpell, setIntoSpell, setStrokeCount
};