window.jsboxCode = {
    // lib: 'https://fastly.jsdelivr.net/npm/cnchar-all/cnchar.all.min.js',
    lib: ['cnchar', 'cnchar-poly', 'cnchar-trad', 'cnchar-name'],
    lang: 'html',
    code: /* html */`<div>
    <textarea id="_input" class="jx-textarea" placeholder="请输入一些姓名以进行排序"></textarea>
    <div>
        <div class="jx-block">
            <button onclick="randomNames()">随机5个名字</button>
            <button onclick="sort()">根据拼音排序</button>
            <button onclick="sort('stroke')">根据笔画数排序</button>
        </div>
        <div class="jx-block">
            <button onclick="sortFirst()">根据第一个字拼音排序</button>
            <button onclick="sortFirst('stroke')">根据第一个字笔画数排序</button>
        </div>
    </div>
    <div id="_result"></div>
</div>
<script>
    function randomNames(){
        const names = cnchar.name('***', {number: 5});
        const v = _input.value.trim();
        _input.value = (v ? (v+'\\n'):'') + names.join('\\n');
    }
    function sort(type){
        const sortFn = type === 'stroke' ? cnchar.sortStroke : cnchar.sortSpell;
        _result.innerText = sortFn(
            _input.value.trim().split('\\n').map((name)=>name.trim())
        ).join('\\n');
    }
    function sortFirst(type){
        const compartFn = type === 'stroke' ? cnchar.compareStroke : cnchar.compareSpell;
        _result.innerText = _input.value.trim().split('\\n').sort((a,b)=>{
            const res = compartFn(a[0], b[0]);
            if (res === 'more') return 1;
            if (res === 'less') return -1;
            return 0;
        }).join('\\n');
    }
</script>`
};
