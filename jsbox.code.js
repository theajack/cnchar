window.jsboxCode = {
    lib: 'https://cdn.jsdelivr.net/npm/cnchar-all/cnchar.all.min.js',
    lang: 'html',
    code: /* html */`<style>
    #cnchar-area{
        line-height: 30px;
    }
</style>
<div id='draw-area'></div>
<div id='cnchar-area'></div>
<script>
    var drawArea = document.getElementById('draw-area');
    drawArea.innerHTML = '';
    var option = {
        clear: false,
        el: drawArea,
        style: {
            radicalColor: '#44f',
            backgroundColor: '#eee',
            length: 60
        }
    };
    option.type = cnchar.draw.TYPE.NORMAL;
    cnchar.draw('你好', option);

    option.type = cnchar.draw.TYPE.STROKE;
    cnchar.draw('汉字', option);

    option.type = cnchar.draw.TYPE.ANIMATION;
    cnchar.draw('很酷', option);

    var res = [
        cnchar.version,
        cnchar.stroke('你好', 'order', 'shape'),
        cnchar.stroke('长城', 'order', 'name'),
        cnchar.orderToWord(['横', '撇', '捺']),
        cnchar.convert.simpleToTrad('中国长城'),
        cnchar.convert.tradToSimple('漢字'),
        '美好的地方'.spell('tone'),
        '长大了'.spell(),
        '长大了'.spell('poly'),
        cnchar.strokeToWord(25, 'simple'),
        cnchar.idiom(['五', '', '十', '']),
        cnchar.xhy('大水冲了龙王庙'),
        cnchar.radical('你好呀'),
        cnchar.sortSpell(['张三', '张大','李四','王五']),
        cnchar.sortStroke(['你', '好', '呀']),
        cnchar.isCnChar('A'),
        JSON.stringify(cnchar.spellInfo('Hàn')),
    ]
    document.getElementById('cnchar-area').innerText = res.join('\\n');
    console.log(res);
</script>`
};
