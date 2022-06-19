// let version = '@2.1.3';

// eslint-disable-next-line no-var
var jsbox_config = {
    libs: {
        // jsbox public/lib/lib.js
        'cnchar': 'jsbox.cnchar',
        'poly': 'jsbox.cnchar-poly',
        'order': 'jsbox.cnchar-order',
        'trad': 'jsbox.cnchar-trad',
        'draw': 'jsbox.cnchar-draw',
        'idiom': 'jsbox.cnchar-idiom',
        'xhy': 'jsbox.cnchar-xhy',
        'radical': 'jsbox.cnchar-radical',
    },
    codes: { //
        'easy-use': {
            code: `let spell = cnchar.spell('你好');
let stroke = cnchar.stroke('你好');
console.log(spell, stroke);`,
            desc: 'spell和stroke简单演示',
            dep: ['cnchar']
        },
        'spell': {
            code: /* javascript*/`var spell1 = cnchar.spell("你好", "array", "tone", "poly"); // 数组分割、带音调、候选多音字
var spell2 = cnchar.spell('汉字拼音','first', 'low'); // 首字母小写
var spell3 = cnchar.spell('長城'); // 支持繁体字（依赖cnchar-trad库）
var spell4 = cnchar.spell('長城','simple'); // 禁用繁体字拼音
var spell5 = "你好".spell(); // string prototype 调用
console.log(spell1);
console.log(spell2);
console.log(spell3);
console.log(spell4);
console.log(spell5);`,
            desc: 'spell方法参数演示',
            dep: ['trad']
        },
        'stroke': {
            code: /* javascript*/`var stroke1 = cnchar.stroke('汉字笔划', 'array'); // 数组分割
var stroke2 = cnchar.stroke("你好", "order", "name"); // 数组分割、启用笔划（依赖cnchar-order库）
var stroke3 = cnchar.stroke('長城', 'array'); // 支持繁体字（依赖cnchar-trad库）
var stroke4 = cnchar.stroke('長城', 'simple', 'array'); // 禁用繁体字笔划数
var stroke5 = "你好".stroke(); // string prototype 调用
console.log(stroke1);
console.log(stroke2);
console.log(stroke3);
console.log(stroke4);
console.log(stroke5);`,
            desc: 'stroke方法参数演示',
            dep: ['order', 'trad']
        },
        'type': {
            code: /* javascript*/`var spellArg = cnchar.type.spell;
var strokeArg = cnchar.type.stroke;
var orderToWordArg = cnchar.type.orderToWord;
var spellToWordArg = cnchar.type.spellToWord;
var strokeToWordArg = cnchar.type.strokeToWord;
console.log(Object.values(spellArg));
console.log(Object.values(strokeArg));
console.log(Object.values(orderToWordArg));
console.log(Object.values(spellToWordArg));
console.log(Object.values(strokeToWordArg));`,
            dep: ['order'],
            desc: '所有可用的参数演示'
        },
        'version': {
            code: `var version = cnchar.version; // string 类型
console.log(version);`,
            dep: ['cnchar'],
            desc: '版本号演示'
        },
        'plugins': {
            code: `var plugins = cnchar.plugins; // array 类型
console.log(plugins);`,
            dep: ['cnchar'],
            desc: '当前使用的功能库列表'
        },
        'spellToWord': {
            code: /* javascript*/`var word1 = cnchar.spellToWord('shàng'); // 查询shàng的所有汉字
var word2 = cnchar.spellToWord('lv2');// v表示ü，数字表示音调
var word3 = cnchar.spellToWord('shàng', 'alltone'); // 支持所有音调
var word4 = cnchar.spellToWord('shang4', 'alltone', 'trad'); // 只返回繁体字
var word5 = cnchar.spellToWord('lv2', 'simple'); // 只返回简体字
console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
console.log(word5);`,
            dep: ['trad'],
            desc: '通过拼音查询原汉字'
        },
        'strokeToWord': {
            code: /* javascript*/`var word1 = cnchar.strokeToWord(25); // 查询25画的所有汉字
var word2 = cnchar.strokeToWord(25, 'simple'); // 只返回简体字
var word3 = cnchar.strokeToWord(25, 'trad'); // 只返回繁体字
var word4 = cnchar.strokeToWord(1, 'array'); // 数组分割
console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);`,
            dep: ['trad'],
            desc: '通过笔画数查询原汉字'
        },
        'spellInfo': {
            code: /* javascript*/`cnchar.spellInfo('Shàng')`,
            dep: ['cnchar'],
            desc: '查询拼音信息'
        },
        'initials': {
            code: /* javascript*/`var initials = cnchar.spellInfo.initials;
console.log(initials);`,
            dep: ['cnchar'],
            desc: '获取所有声母'
        },
        'tones': {
            code: /* javascript*/`var tones = cnchar.spellInfo.tones;
console.log(tones);`,
            dep: ['cnchar'],
            desc: '获取所有音调'
        },
        'poly': {
            code: /* javascript*/`var spell1 = cnchar.spell('长大去长城', 'tone', 'array');
var spell2 = cnchar.spell('喜好美好的事物', 'tone', 'array');
console.log(spell1);
console.log(spell2);`,
            dep: ['poly'],
            desc: '多音词实例'
        },
        'order': {
            code: /* javascript*/`var order1 = cnchar.stroke('你好', 'order'); // 默认模式是 letter
var order2 = cnchar.stroke('你好', 'order', 'detail');
var order3 = cnchar.stroke('你好', 'order', 'shape');
var order4 = cnchar.stroke('你好', 'order', 'name');
var order5 = cnchar.stroke('你好', 'order', 'count');
console.log('字母模式：', order1);
console.log('详情模式：', order2);
console.log('笔划形状模式：', order3);
console.log('笔划名称模式：', order4);
console.log('笔划数模式：', order5);`,
            dep: ['order'],
            desc: '汉字笔顺演示'
        },
        'orderToWord': {
            code: /* javascript*/`var orders = ['横', '撇', '捺'];
var char1 = cnchar.orderToWord(orders); // 默认使用 全匹配
var char2 = cnchar.orderToWord(orders, 'array'); // 数组分割
var char3 = cnchar.orderToWord(orders, 'start'); // 匹配开头
var char4 = cnchar.orderToWord(orders, 'start', 'simple'); // 只匹配简体
var char5 = cnchar.orderToWord(orders, 'start', 'trad'); // 只匹配繁体
var char6 = cnchar.orderToWord(orders, 'contain'); // 匹配含有笔序中所有笔画的汉字
var char7 = cnchar.orderToWord(orders, 'matchorder'); // 匹配含有笔序中所有笔画的汉字且先后顺序一致
var char8 = cnchar.orderToWord(orders, 'match'); // 匹配含有该笔序的汉字
console.log(char1);
console.log(char2);
console.log(char3);
console.log(char4);
console.log(char5);
console.log(char6);
console.log(char7);
console.log(char8);`,
            dep: ['order', 'trad'],
            desc: '汉字笔顺演示'
        },
        'orders': {
            code: /* javascript*/`var orders = cnchar.orderToWord.orders;
console.log(orders);`,
            dep: ['order'],
            desc: '汉字所有笔划'
        },
        'trad': {
            code: /* javascript*/`var result1 = cnchar.spell('長城', 'array');
var result2 = cnchar.spell('長城', 'array', 'simple'); // 只查询简体
var result3 = cnchar.stroke('長城', 'array');
var result4 = cnchar.stroke('長城', 'array', 'simple');
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);`,
            dep: ['trad'],
            desc: '繁体字支持'
        },
        'convert': {
            code: /* javascript*/`var char1 = cnchar.convert.simpleToTrad('一个人');// 等价于 '一个人'.convertSimpleToTrad()
var char2 = cnchar.convert.simpleToSpark('一个人');
var char3 = cnchar.convert.tradToSimple('壹個人');
var char4 = cnchar.convert.tradToSpark('壹個人');
var char5 = cnchar.convert.sparkToSimple('①个亾');
var char6 = cnchar.convert.sparkToTrad('①个亾');
console.log(char1);
console.log(char2);
console.log(char3);
console.log(char4);
console.log(char5);
console.log(char6);`,
            dep: ['trad'],
            desc: '字体转换实例'
        },
        'normal-draw': {
            lang: 'html',
            code: /* html*/`<div id='drawNormal'></div>
<script>
    cnchar.draw('你好',{
        el: '#drawNormal'
    })
</script>`,
            dep: ['draw'],
            desc: '常规绘制模式示例'
        },
        'stroke-draw': {
            lang: 'html',
            code: /* html*/`<div id='drawStroke'></div>
<script>
    cnchar.draw('笔顺',{
        el: '#drawStroke',
        type: cnchar.draw.TYPE.STROKE
    })
</script>`,
            dep: ['draw'],
            desc: '笔顺绘制模式示例'
        },
        'animation-draw': {
            lang: 'html',
            code: /* html*/`<div id='drawAnimation'></div>
<script>
    cnchar.draw('动画绘制',{
        el: '#drawAnimation',
        type: cnchar.draw.TYPE.ANIMATION,
        animation:{
            loopAnimate: true
        }
    })
</script>`,
            dep: ['draw'],
            desc: '动画绘制模式示例'
        },
        'test-draw': {
            lang: 'html',
            code: /* html*/`<div id='drawTest'></div>
<script>
    cnchar.draw('测验',{
        el: '#drawTest',
        type: cnchar.draw.TYPE.TEST
    })
</script>`,
            dep: ['draw'],
            desc: '测验绘制模式示例'
        },
        'idiom': {
            code: /* javascript*/`// 根据汉字查询成语，末尾的空格可以省略
var res1 = cnchar.idiom(['五', '', '十', '']); // ['五风十雨', '五光十色']
// 根据笔画数查询成语，0表示匹配任意笔画，末尾的0可以省略
var res2 = cnchar.idiom([4, 6, 2, 0]); // ["不当人子", ... ]
// 根据拼音查询成语
var res3 = cnchar.idiom('shang'); // ["伤风败化", "伤风败俗", ...]
// 带音调
var res4 = cnchar.idiom('shang4'); // ["上兵伐谋", "上不着天，下不着地", ... ]
console.log(res1, res2, res3, res4)`,
            dep: ['idiom'],
            desc: '成语查询实例'
        },
        'xhy': {
            code: /* javascript*/`// 精确查询
var res1 = cnchar.xhy('大水冲了龙王庙'); // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人'],
// 模糊查询
var res2 = cnchar.xhy('大水', 'fuzzy'); // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
// 只返回答案结果
var res3 = cnchar.xhy('大水', 'fuzzy', 'answer');  // ['泥沙俱下', '后浪推前浪', ... ]
// 根据歇后语后一句查询
var res4 = cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second'); // ['醉汉过铁索桥', '扶着醉汉过破桥']
console.log(res1, res2, res3, res4)`,
            dep: ['xhy'],
            desc: '歇后语查询'
        },
        'radical': {
            code: /* javascript*/`var res1 = cnchar.radical('你'); // "亻",
var res2 = cnchar.radical('你好呀'); // "亻女口"
// 返回数组
var res3 = cnchar.radical('你好呀', 'array'); // ["亻", "女", "口"]
// 传入数组会默认返回数组
var res4 = cnchar.radical(["你", "好", "呀"]); // ["亻", "女", "口"]
console.log(res1, res2, res3, res4)`,
            dep: ['radical'],
            desc: '偏旁部首查询'
        }
    }
};

if (typeof window === 'object') {
    window.jsbox_config = jsbox_config;
} else {
    module.exports = jsbox_config;
}