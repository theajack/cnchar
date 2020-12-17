export function isCnChar (word: string): boolean {
    const unicode = word.charCodeAt(0);
    return unicode >= 19968 && unicode <= 40869;
}

export function pickCnChar (text: string): string {
    let v = '';
    for (let i = 0; i < text.length; i++) {
        if (isCnChar(text[i])) {
            v += text[i];
        }
    }
    return v;
}