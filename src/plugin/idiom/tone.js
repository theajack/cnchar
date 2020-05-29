let _cnchar = null;
let toneCodes = [];

initToneCodes();

function initToneCodes (__cnchar) {
    _cnchar = __cnchar;
    'aoeiuvn'.split('').forEach(item => {
        let code = item.charCodeAt(0);
        for (let i = 1; i <= 4; i++) {
            toneCodes.push(code + i * 0.1);
        }
    });
}

function getToneCodes (char) {
    let index = _cnchar._.tones.indexOf(char);
    if (index === -1) {
        return -1;
    }
    return toneCodes[index];
}

function getCharCode (char, tone = false) {
    if (!tone) {
        return char.charCodeAt(0);
    }
    let code = getToneCodes(char);
    if (code === -1) {
        return char.charCodeAt(0);
    }
    return code;
}

module.exports = {initToneCodes, getCharCode};