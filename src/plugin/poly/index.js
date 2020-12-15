var polyPhrases = require('./polyphone-phrase-simple.json');

let _cnchar = null;

let _ = {};// 工具方法

// let arg = {origin:'origin'}
const arg = {poly: 'poly'};

var _spell;

function _poly (...args) {
    const str = args[0]; // 待处理的字符串
    args = args.splice(1);
    _.checkArgs('spell', args, true);
    if (_.has(args, _.arg.poly))
        return _spell(str, ...args);
    const newArgs = [_.arg.array]; // 先用数组
    const tone = _.has(args, _.arg.tone);
    // // 多音字参数参数将被忽略
    // if(_.has(args,_.arg.poly))
    //     _._warn('多音字参数 poly 被忽略')
    if (tone) {newArgs.push(_.arg.tone);} // 音调参数
    // 其他几个参数等获取到多音拼音之后在处理
    let res = _spell(str, ...newArgs); // 获取
    for (var k in polyPhrases) {
        const index = str.indexOf(k);
        if (index !== -1) { // 命中了多音词词库
            const pa = polyPhrases[k].split(' ');// 多音词拼音数组
            for (var i = 0; i < pa.length; i++) {
                res[index + i] = _.removeTone(pa[i], tone).spell;
            }
        }
    }
    _.dealUpLowFirst(res, args);
    if (!_.has(args, _.arg.array)) {
        res = res.join('');
    }
    return res;
}

function setPolyPhrase (word, spell) {
    if (typeof word === 'object') {
        for (const k in word) {
            setPolyPhrase(k, word[k]);
        }
        return;
    }
    polyPhrases[word] = spell.split(' ').map(s => {
        return _cnchar.shapeSpell(s);
    }).join(' ');
}

function main (cnchar) {
    if (cnchar.plugins.indexOf('poly') !== -1) {
        return;
    }
    cnchar.setPolyPhrase = setPolyPhrase;
    cnchar.plugins.push('poly');
    _spell = cnchar._origin.spell;
    _ = cnchar._;
    _cnchar = cnchar;
    var _new = function (...args) {
        if (_.has(args, arg.poly)) { // 有 poly参数则不使用多音词模式
            return _spell(...args);
        }
        return _poly(...args);
    };
    cnchar.spell = _new;
    String.prototype.spell = function (...args) {
        return _new(this, ...args);
    };
    // cnchar.type.spell.origin = arg.origin;
    cnchar._.poly = true;
    if (cnchar._._reinitSpellPoly) {
        cnchar._._reinitSpellPoly();
        delete cnchar._._reinitSpellPoly;
    }
}

function init (cnchar) {
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
}

init();
module.exports = init;