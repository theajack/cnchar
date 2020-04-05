var countDict = require( './stroke-count-fan.json');
var orderDict = require( './stroke-order-fan.json');

// 简-烦 一对多
// https://blog.csdn.net/e15273/article/details/79954700

var convert = require( './converter');
let arg = {
    simple: 'simple', array: 'array', order: 'order' // 开启简单模式
};
let _ = {};// 工具方法

function main (cnchar) {
    if (cnchar.plugins.indexOf('trad') !== -1) {
        return;
    }
    cnchar.plugins.push('trad');
    cnchar.convert = convert;
    let _p = String.prototype;
    cnchar.type.spell.simple = arg.simple;
    cnchar.type.stroke.simple = arg.simple;
    reinitSpell(_p, cnchar);
    reinitStroke(_p, cnchar);
    // _p.convert = function(to,from){return convert(this,to,from);}
    _p.convertSimpleToTrad = function () {return convert.simpleToTrad(this);};
    _p.convertSimpleToSpark = function () {return convert.simpleToSpark(this);};
    _p.convertTradToSimple = function () {return convert.tradToSimple(this);};
    _p.convertTradToSpark = function () {return convert.tradToSpark(this);};
    _p.convertSparkToSimple = function () {return convert.sparkToSimple(this);};
    _p.convertSparkToTrad = function () {return convert.sparkToTrad(this);};
    // _p.convertToTrad = function(){return convert.toTrad(this);}
    // _p.convertToSimple = function(){return convert.toSimple(this);}
    // _p.convertToSpark = function(){return convert.toSpark(this);}
    _ = cnchar._;
    _.convert = convert;
    _.dict.getTradOrders = function () {return orderDict;};
    _.dict.getTradCount = function () {return countDict;};
}

function init (cnchar) {
    if (typeof window === 'object' && window.CnChar) {
        main(window.CnChar);
    } else if (typeof cnchar !== 'undefined') {
        main(cnchar);
    }
}

function reinitSpell (proto, cnchar) {
    let _spell = cnchar.spell;
    let newSpell = function (...args) {
        let str = args[0];
        args = args.splice(1);
        if (!_.has(args, arg.simple)) { // 默认繁体模式
            str = convert.tradToSimple(str);
        }
        return _spell(str, ...args);
    };
    proto.spell = function (...args) {
        return newSpell(this, ...args);
    };
    cnchar.spell = function (...args) {return newSpell(...args);};
    if (!cnchar._.poly) {
        cnchar._reinitSpellPoly = function () {
            _spell = cnchar.spell;
            proto.spell = function (...args) {
                return newSpell(this, ...args);
            };
            cnchar.spell = function (...args) {return newSpell(...args);};
        }; ;
    }
}

function reinitStroke (proto, cnchar) {
    let _stroke = cnchar.stroke;
    let _new = function (...args) {
        let str = args[0];
        args = args.splice(1);
        _.checkArgs('stroke', args, true);
        let isArr = _.has(args, arg.array);
        let isOrder = _.has(args, arg.order);
        if (!isArr) {args.push(arg.array);}// 先使用array模式
        let res = _stroke(str, ...args); // 没有繁体的结果
        if (!isOrder) { // stroke 方法
            if (_.has(args, arg.simple)) { // 启用简单模式则 直接返回
                return (isArr) ? res : _.sumStroke(res);
            }
            for (var i = 0; i < countDict.length; i++) {
                for (var j = 0; j < res.length; j++) {
                    if (res[j] === 0 && countDict[i].indexOf(str[j]) !== -1) {
                        res[j] = i;
                    }
                }
            }
            return (isArr) ? res : _.sumStroke(res);
        } else { // strokeOrder 方法
            if (_.has(args, arg.simple)) { // 启用简单模式则 直接返回
                return res;
            } else { // 将其中的繁体字获取 strokeOrder
                let igList = [];
                for (var i = 0; i < res.length; i++) {
                    if (typeof res[i] === 'undefined') {
                        res[i] = orderDict[str[i]]; // 字母版笔画表
                    } else {
                        igList.push(i);
                    }
                }
                return _.orderWithLetters(res, str, args, igList);
            }
        }
    };
    proto.stroke = function (...args) {
        return _new(this, ...args);
    };
    cnchar.stroke = function (...args) {return _new(...args);};
    if (!cnchar._.order) {
        cnchar._reinitStrokeOrder = function () {
            _stroke = cnchar.stroke;
            proto.stroke = function (...args) {
                return _new(this, ...args);
            };
            cnchar.stroke = function (...args) {return _new(...args);};
        }; ;
    }
}
init();
module.exports = init;