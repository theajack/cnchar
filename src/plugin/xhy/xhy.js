const dict = require('./xhy.json');

let arg = {
    'fuzzy': 'fuzzy',
    'answer': 'answer',
    'second': 'second'
};

function xhy (...args) {
    let str = args.shift();
    let isFuzzy = args.indexOf(arg.fuzzy) !== -1;
    let onlyAnswer = args.indexOf(arg.answer) !== -1;
    let second = args.indexOf(arg.second) !== -1;

    let quesIndex = second ? 1 : 0;
    let answerIndex = 1 - quesIndex;
    if (isFuzzy) {
        let res = [];
        for (let i = 0; i < dict.length; i++) {
            if (dict[i][quesIndex].indexOf(str) !== -1) {
                let answer = shapeAnswer(dict[i], onlyAnswer, answerIndex);
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
}

function shapeAnswer (item, onlyAnswer, answerIndex) {
    let answer = null;
    if (item[answerIndex].indexOf('；') !== -1) {
        answer = item[answerIndex].split('；');
    } else {
        answer = [item[answerIndex]];
    }
    if (!onlyAnswer) {
        let fn = answerIndex === 1 ? (a, index) => {
            answer[index] = `${item[1 - answerIndex]}-${a}`;
        } : (a, index) => {
            answer[index] = `${a}-${item[1 - answerIndex]}`;
        };
        answer.forEach(fn);
    }
    return answer;
}

module.exports = {xhy, arg}; ;