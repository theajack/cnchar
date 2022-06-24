window.jsboxCode = {
    lib: ['cnchar', 'cnchar-voice'],
    lang: 'html',
    code: /* html */`<div>
    <div class='jx-block'>
        <input class="jx-input jx-full" id="_input"></input>
    </div>
    <div class='jx-block'>
        <button class="jx-buttton" onclick="recognize()">语音识别</button>
        <button class="jx-buttton" onclick="speak()">语音生成</button>
    </div>
    <div class='jx-block'>
        <input class="jx-input" id="_input2"></input>
    </div>
    <div class='jx-block'>
        <button class="jx-buttton" onclick="voice()">单个汉字发音</button>
    </div>
</div>
<script>
    function recognize(){
        toast('请说一些话...');
        cnchar.voice.recognize({
            onend (s) { _input.value = s; }
        });
    }
    function speak(){
        if(!_input.value) {
            toast('请输入一些汉字');
            return;
        }
        cnchar.voice.speak(_input.value);
    }
    function voice(){
        if(!_input2.value) {
            toast('请输入一些汉字');
            return;
        }
        cnchar.voice(_input2.value);
    }
</script>`
};

