import ICnChar from 'cnchar-types';

export interface IStrictTestCase {
    name: string;
    test(cnchar: ICnChar): any[];
    expect: any[];
}