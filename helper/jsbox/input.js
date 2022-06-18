window.jsboxCode = {
    lib: ['cnchar', 'cnchar-poly', 'cnchar-words', 'cnchar-input'],
    lang: 'html',
    code: /* html */`<div>
    <input id='_input' class='jx-input' placeholder='请使用英文输入法输入' />
    <div class='jx-block' id='_result'></div>
    <div class='jx-block'>
        <input id='_radio1' type='radio' checked='true' name='type'/>
        <label for='_radio1'>拼音输入法</label>
        <input id='_radio2' type='radio' name='type'>
        <label for='_radio2'>五笔输入法86版</label>
        <input id='_radio3' type='radio' name='type'>
        <label for='_radio3'>五笔输入法98版</label>
    </div>
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
