import {testStrictEqualCase} from 'testUtils';
import ICnChar from 'cnchar-types';

const testCases = [
    {
        name: '测试spell',
        test (cnchar: ICnChar) {
            return [
                '测试'.spell(), // 返回 'CeShi'
                '测试'.spell('up'), // 返回 'CESHI'
                '测试'.spell('low'), // 返回 'ceshi'
                '测试'.spell('first'), // 返回 'CS'
                '测试'.spell('first', 'low'), // 返回 'cs'
                '测试'.spell('array'), // 返回 ['Ce','Shi']
                '测试'.spell('array', 'first', 'low'), // 返回 ['c','s']
                '测试'.spell('tone'), // 返回 'CèShì'
                '长大了'.spell('poly'), // 返回 '(Zhang|Chang)(Da|Dai)(Le|Liao)'
                cnchar.spell('长大了', 'poly', 'tone')
            ];
        },
        expect: [
            'CeShi',
            'CESHI',
            'ceshi',
            'CS',
            'cs',
            ['Ce', 'Shi'],
            ['c', 's'],
            'CèShì',
            '(Zhang|Chang)(Da|Dai)(Le|Liao)',
            '(Zhǎng|Cháng)(Dà|Dài)(Le|Liǎo)'
        ]
    },
    {
        name: '测试 spellToWord',
        test (cnchar: ICnChar) {
            return [
                cnchar.spellToWord('shàng'),
                cnchar.spellToWord('shàng', 'alltone'),
                cnchar.spellToWord('shang4', 'alltone'),
                cnchar.spellToWord('lv2')
            ];
        },
        expect: [
            '上尚绱',
            '上伤汤尚垧殇晌商绱觞赏墒熵裳',
            '上伤汤尚垧殇晌商绱觞赏墒熵裳',
            '驴闾榈',
        ]
    },
    {
        name: '测试 spellInfo',
        test (cnchar: ICnChar) {
            return [
                cnchar.spellInfo('Shàng'),
                cnchar.spellInfo.initials.join(''),
                cnchar.spellInfo.tones.join('')
            ];
        },
        expect: [
            {spell: 'shang', tone: 4, index: 3, initial: 'sh', final: 'ang'},
            'bpmfdtnlgkhjqxzhchshrzcsyw',
            'āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ*ńňǹ'
        ]
    },
    {
        name: '测试 setSpell',
        test (cnchar: ICnChar) {
            cnchar.setSpell('你', 'ni');
            cnchar.setSpell('我', ['wo1', 'ha4']);
            cnchar.setSpell({
                '他': 'ta4',
                '它': ['ta2', 'ha3']
            });
            return [
                cnchar.spell('你', 'tone', 'poly'),
                cnchar.spell('我', 'tone', 'poly'),
                cnchar.spell('他', 'tone', 'poly'),
                cnchar.spell('它', 'tone', 'poly'),
                cnchar.isPolyWord('你')
            ];
        },
        expect: [
            '(Nǐ|Ni)',
            '(Wǒ|Wō|Hà)',
            '(Tā|Tà)',
            '(Tā|Tá|Hǎ)',
            true
        ]
    },
];

testStrictEqualCase({testCases});