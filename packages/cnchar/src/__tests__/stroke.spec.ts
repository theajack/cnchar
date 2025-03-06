import {testStrictEqualCase} from 'testUtils';
import ICnChar from 'cnchar-types';

const testCases = [
    {
        name: '测试stroke count',
        test (cnchar: ICnChar) {
            return [
                '中华人民共和国'.stroke(),
                '中华人民共和国'.stroke('array'),
                cnchar.stroke('我爱中华人民共和国', 'array')
            ];
        },
        expect: [
            39,
            [4, 6, 2, 5, 6, 8, 8],
            [7, 10, 4, 6, 2, 5, 6, 8, 8]
        ]
    },
    {
        name: '测试 strokeToWord',
        test (cnchar: ICnChar) {
            return [
                cnchar.strokeToWord(25),
                cnchar.strokeToWord(2, 'array')
            ];
        },
        expect: [
            '鬣馕囔戆攮纛',
            ['丁', '七', '乃', '乜', '九', '了', '二', '人', '亻', '儿', '入', '八', '冂', '几', '凵', '刀', '刁', '力', '勹', '匕', '十', '厂', '厶', '又', '卜', '乂']
        ]
    },
    {
        name: '测试 setStrokeCount',
        test (cnchar: ICnChar) {
            cnchar.setStrokeCount('大', 4);
            cnchar.setStrokeCount({ // 多个
                '一': 2,
                '二': 1
            });
            return [
                cnchar.stroke('大'),
                cnchar.stroke('一'),
                cnchar.stroke('二')
            ];
        },
        expect: [
            4, 2, 1
        ]
    }
];

testStrictEqualCase({testCases});