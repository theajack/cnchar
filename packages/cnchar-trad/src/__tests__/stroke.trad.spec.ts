import {testStrictEqualCase} from 'testUtils';
import ICnChar from 'cnchar-types';
import trad from 'cnchar-trad';

const testCases = [
    {
        name: '测试 strokeToWord 繁体',
        test (cnchar: ICnChar) {
            return [
                cnchar.strokeToWord(25),
                cnchar.strokeToWord(2, 'array'),
                cnchar.strokeToWord(25, 'simple')
            ];
        },
        expect: [
            '鬣馕囔戆攮纛饞躥顱籮蠻廳灣鑲鑰糶臠欖鱭躡鑭韉纘齇',
            ['丁', '七', '乃', '乜', '九', '了', '二', '人', '亻', '儿', '入', '八', '冂', '几', '凵', '刀', '刁', '力', '勹', '匕', '十', '厂', '厶', '又', '卜', '乂'],
            '鬣馕囔戆攮纛'
        ]
    }
];

testStrictEqualCase({
    testCases,
    plugins: [trad]
});