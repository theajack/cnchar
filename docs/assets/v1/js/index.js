(function (J) {
    J.ready(function () {
        checkParam();
        J.class('func-img').tip([
            '获取汉字的拼音|音调',
            '支持多音字词',
            '获取汉字的笔画数|笔画顺序',
            '支持繁简体转换|繁体拼音笔画'
        ]);
        J.id('_year').txt((new Date()).getFullYear());
        J.id('tryInput').on('input', function () {
            trans(this.val());
        });
        window.initRunJS(J);
    });
    function checkParam () {
        var p = J.urlParam();
        var str = '';
        if (typeof p === 'string') {
            str = p;
        } else if (typeof p === 'object') {
            str = p.s;
        }
        J.id('tryInput').val(str);
        trans(str);
    }
    function trans (str) {
        J.id('draw').html('');
        if (str == '') {
            J.id('spell').txt('');
            J.id('stroke').txt('');
            J.id('strokeOrder').txt('');
            J.id('trad').txt('');
            J.id('spark').txt('');
        } else {
            J.id('spell').txt(str.spell('array', 'tone').join(' '));
            J.id('stroke').txt('共 ' + str.stroke() + ' 笔');
            J.id('strokeOrder').txt('笔画顺序：' + JSON.stringify(str.stroke('order', 'shape')).replace(/"/g, '').replace(/null/g, '无'));
            J.id('trad').txt('繁体字：' + str.convertSimpleToTrad('trad'));
            J.id('spark').txt('火星文：' + str.convertSimpleToSpark('spark'));
            str = pickCnChar(str);
            if (str !== '') {
                window.cnchar.draw(str, {el: '#draw'});
            }
        }
    }
    window.loaded = function () {
        var input = document.getElementById('tryInput');
        input.removeAttribute('readonly');
        input.removeAttribute('class');
        input.value = '';
    };
    function isCnChar (word) {
        let unicode = word.charCodeAt(0);
        return unicode >= 19968 && unicode <= 40869;
    }
    
    function pickCnChar (text) {
        let v = '';
        for (let i = 0; i < text.length; i++) {
            if (isCnChar(text[i])) {
                v += text[i];
            }
        }
        return v;
    }
})(window.J);
