window.jsboxCode = {
    lib: ['cnchar', 'cnchar-idiom', 'cnchar-random'],
    lang: 'html',
    code: /* html */`<div>
    <input id='_input' class='jx-input' placeholder='请输入或生成一个成语' />
    <div class='jx-block' id='_result'></div>
    <div class='jx-block'>
        <input id='_radio1' type='radio' checked='true' name='type'/>
        <label for='_radio1'>汉字模式</label>
        <input id='_radio2' type='radio' name='type'>
        <label for='_radio2'>音调模式</label>
        <input id='_radio3' type='radio' name='type'>
        <label for='_radio3'>拼音模式</label>
    </div>
    <button class='jx-button' onclick='init()'>生成</button>
    <button class='jx-button' onclick='next()'>接龙</button>
</div>
<script>
    function init () {
        _input.value = cnchar.random.idiom();
        _result.innerText = '';
    }
    function next () {
        if (!_input.value) {
            init();
            current = _input.value;
        }else{
            current = _result.innerText || _input.value;
        }
        var args = [];
        var tailWord = current[current.length - 1];
        if (_radio1.checked) {
            args.push(tailWord);
        } else if (_radio2.checked) {
            args.push(tailWord.spell('low', 'tone'), 'spell', 'tone');
        } else {
            args.push(tailWord.spell('low'), 'spell');
        }
        var nextIdioms = cnchar.idiom.apply(null, args);
        if (nextIdioms.length === 0) {
            toast('没有查找到符合条件成语，请重新生成成语');
            return;
        }
        if (current) {
            _input.value = current;
        }
        _result.innerText = cnchar._.pickRandomEle(nextIdioms);
    }
</script>`
};
// https://theajack.github.io/jsbox/?codeSrc=http://localhost:61005/idiom.js
