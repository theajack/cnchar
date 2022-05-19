---
sidebarDepth: 0  // 吐槽：这里设置0无效！只能设置1或2！
---



<!-- ![](../.vuepress/public/name.png) -->

# 简介

--------------------

<p>
    <a href="https://www.github.com/theajack/cnchar/stargazers" target="_black">
        <img src="https://img.shields.io/github/stars/theajack/cnchar?logo=github" alt="stars" />
    </a>
    <a href="https://www.github.com/theajack/cnchar/network/members" target="_black">
        <img src="https://img.shields.io/github/forks/theajack/cnchar?logo=github" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/cnchar" target="_black">
        <img src="https://img.shields.io/npm/v/cnchar?logo=npm" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/cnchar" target="_black">
        <img src="https://img.shields.io/npm/dm/cnchar?color=%23ffca28&logo=npm" alt="downloads" />
    </a>
    <a href="https://www.jsdelivr.com/package/npm/cnchar" target="_black">
        <img src="https://data.jsdelivr.com/v1/package/npm/cnchar/badge" alt="jsdelivr" />
    </a>
    <a href="https://github.com/theajack" target="_black">
        <img src="https://img.shields.io/badge/Author-%20theajack%20-7289da.svg?&logo=github" alt="author" />
    </a>
    <a href="https://www.github.com/theajack/cnchar/blob/master/LICENSE" target="_black">
        <img src="https://img.shields.io/github/license/theajack/cnchar?color=%232DCE89&logo=github" alt="license" />
    </a>
    <a href="https://cdn.jsdelivr.net/gh/theajack/cnchar/dist/cnchar.latest.min.js"><img src="https://img.shields.io/bundlephobia/minzip/cnchar.svg" alt="Size"></a>
    <a href="https://github.com/theajack/cnchar/search?l=javascript"><img src="https://img.shields.io/github/languages/top/theajack/cnchar.svg" alt="TopLang"></a>
    <a href="https://github.com/theajack/cnchar/issues"><img src="https://img.shields.io/github/issues-closed/theajack/cnchar.svg" alt="issue"></a>
    <a href="https://www.github.com/theajack/cnchar"><img src="https://img.shields.io/librariesio/dependent-repos/npm/cnchar.svg" alt="Dependent"></a>
</p>

**cnchar 是一款功能全面、多端支持的汉字拼音笔画 js 库**

**[English](https://github.com/theajack/cnchar/blob/master/helper/README.en.md)| [备用文档地址](https://theajack.github.io/cnchar) | [更新日志](https://github.com/theajack/cnchar/blob/master/helper/version.md) | 应用:[打字游戏](https://theajack.github.io/type/)、[打字钢琴](https://theajack.github.io/piano/) | [反馈错误/缺漏](https://github.com/theajack/cnchar/issues/new) | [Gitee](https://gitee.com/theajack/cnchar) | QQ Group: 958278438 | [留言板](https://theajack.github.io/message-board/?app=cnchar)**

## 1. 前言

感谢同学们对于 cnchar 的支持，由于 cnchar 词库来源于网络，虽然经过了本人的修改和扩充，但是还是难免有错误与缺漏之处，希望大家可以将使用中发现的错误与缺漏之处 [反馈](https://github.com/theajack/cnchar/issues/new) 给我或自行修改提交pr

[我要反馈错误或缺漏](https://github.com/theajack/cnchar/issues/new)
<!-- ![](../.vuepress/public/doc.gif) -->

## 2. 功能

1. 获取 **汉字拼音** ，支持首字母、大小写、数组分割、备选 **多音字** 等功能
2. 支持 **多音词**
3. 支持 **拼音音调**
4. 获取汉字 **笔画数** 、支持数组分割
5. 获取汉字 **笔画顺序** 、笔画详细名称
6. 支持可视化 **绘制汉字笔画** 、多种绘制模式可选
7. 支持 **语音合成** 和 **语音识别**
8. 支持 **汉字组词** 和 **汉字解释**
9. 支持 **简体字** 、 **繁体字** 、 **火星文** 互转
10. 支持 **查找** 某拼音的所有 **汉字** ，繁体字，多音字
11. 支持 **查找** 指定笔画数的所有 **汉字** ，繁体字
12. 支持 **根据笔画顺序查询** 汉字
13. 支持 **查询拼音的信息**，包含声母、韵母、音调、音调位置的等
14. 支持 **繁体字** 拼音、笔画数及以上所有功能，实现和简体字一样的功能
15. 支持 **成语** 查询功能，可以按照汉字、拼音（声调）、笔画数查询成语
16. 支持 **歇后语** 查询功能，支持模糊查询
17. 支持 **偏旁部首** 查询功能
18. 支持**自定义**拼音笔画等数据，使用更灵活
19. 
20. 提供汉字工具方法，方便开发者更便捷高效地 **操作拼音和汉字**
21. **体积小**，min 版本仅 46 kb，zip 版本 34 kb (含有大量汉字拼音字典)
22. **多端可用**，可用于 **浏览器、nodejs、小程序/小游戏、ReactNative/Weex/Uniapp/Electron、webpack**...，支持所有 js 能运行的环境
23. **typescript**，主库及所有插件库均使用typescript开发
24. 丰富的配置，按功能拆分成插件，按需取用
25. 支持 **IE9**及以上版本

## 3. 概览

考虑到不同的需求，cnchar 的功能被拆分到以下十二个库中，方便开发者按需取用：

|     名称     | 描述 |   功能   | 支持版本 | node支持 | 小程序 |
| :----------: | :------------------------------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
|    cnchar    | 主 js 库，其他三个库依赖于这个库 |    含有简体字拼音、多音字、音调、笔画数等功能   | -- | 是 | 是 |
| cnchar-poly  |    多音词库    |     含有识别多音词功能     | -- | 是 | 是 |
| cnchar-order |   笔画顺序库   |    含有识别笔画顺序、笔画名称、笔画形状等功能       | -- | 是 | 是 |
| cnchar-trad  |    繁体字库    | 支持繁体、火星、简体互转，支持繁体拼音笔画多音字全功能 | -- | 是 | 是 |
| cnchar-draw  |    绘制笔画库    | 支持可视化绘制汉字，该库可脱离cnchar使用，该库仅在浏览器环境下可用 | 2.1+ | 否 | 部分 |
| cnchar-idiom  |    成语库    | 支持成语查询等功能 | 2.2+ | 是 | 是 |
| cnchar-xhy  |    歇后语库    | 支持歇后语查询等功能 | 2.2+ | 是 | 是 |
| cnchar-radical  |    偏旁部首库    | 支持查询汉字偏旁部首 | 2.2.5+ | 是 | 是 |
| cnchar-words  |    汉字组词库    | 支持根据单个或多个汉字查询词组 | 3.1.0+ | 是 | 是 |
| cnchar-explain  |    汉字解释库    | 支持查询汉字含义 | 3.1.0+ | 是 | 是 |
| cnchar-voice  |    语音识别和语音合成    | 支持对中文进行发音与合成 | 3.1.0+ | 否 | 部分 |
| cnchar-data  |    离线词典库    | 用以支持部分插件库的离线使用及自定义部署 | 3.1.0+ | 是 | 是 |

<div>
    <star></star>
</div>


