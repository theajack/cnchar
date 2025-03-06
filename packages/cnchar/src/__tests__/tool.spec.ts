import {testStrictEqualCase} from 'testUtils';
import ICnChar from 'cnchar-types';

const testCases = [
    {
        name: '测试 transformTone',
        test (cnchar: ICnChar) {
            return [
                cnchar.transformTone('lv2'),
                cnchar.transformTone('lv2', true),
                cnchar.transformTone('lv2', true, 'up'),
                cnchar.transformTone('lǘ')
            ];
        },
        expect: [
            {spell: 'lü', tone: 2, index: 2, isTrans: true},
            {spell: 'lǘ', tone: 2, index: 2, isTrans: true},
            {spell: 'LǗ', tone: 2, index: 2, isTrans: true},
            {spell: 'lü', tone: 2, index: 2, isTrans: false}
        ]
    },
    {
        name: '测试 isCnChar',
        test (cnchar: ICnChar) {
            return [
                cnchar.isCnChar('a'),
                cnchar.isCnChar('1'),
                cnchar.isCnChar('？'),
                cnchar.isCnChar('国'),
                cnchar.isCnChar('國'),
            ];
        },
        expect: [
            false, false, false, true, true
        ]
    },
    {
        name: '测试 compareSpell',
        test (cnchar: ICnChar) {
            return [
                cnchar.compareSpell('ao', 'ai'),
                cnchar.compareSpell('ai', 'ai'),
                cnchar.compareSpell('pín', 'pǐn', true),
                cnchar.compareSpell('pin2', 'pǐn', true),
                cnchar.compareSpell('频', 'pǐn', true),
                cnchar.compareSpell('品', '频', true),
                cnchar.compareSpell('贫', '频', true),
            ];
        },
        expect: [
            'more', 'even', 'less', 'less', 'less', 'more', 'even'
        ]
    },
    {
        name: '测试 compareStroke',
        test (cnchar: ICnChar) {
            return [
                cnchar.compareStroke('你', '好'),
                cnchar.compareStroke('你', '苏'),
                cnchar.compareStroke('好', '苏'),
                cnchar.compareStroke('一个', '好'),
                cnchar.compareStroke('你', 14),
            ];
        },
        expect: [
            'more', 'even', 'less', 'less', 'less'
        ]
    },
    {
        name: '测试 sortSpell',
        test (cnchar: ICnChar) {
            return [
                cnchar.sortSpell(['你', '好', '吗']),
                cnchar.sortSpell('你好吗'),
                cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone'),
                cnchar.sortSpell(['拼', '品', 'pin2', 'ai'], 'tone'),
                cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone', 'desc'),
                cnchar.sortSpell('拼品频爱', 'tone', 'desc'),
            ];
        },
        expect: [
            ['好', '吗', '你'],
            '好吗你',
            ['爱', '拼', '频', '品'],
            ['ai', '拼', 'pin2', '品'],
            ['品', '频', '拼', '爱'],
            '品频拼爱'
        ]
    },
    {
        name: '测试 sortStroke',
        test (cnchar: ICnChar) {
            return [
                cnchar.sortStroke(['一', '三', '二']),
                cnchar.sortStroke('一三二'),
                cnchar.sortStroke(['一', '三', 2]),
                cnchar.sortStroke(['一', '三', '二'], 'desc'),
            ];
        },
        expect: [
            ['一', '二', '三'],
            '一二三',
            ['一', 2, '三'],
            ['三', '二', '一']
        ]
    },
    {
        name: '测试 shapeSpell',
        test (cnchar: ICnChar) {
            return [
                cnchar.shapeSpell('lv2'),
                cnchar.shapeSpell('shang4'),
                cnchar.shapeSpell('men2')
            ];
        },
        expect: [
            'lǘ',
            'shàng',
            'mén'
        ]
    },

];

testStrictEqualCase({testCases});