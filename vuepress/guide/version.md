## 3.2.2

1. 蹲靚刹彷 默认多音与词组修复
2. 新增176个繁体字的部首 五笔等信息

## 3.2.1

1. 优化拼音输入法联想输入，支持首字母联想
2. 优化联想输入返回的联想词组
3. 优化 spell poly 返回顺序 默认读音放在前面
4. 增加单个汉字解释，修改cnchar-data依赖的cdn地址
5. 增加hasPlugin api，修复引用trad包的依赖报错
6. idiom 参数优化 去掉spell和tone，改为自动识别
7. 修复 orderToWord 方法
8. 新增 hasTone api，判断拼音是否有音调

## 3.2.0

1. 增加random插件，增加随机生成汉字、拼音、词语、成语、歇后语的功能
2. voice api支持对拼音发音 如 cnchar.voice('ni3')
3. 成语查询支持拼音，如 cnchar.idiom('wu3')
4. 增加 忒、欻、挼、鞥、黁、扥、扽、寧、儂、鴰
5. 增加 cnchar-code插件，用于获取汉字编码（unicode 二进制code 仓颉码 四角号码 统一编码 GBK编码 charCode 五行属性）
6. 增加 cnchar-input插件，用于支持拼音和五笔输入法功能
7. 成语增加 "一*一*" 查询
8. 扩充繁体字库
9. 优化各个插件字典
10. radical插件新增汉字结构查询、增加部首笔画，修改返回值，修改查询结构
11. 修复radical独立引用的报错（检查其他仓库）
12. 增加info仓库，包含汉字造字法，五行，注音查询
13. 增加name仓库，用于中文姓名相关功能
14. 修正和扩充大量字库、增加应用例子

## 3.1.0

1. 增加 words 插件，可以获取汉字的组词
2. 增加 explain 插件，可以获取词语的解释
3. 增加 voice 插件，可以对汉字、词语和句子发音
4. 增加 voice.speak, voice.regonize api，用于合成语音和识别语音
6. spell 方法增加 flat参数，扁平化拼音 如 lǘ => lv2, lā => la1
7. cnchar.shapeSpell 增加reverse参数，默认为false，cnchar.shapeSpell('lǘ', true)=> lv2；cnchar.shapeSpell('lv2')=> lǘ
8. 增加 cnchar.draw.onWordNotFound
9. 修复 家 字默认读音
10. 接入github workflow

## 3.0.6
1. 害子默认读音
2. 否极泰来 词组
3. 修复cnchar-all库声明文件

## 3.0.5
1. 增加 行长 多音词
2. 修正 柴 默认读音 增加 遏 多音字
3. 增加 遝 溷 棨 襜 騑 字

## 3.0.4
1. 增加 将否 两个字的默认读音
2. 修正 银行 词组的读音
3. 修正了多个多音字和词组

## 3.0.3
1. 增加繁体字 裡迴讚
2. 增加 draw 插件绘制控制api startAnimation pauseAnimation resumeAnimation drawNextStroke

## 3.0.2
1. 修正 归 字默认读音
2. 宝盖头 的第二笔名称由 撇点 修改为 点2
3. 增加 order 方法detail 返回 letter属性
4. 增加 难民 逃难 多音词
5. 修改一些笔画foldCount和type错误
6. 增加单元测试 
7. 代码仓库移除npm文件夹

## 3.0.1
1. 打包配置修改 tsconfig.json

## 3.0.0
1. typescript 重写，主库及所有插件库使用ts重写
2. 增加 免 和 倘 的默认读音
3. 增加 重来 词组

## 2.2.8
1. 增加 自定义 设置数据的方法 setSpell setSpellDefault setStrokeCount setOrder setPolyPhrase setRadical addXhy
2. 增加 shapeSpell 方法，用于将拼音数字声调模式转成带声调的拼音
3. 增加 isPolyWord 方法，用于高效判断一个汉字是否是多音字
4. 修正 眝 耄 耋 三个字的偏旁
5. 修正 苦 被 厕 默认读音 修正 雪茄 读音
6. 歇后语没有查询到默认返回空数组
7. 修复小程序下json文件为数组加载不到的问题
   
## 2.2.7
1. 笔划数表使用json代替数组，以解决微信小程序中无法获取笔画数的问题
2. 兼容ios和mac的笔划字符
3. 增加11个不常见多音字的默认读音
4. cdn 文件使用umd模块
   
## 2.2.6
1. 增加区字默认读音

## 2.2.5
1. 增加cnchar-radical, 偏旁部首插件库

