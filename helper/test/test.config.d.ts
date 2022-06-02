import ICnChar from '../../src/cnchar/node_modules/cnchar-types';

declare const map: {
    name: string,
    test(cnchar: ICnChar): any;
    expect: any;
}[];

export default map;