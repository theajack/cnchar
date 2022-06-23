window.jsboxCode = {
    lib: ['cnchar', 'cnchar-name'],
    lang: 'html',
    code: /* html */`<div>
    <div class='jx-block'>请输入模版，希望自动生成的汉字使用*代替</div>
    <div class='jx-block'>如：陈**，王*，李*明，赵**， ***，司马**， 司马*</div>
    <input id="_input" class="jx-input jx-full" placeholder="请输入模版"></input>
    <div class='jx-block'>
        请输入生成名字个数：<input class="jx-input" id="_number" value="5"></input>
    </div>
    <div class='jx-block'>
        <input id='_radio1' type='radio' checked='true' name='gender'>
        <label for='_radio1'>不限</label>
        <input id='_radio2' type='radio' name='gender'/>
        <label for='_radio2'>男孩名</label>
        <input id='_radio3' type='radio' name='gender'>
        <label for='_radio3'>女孩名</label>
    </div>
    <div class='jx-block'>
        <button class="jx-buttton" onclick="start()">生成</button>
    </div>
    <div class='jx-block' id="_result">
    </div>
</div>
<script>
    function start(){
        var input = _input.value || '***';
        var number = parseInt(_number.value);
        var gender = 'both';
        if(_radio2.checked) gender = 'boy';
        else if(_radio3.checked) gender = 'girl';
        _result.innerText = cnchar.name(input, {number: number, gender: gender});
    }
</script>`
};
