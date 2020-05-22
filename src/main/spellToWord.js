let dict = require('./spell-dict-jian.json');
let initialDict = require('./initial.json');

let arg = {simple: 'simple', trad: 'trad', poly: 'poly', alltone: 'alltone', array: 'array'};
let _ = {};// 工具方法

function initSpellToWord (cnchar) {
    _ = cnchar._;
    cnchar.spellToWord = spellToWord;
    spellInfo.tones = _.tones.split('');
    spellInfo.initials = initialDict;
    cnchar.spellInfo = spellInfo;
    cnchar.type.spellToWord = arg;
}
// 获取拼音信息 spell,tone,index,initial,final
function spellInfo (spell) {
    spell = spell.toLowerCase();
    let info = _.removeTone(spell, false);
    if (info.index === -1) {
        if (!dict[info.spell]) {
            throw new Error('【spellInfo】错误的拼音: ' + spell);
        }
        info.index = parseInt(dict[info.spell][0]) + 1;
    }
    let initial = '';
    let final = info.spell;
    for (let i = 0; i < initialDict.length; i++) {
        if (info.spell.indexOf(initialDict[i]) === 0) {
            initial = initialDict[i];
            final = info.spell.substr(initial.length);
            break;
        }
    }
    info.initial = initial;
    info.final = final;
    return info;
}

function spellToWord (...args) {
    let spell = args[0].toLowerCase();
    if (typeof spell !== 'string') {
        throw new Error('spellToWord: 输入必须是字符串');
    }
    let info = _.transformTone(spell, false);
    args = args.splice(1);
    _.checkArgs('spellToWord', args);
    let argRes = {
        simple: _.has(args, arg.simple),
        trad: _.has(args, arg.trad),
        poly: _.has(args, arg.poly),
        alltone: _.has(args, arg.alltone),
    };
    if (!argRes.simple && !argRes.trad) {
        argRes.simple = argRes.trad = true;
    }
    let res = '';
    let str = dict[info.spell].substr(2);
    for (let i = 0; i < str.length; i += 2) {
        let word = str[i];
        let tone = parseInt(str[i + 1]);
        let isPoly = tone > 4;
        if (isPoly) {tone = tone - 5;}
        if (res.indexOf(word) === -1 && (argRes.alltone || tone === info.tone)) {
            if (!argRes.poly || isPoly) {
                res += word;
            }
        }
    }
    if (argRes.trad && _.convert) {
        let tradRes = '';
        for (let i = 0; i < res.length; i++) {
            let trad = _.convert.simpleToTrad(res[i]);
            if (trad !== res[i]) {
                tradRes += trad;
            }
        }
        if (!argRes.simple) {
            res = tradRes;
        } else {
            res += tradRes;
        }
    }
    if (_.has(args, arg.array)) {
        return res.split('');
    }
    return res;
}
module.exports = {initSpellToWord, spellInfo};
