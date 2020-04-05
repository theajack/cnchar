module.exports = [
    {
        name: '测试spell',
        test (cnchar) {
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
        name: '测试spell poly',
        test (cnchar) {
            return [
                cnchar.spell('长大了', 'tone')
            ];
        },
        expect: [
            'ZhǎngDàLe'
        ]
    },
    {
        name: '测试stroke count',
        test (cnchar) {
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
        name: '测试stroke order',
        test (cnchar) {
            return [
                '一个'.stroke('order'),
                '一个'.stroke('order', 'detail'),
                '一个'.stroke('order', 'shape'),
                cnchar.stroke('一个', 'order', 'name'),
                cnchar.stroke('一个', 'order', 'count'),
            ];
        },
        expect: [
            ['j', 'slf'],
            [
                [{shape: '㇐', type: '平笔', foldCount: '0', name: '横'}],
                [
                    {shape: '㇓', type: '平笔', foldCount: '0', name: '撇'},
                    {shape: '㇏', type: '平笔', foldCount: '0', name: '捺'},
                    {shape: '㇑', type: '平笔', foldCount: '0', name: '竖'}
                ]
            ],
            [['㇐'], ['㇓', '㇏', '㇑']],
            [['横'], ['撇', '捺', '竖']],
            [1, 3],
        ]
    },
    {
        name: '测试 orderToWord',
        test (cnchar) {
            return [
                cnchar.orderToWord(['横', '撇', '捺']),
                cnchar.orderToWord(['横', '撇', '捺'], 'array'),
                cnchar.orderToWord(['横', '撇', '捺'], 'start'),
                cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple')
            ];
        },
        expect: [
            '丈大',
            ['丈', '大'],
            '丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼',
            '丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩'
        ]
    },
    {
        name: '测试 spellToWord',
        test (cnchar) {
            return [
                cnchar.spellToWord('shàng'),
                cnchar.spellToWord('shàng', 'alltone'),
                cnchar.spellToWord('shang4', 'alltone'),
                cnchar.spellToWord('shang4', 'alltone', 'trad'),
                cnchar.spellToWord('lv2', 'simple')

            ];
        },
        expect: [
            '上尚绱鞝',
            '上伤汤尚垧殇晌商绱觞赏墒熵裳傷湯殤鞝觴賞',
            '上伤汤尚垧殇晌商绱觞赏墒熵裳傷湯殤鞝觴賞',
            '傷湯殤鞝觴賞',
            '驴闾榈'
        ]
    },
    {
        name: '测试 strokeToWord',
        test (cnchar) {
            return [
                cnchar.strokeToWord(25),
                cnchar.strokeToWord(25, 'simple'),
                cnchar.strokeToWord(2, 'array')
            ];
        },
        expect: [
            '鬣馕囔戆攮纛饞躥顱籮蠻廳灣鑲鑰',
            '鬣馕囔戆攮纛',
            ['丁', '七', '乃', '乜', '九', '了', '二', '人', '亻', '儿', '入', '八', '冂', '几', '凵', '刀', '刁', '力', '勹', '匕', '十', '厂', '厶', '又', '卜', '乂']
        ]
    },
    {
        name: '测试 spellInfo',
        test (cnchar) {
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
        name: '测试 convert',
        test (cnchar) {
            return [
                cnchar.convert.simpleToTrad('一个人'),
                '一个人'.convertSimpleToSpark(),
                '壹個人'.convertTradToSimple()
            ];
        },
        expect: [
            '壹個人',
            '①个亾',
            '一个人'
        ]
    }
];