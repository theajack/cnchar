"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// let version = '@2.1.3';
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
    'radical': 'jsbox.cnchar-radical'
  },
  codes: {
    //
    'easy-use': {
      code: "let spell = cnchar.spell('\u4F60\u597D');\nlet stroke = cnchar.stroke('\u4F60\u597D');\nconsole.log(spell, stroke);",
      desc: 'spell和stroke简单演示',
      dep: ['cnchar']
    },
    'spell': {
      code:
      /* javascript*/
      "var spell1 = cnchar.spell(\"\u4F60\u597D\", \"array\", \"tone\", \"poly\"); // \u6570\u7EC4\u5206\u5272\u3001\u5E26\u97F3\u8C03\u3001\u5019\u9009\u591A\u97F3\u5B57\nvar spell2 = cnchar.spell('\u6C49\u5B57\u62FC\u97F3','first', 'low'); // \u9996\u5B57\u6BCD\u5C0F\u5199\nvar spell3 = cnchar.spell('\u9577\u57CE'); // \u652F\u6301\u7E41\u4F53\u5B57\uFF08\u4F9D\u8D56cnchar-trad\u5E93\uFF09\nvar spell4 = cnchar.spell('\u9577\u57CE','simple'); // \u7981\u7528\u7E41\u4F53\u5B57\u62FC\u97F3\nvar spell5 = \"\u4F60\u597D\".spell(); // string prototype \u8C03\u7528\nconsole.log(spell1);\nconsole.log(spell2);\nconsole.log(spell3);\nconsole.log(spell4);\nconsole.log(spell5);",
      desc: 'spell方法参数演示',
      dep: ['trad']
    },
    'stroke': {
      code:
      /* javascript*/
      "var stroke1 = cnchar.stroke('\u6C49\u5B57\u7B14\u5212', 'array'); // \u6570\u7EC4\u5206\u5272\nvar stroke2 = cnchar.stroke(\"\u4F60\u597D\", \"order\", \"name\"); // \u6570\u7EC4\u5206\u5272\u3001\u542F\u7528\u7B14\u5212\uFF08\u4F9D\u8D56cnchar-order\u5E93\uFF09\nvar stroke3 = cnchar.stroke('\u9577\u57CE', 'array'); // \u652F\u6301\u7E41\u4F53\u5B57\uFF08\u4F9D\u8D56cnchar-trad\u5E93\uFF09\nvar stroke4 = cnchar.stroke('\u9577\u57CE', 'simple', 'array'); // \u7981\u7528\u7E41\u4F53\u5B57\u7B14\u5212\u6570\nvar stroke5 = \"\u4F60\u597D\".stroke(); // string prototype \u8C03\u7528\nconsole.log(stroke1);\nconsole.log(stroke2);\nconsole.log(stroke3);\nconsole.log(stroke4);\nconsole.log(stroke5);",
      desc: 'stroke方法参数演示',
      dep: ['order', 'trad']
    },
    'type': {
      code:
      /* javascript*/
      "var spellArg = cnchar.type.spell;\nvar strokeArg = cnchar.type.stroke;\nvar orderToWordArg = cnchar.type.orderToWord;\nvar spellToWordArg = cnchar.type.spellToWord;\nvar strokeToWordArg = cnchar.type.strokeToWord;\nconsole.log(Object.values(spellArg));\nconsole.log(Object.values(strokeArg));\nconsole.log(Object.values(orderToWordArg));\nconsole.log(Object.values(spellToWordArg));\nconsole.log(Object.values(strokeToWordArg));",
      dep: ['order'],
      desc: '所有可用的参数演示'
    },
    'version': {
      code: "var version = cnchar.version; // string \u7C7B\u578B\nconsole.log(version);",
      dep: ['cnchar'],
      desc: '版本号演示'
    },
    'plugins': {
      code: "var plugins = cnchar.plugins; // array \u7C7B\u578B\nconsole.log(plugins);",
      dep: ['cnchar'],
      desc: '当前使用的功能库列表'
    },
    'spellToWord': {
      code:
      /* javascript*/
      "var word1 = cnchar.spellToWord('sh\xE0ng'); // \u67E5\u8BE2sh\xE0ng\u7684\u6240\u6709\u6C49\u5B57\nvar word2 = cnchar.spellToWord('lv2');// v\u8868\u793A\xFC\uFF0C\u6570\u5B57\u8868\u793A\u97F3\u8C03\nvar word3 = cnchar.spellToWord('sh\xE0ng', 'alltone'); // \u652F\u6301\u6240\u6709\u97F3\u8C03\nvar word4 = cnchar.spellToWord('shang4', 'alltone', 'trad'); // \u53EA\u8FD4\u56DE\u7E41\u4F53\u5B57\nvar word5 = cnchar.spellToWord('lv2', 'simple'); // \u53EA\u8FD4\u56DE\u7B80\u4F53\u5B57\nconsole.log(word1);\nconsole.log(word2);\nconsole.log(word3);\nconsole.log(word4);\nconsole.log(word5);",
      dep: ['trad'],
      desc: '通过拼音查询原汉字'
    },
    'strokeToWord': {
      code:
      /* javascript*/
      "var word1 = cnchar.strokeToWord(25); // \u67E5\u8BE225\u753B\u7684\u6240\u6709\u6C49\u5B57\nvar word2 = cnchar.strokeToWord(25, 'simple'); // \u53EA\u8FD4\u56DE\u7B80\u4F53\u5B57\nvar word3 = cnchar.strokeToWord(25, 'trad'); // \u53EA\u8FD4\u56DE\u7E41\u4F53\u5B57\nvar word4 = cnchar.strokeToWord(1, 'array'); // \u6570\u7EC4\u5206\u5272\nconsole.log(word1);\nconsole.log(word2);\nconsole.log(word3);\nconsole.log(word4);",
      dep: ['trad'],
      desc: '通过笔画数查询原汉字'
    },
    'spellInfo': {
      code:
      /* javascript*/
      "cnchar.spellInfo('Sh\xE0ng')",
      dep: ['cnchar'],
      desc: '查询拼音信息'
    },
    'initials': {
      code:
      /* javascript*/
      "var initials = cnchar.spellInfo.initials;\nconsole.log(initials);",
      dep: ['cnchar'],
      desc: '获取所有声母'
    },
    'tones': {
      code:
      /* javascript*/
      "var tones = cnchar.spellInfo.tones;\nconsole.log(tones);",
      dep: ['cnchar'],
      desc: '获取所有音调'
    },
    'poly': {
      code:
      /* javascript*/
      "var spell1 = cnchar.spell('\u957F\u5927\u53BB\u957F\u57CE', 'tone', 'array');\nvar spell2 = cnchar.spell('\u559C\u597D\u7F8E\u597D\u7684\u4E8B\u7269', 'tone', 'array');\nconsole.log(spell1);\nconsole.log(spell2);",
      dep: ['poly'],
      desc: '多音词实例'
    },
    'order': {
      code:
      /* javascript*/
      "var order1 = cnchar.stroke('\u4F60\u597D', 'order'); // \u9ED8\u8BA4\u6A21\u5F0F\u662F letter\nvar order2 = cnchar.stroke('\u4F60\u597D', 'order', 'detail');\nvar order3 = cnchar.stroke('\u4F60\u597D', 'order', 'shape');\nvar order4 = cnchar.stroke('\u4F60\u597D', 'order', 'name');\nvar order5 = cnchar.stroke('\u4F60\u597D', 'order', 'count');\nconsole.log('\u5B57\u6BCD\u6A21\u5F0F\uFF1A', order1);\nconsole.log('\u8BE6\u60C5\u6A21\u5F0F\uFF1A', order2);\nconsole.log('\u7B14\u5212\u5F62\u72B6\u6A21\u5F0F\uFF1A', order3);\nconsole.log('\u7B14\u5212\u540D\u79F0\u6A21\u5F0F\uFF1A', order4);\nconsole.log('\u7B14\u5212\u6570\u6A21\u5F0F\uFF1A', order5);",
      dep: ['order'],
      desc: '汉字笔顺演示'
    },
    'orderToWord': {
      code:
      /* javascript*/
      "var orders = ['\u6A2A', '\u6487', '\u637A'];\nvar char1 = cnchar.orderToWord(orders); // \u9ED8\u8BA4\u4F7F\u7528 \u5168\u5339\u914D\nvar char2 = cnchar.orderToWord(orders, 'array'); // \u6570\u7EC4\u5206\u5272\nvar char3 = cnchar.orderToWord(orders, 'start'); // \u5339\u914D\u5F00\u5934\nvar char4 = cnchar.orderToWord(orders, 'start', 'simple'); // \u53EA\u5339\u914D\u7B80\u4F53\nvar char5 = cnchar.orderToWord(orders, 'start', 'trad'); // \u53EA\u5339\u914D\u7E41\u4F53\nvar char6 = cnchar.orderToWord(orders, 'contain'); // \u5339\u914D\u542B\u6709\u7B14\u5E8F\u4E2D\u6240\u6709\u7B14\u753B\u7684\u6C49\u5B57\nvar char7 = cnchar.orderToWord(orders, 'matchorder'); // \u5339\u914D\u542B\u6709\u7B14\u5E8F\u4E2D\u6240\u6709\u7B14\u753B\u7684\u6C49\u5B57\u4E14\u5148\u540E\u987A\u5E8F\u4E00\u81F4\nvar char8 = cnchar.orderToWord(orders, 'match'); // \u5339\u914D\u542B\u6709\u8BE5\u7B14\u5E8F\u7684\u6C49\u5B57\nconsole.log(char1);\nconsole.log(char2);\nconsole.log(char3);\nconsole.log(char4);\nconsole.log(char5);\nconsole.log(char6);\nconsole.log(char7);\nconsole.log(char8);",
      dep: ['order', 'trad'],
      desc: '汉字笔顺演示'
    },
    'orders': {
      code:
      /* javascript*/
      "var orders = cnchar.orderToWord.orders;\nconsole.log(orders);",
      dep: ['order'],
      desc: '汉字所有笔划'
    },
    'trad': {
      code:
      /* javascript*/
      "var result1 = cnchar.spell('\u9577\u57CE', 'array');\nvar result2 = cnchar.spell('\u9577\u57CE', 'array', 'simple'); // \u53EA\u67E5\u8BE2\u7B80\u4F53\nvar result3 = cnchar.stroke('\u9577\u57CE', 'array');\nvar result4 = cnchar.stroke('\u9577\u57CE', 'array', 'simple');\nconsole.log(result1);\nconsole.log(result2);\nconsole.log(result3);\nconsole.log(result4);",
      dep: ['trad'],
      desc: '繁体字支持'
    },
    'convert': {
      code:
      /* javascript*/
      "var char1 = cnchar.convert.simpleToTrad('\u4E00\u4E2A\u4EBA');// \u7B49\u4EF7\u4E8E '\u4E00\u4E2A\u4EBA'.convertSimpleToTrad()\nvar char2 = cnchar.convert.simpleToSpark('\u4E00\u4E2A\u4EBA');\nvar char3 = cnchar.convert.tradToSimple('\u58F9\u500B\u4EBA');\nvar char4 = cnchar.convert.tradToSpark('\u58F9\u500B\u4EBA');\nvar char5 = cnchar.convert.sparkToSimple('\u2460\u4E2A\u4EBE');\nvar char6 = cnchar.convert.sparkToTrad('\u2460\u4E2A\u4EBE');\nconsole.log(char1);\nconsole.log(char2);\nconsole.log(char3);\nconsole.log(char4);\nconsole.log(char5);\nconsole.log(char6);",
      dep: ['trad'],
      desc: '字体转换实例'
    },
    'normal-draw': {
      lang: 'html',
      code:
      /* html*/
      "<div id='drawNormal'></div>\n<script>\n    cnchar.draw('\u4F60\u597D',{\n        el: '#drawNormal'\n    })\n</script>",
      dep: ['draw'],
      desc: '常规绘制模式示例'
    },
    'stroke-draw': {
      lang: 'html',
      code:
      /* html*/
      "<div id='drawStroke'></div>\n<script>\n    cnchar.draw('\u7B14\u987A',{\n        el: '#drawStroke',\n        type: cnchar.draw.TYPE.STROKE\n    })\n</script>",
      dep: ['draw'],
      desc: '笔顺绘制模式示例'
    },
    'animation-draw': {
      lang: 'html',
      code:
      /* html*/
      "<div id='drawAnimation'></div>\n<script>\n    cnchar.draw('\u52A8\u753B\u7ED8\u5236',{\n        el: '#drawAnimation',\n        type: cnchar.draw.TYPE.ANIMATION,\n        animation:{\n            loopAnimate: true\n        }\n    })\n</script>",
      dep: ['draw'],
      desc: '动画绘制模式示例'
    },
    'test-draw': {
      lang: 'html',
      code:
      /* html*/
      "<div id='drawTest'></div>\n<script>\n    cnchar.draw('\u6D4B\u9A8C',{\n        el: '#drawTest',\n        type: cnchar.draw.TYPE.TEST\n    })\n</script>",
      dep: ['draw'],
      desc: '测验绘制模式示例'
    },
    'idiom': {
      code:
      /* javascript*/
      "// \u6839\u636E\u6C49\u5B57\u67E5\u8BE2\u6210\u8BED\uFF0C\u672B\u5C3E\u7684\u7A7A\u683C\u53EF\u4EE5\u7701\u7565\nvar res1 = cnchar.idiom(['\u4E94', '', '\u5341', '']); // ['\u4E94\u98CE\u5341\u96E8', '\u4E94\u5149\u5341\u8272']\n// \u6839\u636E\u7B14\u753B\u6570\u67E5\u8BE2\u6210\u8BED\uFF0C0\u8868\u793A\u5339\u914D\u4EFB\u610F\u7B14\u753B\uFF0C\u672B\u5C3E\u76840\u53EF\u4EE5\u7701\u7565\nvar res2 = cnchar.idiom([4, 6, 2, 0], 'stroke'); // [\"\u4E0D\u5F53\u4EBA\u5B50\", ... ]\n// \u6839\u636E\u62FC\u97F3\u67E5\u8BE2\u6210\u8BED\nvar res3 = cnchar.idiom('shang', 'spell'); // [\"\u4F24\u98CE\u8D25\u5316\", \"\u4F24\u98CE\u8D25\u4FD7\", ...]\n// \u5E26\u97F3\u8C03\nvar res4 = cnchar.idiom('shang4', 'spell', 'tone'); // [\"\u4E0A\u5175\u4F10\u8C0B\", \"\u4E0A\u4E0D\u7740\u5929\uFF0C\u4E0B\u4E0D\u7740\u5730\", ... ]\nconsole.log(res1, res2, res3, res4)",
      dep: ['idiom'],
      desc: '成语查询实例'
    },
    'xhy': {
      code:
      /* javascript*/
      "// \u7CBE\u786E\u67E5\u8BE2\nvar res1 = cnchar.xhy('\u5927\u6C34\u51B2\u4E86\u9F99\u738B\u5E99'); // ['\u5927\u6C34\u51B2\u4E86\u9F99\u738B\u5E99-\u81EA\u5BB6\u4EBA\u4E0D\u8BC6\u81EA\u5BB6\u4EBA', '\u5927\u6C34\u51B2\u4E86\u9F99\u738B\u5E99-\u4E00\u5BB6\u4EBA\u4E0D\u8BA4\u4E00\u5BB6\u4EBA'],\n// \u6A21\u7CCA\u67E5\u8BE2\nvar res2 = cnchar.xhy('\u5927\u6C34', 'fuzzy'); // ['\u6C5F\u6CB3\u91CC\u957F\u5927\u6C34-\u6CE5\u6C99\u4FF1\u4E0B', '\u6C5F\u6CB3\u53D1\u5927\u6C34-\u540E\u6D6A\u63A8\u524D\u6D6A', ... ]\n// \u53EA\u8FD4\u56DE\u7B54\u6848\u7ED3\u679C\nvar res3 = cnchar.xhy('\u5927\u6C34', 'fuzzy', 'answer');  // ['\u6CE5\u6C99\u4FF1\u4E0B', '\u540E\u6D6A\u63A8\u524D\u6D6A', ... ]\n// \u6839\u636E\u6B47\u540E\u8BED\u540E\u4E00\u53E5\u67E5\u8BE2\nvar res4 = cnchar.xhy('\u4E0A\u6643\u4E0B\u6447', 'fuzzy', 'answer', 'second'); // ['\u9189\u6C49\u8FC7\u94C1\u7D22\u6865', '\u6276\u7740\u9189\u6C49\u8FC7\u7834\u6865']\nconsole.log(res1, res2, res3, res4)",
      dep: ['xhy'],
      desc: '歇后语查询'
    },
    'radical': {
      code:
      /* javascript*/
      "var res1 = cnchar.radical('\u4F60'); // \"\u4EBB\",\nvar res2 = cnchar.radical('\u4F60\u597D\u5440'); // \"\u4EBB\u5973\u53E3\"\n// \u8FD4\u56DE\u6570\u7EC4\nvar res3 = cnchar.radical('\u4F60\u597D\u5440', 'array'); // [\"\u4EBB\", \"\u5973\", \"\u53E3\"]\n// \u4F20\u5165\u6570\u7EC4\u4F1A\u9ED8\u8BA4\u8FD4\u56DE\u6570\u7EC4\nvar res4 = cnchar.radical([\"\u4F60\", \"\u597D\", \"\u5440\"]); // [\"\u4EBB\", \"\u5973\", \"\u53E3\"]\nconsole.log(res1, res2, res3, res4)",
      dep: ['radical'],
      desc: '偏旁部首查询'
    }
  }
};

if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  window.jsbox_config = jsbox_config;
} else {
  module.exports = jsbox_config;
}