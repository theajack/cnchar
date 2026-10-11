import ICnChar from 'cnchar-types';

declare const map: {
    name: string,
    test(cnchar: ICnChar): any;
    expect: any;
}[];

export default map;