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
                [{shape: '一', type: '平笔', foldCount: '0', name: '横'}],
                [
                    {shape: '丿', type: '平笔', foldCount: '0', name: '撇'},
                    {shape: '㇏', type: '平笔', foldCount: '0', name: '捺'},
                    {shape: '丨', type: '平笔', foldCount: '0', name: '竖'}
                ]
            ],
            [['一'], ['丿', '㇏', '丨']],
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
            '一個人',
            '①个亾',
            '壹个人'
        ]
    },
    {
        name: '测试成语',
        test (cnchar) {
            return [
                cnchar.idiom(['五', '', '十', '']),
                cnchar.idiom([4, 6, 2, 6], 'stroke'),
                cnchar.idiom('shang', 'spell').slice(0, 2),
                cnchar.idiom('shang4', 'spell', 'tone').slice(0, 2)
            ];
        },
        expect: [
            ['五风十雨', '五光十色'],
            ['五光十色'],
            ['伤风败化', '伤风败俗'],
            ['上兵伐谋', '上不着天，下不着地']
        ]
    },
    {
        name: '测试歇后语',
        test (cnchar) {
            return [
                cnchar.xhy('大水冲了龙王庙'),
                cnchar.xhy('大水', 'fuzzy').slice(0, 2),
                cnchar.xhy('大水', 'fuzzy', 'answer').slice(0, 2),
                cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second')
            ];
        },
        expect: [
            ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人'],
            ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪'],
            ['泥沙俱下', '后浪推前浪'],
            ['醉汉过铁索桥', '扶着醉汉过破桥']
        ]
    },
    {
        name: '测试 transformTone',
        test (cnchar) {
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
        test (cnchar) {
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
        test (cnchar) {
            return [
                cnchar.compareSpell('ao', 'ai'),
                cnchar.compareSpell('ai', 'ai'),
                cnchar.compareSpell('pín', 'pǐn', 'tone'),
                cnchar.compareSpell('pin2', 'pǐn', 'tone'),
                cnchar.compareSpell('频', 'pǐn', 'tone'),
                cnchar.compareSpell('品', '频', 'tone'),
                cnchar.compareSpell('贫', '频', 'tone'),
            ];
        },
        expect: [
            'more', 'even', 'less', 'less', 'less', 'more', 'even'
        ]
    },
    {
        name: '测试 compareStroke',
        test (cnchar) {
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
        test (cnchar) {
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
        test (cnchar) {
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
        name: '测试偏旁部首',
        test (cnchar) {
            return [
                cnchar.radical('你'),
                cnchar.radical('你好呀'),
                cnchar.radical('你好呀', 'array'),
                cnchar.radical(['你', '好', '呀']),
            ];
        },
        expect: [
            '亻',
            '亻女口',
            ['亻', '女', '口'],
            ['亻', '女', '口']
        ]
    }
];