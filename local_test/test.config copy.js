module.exports = [
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
    },
    {
        name: '测试isPolyWord',
        test (cnchar) {
            return [
                cnchar.isPolyWord('你'),
                cnchar.isPolyWord('中'),
            ];
        },
        expect: [
            false,
            true
        ]
    },
    {
        name: '测试 setSpellDefault',
        test (cnchar) {
            cnchar.setSpellDefault('长', 'zhǎng');
            cnchar.setSpellDefault({ // 多个汉字
                '行': 'háng',
                '中': 'zhòng'
            });
            return [
                cnchar.spell('长', 'tone'),
                cnchar.spell('行', 'tone'),
                cnchar.spell('中', 'tone')
            ];
        },
        expect: [
            'Zhǎng',
            'Háng',
            'Zhòng'
        ]
    },
    {
        name: '测试 setOrder',
        test (cnchar) {
            cnchar.setOrder('大', 'abc');
            cnchar.setOrder({ // 多个
                '三': 'abc',
                '子': 'efg'
            });
            return [
                cnchar.stroke('大', 'order'),
                cnchar.stroke('三', 'order'),
                cnchar.stroke('子', 'order')
            ];
        },
        expect: [
            ['abc'], ['abc'], ['efg']
        ]
    },
    {
        name: '测试 setPolyPhrase',
        test (cnchar) {
            cnchar.setPolyPhrase('测试', 'ce1 shì');
            cnchar.setPolyPhrase({ // 多个
                '我们': 'wo men2',
                '体验': 'tǐ yàn'
            });
            return [
                cnchar.spell('测试', 'tone'),
                cnchar.spell('我们', 'tone'),
                cnchar.spell('体验', 'tone')
            ];
        },
        expect: ['CēShì', 'WoMén', 'TǐYàn']
    },
    {
        name: '测试 setRadical',
        test (cnchar) {
            cnchar.radical.setRadical('你', '口');
            cnchar.radical.setRadical({ // 多个
                '我': '亻',
                '他': '口'
            });
            return [
                cnchar.radical('你'),
                cnchar.radical('我'),
                cnchar.radical('他')
            ];
        },
        expect: ['口', '亻', '口']
    },,
    {
        name: '测试 addXhy',
        test (cnchar) {
            cnchar.xhy.addXhy('歇后语第一句', '歇后语第二句');
            cnchar.xhy.addXhy([ // 多条
                ['歇后语第一句2', '歇后语第二句2'],
                ['歇后语第一句3', '歇后语第二句3'],
            ]);
            return [
                cnchar.xhy('歇后语第一句'),
                cnchar.xhy('歇后语第二句2', 'second'),
                cnchar.xhy('第一句3', 'fuzzy')
            ];
        },
        expect: [
            ['歇后语第一句-歇后语第二句'],
            ['歇后语第一句2-歇后语第二句2'],
            ['歇后语第一句3-歇后语第二句3']
        ]
    },
    
];