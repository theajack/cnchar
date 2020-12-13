const dict = require('./xhy.json').dict;

let _cnchar = null;

const arg = {
    'fuzzy': 'fuzzy',
    'answer': 'answer',
    'second': 'second'
};

function xhy (...args) {
    
    const str = args.shift();
    if (_cnchar) {
        _cnchar._.checkArgs('xhy', args);
    }
    const isFuzzy = args.indexOf(arg.fuzzy) !== -1;
    const onlyAnswer = args.indexOf(arg.answer) !== -1;
    const second = args.indexOf(arg.second) !== -1;
    const quesIndex = second ? 1 : 0;
    const answerIndex = 1 - quesIndex;
    if (isFuzzy) {
        let res = [];
        for (let i = 0; i < dict.length; i++) {
            if (dict[i][quesIndex].indexOf(str) !== -1) {
                const answer = shapeAnswer(dict[i], onlyAnswer, answerIndex);
                res = res.concat(answer);
            }
        }
        return res;
    } else {
        for (let i = 0; i < dict.length; i++) {
            if (dict[i][quesIndex] === str) {
                return shapeAnswer(dict[i], onlyAnswer, answerIndex);
            }
        }
    }
    return [];
}

function shapeAnswer (item, onlyAnswer, answerIndex) {
    let answer = null;
    if (item[answerIndex].indexOf('；') !== -1) {
        answer = item[answerIndex].split('；');
    } else {
        answer = [item[answerIndex]];
    }
    if (!onlyAnswer) {
        const fn = answerIndex === 1 ? (a, index) => {
            answer[index] = `${item[1 - answerIndex]}-${a}`;
        } : (a, index) => {
            answer[index] = `${a}-${item[1 - answerIndex]}`;
        };
        answer.forEach(fn);
    }
    return answer;
}
function addXhy (arg, arg2) {
    if (typeof arg === 'string' && typeof arg2 === 'string') {
        addXhy([arg, arg2]);
        return;
    }
    if (!(arg instanceof Array)) {
        _cnchar._._warn('addXhy 参数必须为数组');
        return;
    }
    if (arg[0] instanceof Array) {
        arg.forEach(item => {
            xhy.addXhy(item);
        });
        return;
    }
    dict.push(arg);
}
function setCnchar (cnchar) {
    _cnchar = cnchar;
}
module.exports = {xhy, arg, addXhy, setCnchar};