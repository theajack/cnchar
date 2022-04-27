import cnchar from 'cnchar';
import {IPlugin} from '../../src/cnchar-types/main/common';
import {IStrictTestCase} from './types';

export function testStrictEqualCase ({
    testCases,
    plugins
}: {
    testCases: IStrictTestCase[],
    plugins?: IPlugin[]
}) {
    if (plugins) {
        cnchar.use(...plugins);
    }
    testCases.forEach((testCase) => {
        test(testCase.name, () => {
            const results = testCase.test(cnchar);
            expect(results).toStrictEqual(testCase.expect);
        });
    });
}
