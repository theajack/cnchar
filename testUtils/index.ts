import cnchar from 'cnchar';
import {IStrictTestCase} from './types';

export function testStrictEqualCase ({
    testCases,
    plugins
}: {
    testCases: IStrictTestCase[],
    plugins?: Function[]
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