## 2.2.4
1. 增加 红 字的默认读音

## 2.2.3
1. 修复draw库不同绘制实例样式会干扰的bug
   
## 2.2.2
1. 增加几个多音字的默认读音
   
## 2.2.1
1. 修复ts声明文件的bug
2. ts声明文件增加字符串扩展方法
3. 修复构建npm的bug

## 2.2.0
1. 增加cnchar-idiom 成语库
2. 增加cnchar-xhy 歇后语库
3. 增加transformTone,isCnchar,compareSpell,compareStroke,sortSpell,sortStroke工具方法，方便开发者更便捷的操作拼音和汉字
4. 对ts声明文件进行修改，对ts的支持更加友好
5. 鸟字增加默认读音
6. 彷徨读音修正
7. cnchar-draw 增加 Promise-polyfill
8. 文档增加Object.assign-polyfill

## 2.1.4
1. 修复cnchar-all及cnchar-draw库在非浏览器环境会报错的bug
2. 修复 draw库和main库在ts环境中引用的异常
   
## 2.1.3
1. draw库增加clear参数，表示绘制前是否清空容器
2. draw库将backgroundColor参数默认值改为#fff
3. draw库将el参数改为支持css选择器或dom

## 2.1.2
1. 增加draw背景色设置
2. 修正几个多音词
3. 统一 trad 和 simple 参数
4. 移除了一字和三字的繁体（应该是大写不是繁体）

## 2.1.1
1. 修复cnchar-all依赖的bug

## 2.1.0
1. 增加cnchar-draw插件，支持可视化绘制汉字笔画，多种模式可选
2. 将cdn移至npm包中，改变cdn引用方式，删除dist目录
3. 使用vuepress构建文档，工程化重构文档
4. 使用gulp-markdown-toc

## 2.0.9
1. 修复 多音词"致远任重" 中的 重 字拼音错误
2. 增加 齉 字 [nàng 36]
3. 无字默认读音修正
4. 修改 13 个多音字的默认读音
5. 增加 15 个多音词

## 2.0.8
1. 扩充了217个词频高于100的汉字
2. 修改orderToWord.orders 笔画名称的显示，如果某个笔画有两个现在会保留两个名称
3. orderToWord 笔画数组支持使用空格分隔的笔画字符串
3. orderToWord 默认返回字符串 如需返回数组请加上 array 参数
4. orderToWord 修改all参数为start 增加 contain、match、matchorder参数，优先级 match>matchorder>contain>start>默认
5. 加入 cnchar.spellToWord 方法
6. 加入 cnchar.strokeToWord 方法
7. 加入 cnchar.spellInfo 方法，spellInfo.tones spellInfo.initials属性
8. 仓库加入测试目录
   
## 2.0.7
1. 加入 eslint 和 commitlint
2. 使用 gulp-babel 转换源代码到 npm 包，使得即便禁用了对node_module的babel转换，也可以正常使用cnchr
3. 修复了多音字广和厂的默认读音

## 2.0.5 - 2.0.6
1. 加入了 typescript 声明文件 index.d.ts
2. script 方式引用增加了 latest.min.js 版本

## 2.0.4
1. 主要扩充了繁体字库
2. 修改了 繁体字、简体字、火星体之间的转换方法，只保留了六个转换方法

## 2.0.3
1. 去除 origin 参数，多音词模式下使用 poly参数会启用备选多音字功能而禁用多音词功能
2. orderToWord 加入繁体字支持，参数修改为 ['all','simple']
3. 增加参数校验中提示可选值
4. 对词库进行一些修改

## 2.0.2
1. 添加多音字默认读音字典
2. 增加根据笔画数反推导出汉字的功能 orderToWord
3. 修改一些多音字的默认读音
   
## 2.0 （升级版本）
1. 备选 **多音字** 等功能
2. 支持 **多音词**
3. 支持 **拼音音调**
4. 获取汉字 **笔画顺序** 、笔画详细名称、通过笔画顺序推出原汉字等
5. 支持 **简体字** 、 **繁体字** 、 **火星文** 互转
6. 支持 **繁体字** 拼音、笔画数，实现和简体字一样的功能
7. **体积小**，最小压缩版本仅 42 kb
8.  **多端可用**，可用于 原生浏览器环境、webpack环境、nodejs环境...，几乎支持所有js能运行的环境
9.  丰富的配置，按需取用
    
## 1.0（基础版本）
1. 获取 **汉字拼音** ，支持首字母、大小写、数组分割
2. 获取 **汉字笔画数**


   
