
function isCnChar (word) {
    const unicode = word.charCodeAt(0);
    return unicode >= 19968 && unicode <= 40869;
}

function pickCnChar (text) {
    let v = '';
    for (let i = 0; i < text.length; i++) {
        if (isCnChar(text[i])) {
            v += text[i];
        }
    }
    return v;
}

module.exports = {
    isCnChar, pickCnChar
};