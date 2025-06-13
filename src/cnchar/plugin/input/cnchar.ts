import ICnChar from 'cnchar-types';

let cnchar: ICnChar;

export function setCnchar (_cnchar: ICnChar) {
    cnchar = _cnchar;
}

export function getCnChar (): ICnChar|null{
    return cnchar || null;
}