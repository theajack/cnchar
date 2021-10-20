export function extractScript (html) {
    const reg = /<script(.|\n)*?>(.|\n)*?<\/script>/g;
    const arr = html.match(reg);
    if (!arr) {
        return {html, js: ''};
    }
    let js = arr.map(item => {
        html = html.replace(item, ''); // 待提取src
        return extractContent(item);
    }).join('\n').trim();
    if (js) {
        js = '//@ sourceURL=jsbox_run.js \n' + js;
    }
    return {html, js};
}

function extractContent (html, tag = 'script') {
    return html.substring(html.indexOf('>') + 1, html.lastIndexOf('</' + tag + '>')).trim();
}

export function execute ({
    code = '',
    // onload,
    // onerror,
    // ontimeout,
    // timeout = 6000
}) {
    if (code.trim() === '') {
        console.warn('execute code 参数不可为空');
        return;
    }
    if (code.indexOf('\n') === -1) {
        code = `console.log(${code})`;
    }
    new Function(code.trim())();
    // let blob = new Blob([code], {type: 'application/text'});
    // let objectURL = window.URL.createObjectURL(blob);
    // let script = document.createElement('script');
    // let timer = null;
    // if (ontimeout) {
    //     timer = setTimeout(() => {
    //         ontimeout();
    //         document.body.removeChild(script);
    //     }, timeout);
    // }
    // script.onload = function () {
    //     if (onload) {
    //         onload();
    //     }
    //     clearTimeout(timer);
    //     document.body.removeChild(script);
    // };
    // script.onerror = function (err) {
    //     if (onerror) {
    //         onerror(err);
    //     }
    //     clearTimeout(timer);
    //     document.body.removeChild(script);
    // };
    // document.body.appendChild(script);
    // script.src = objectURL;
}

export function copy (str) {
    var input = document.getElementById('_copy_input_');
    if (!input) {
        input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute(
            'style',
            'height:10px;position:fixed;top:-100px;opacity:0;'
        );
        input.setAttribute('id', '_copy_input_');
        document.body.appendChild(input);
    }
    input.value = str;
    input.select();

    try {
        if (document.execCommand('Copy')) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};


export function getUrlParam (name, defVal) {
    return parseUrlParam(window.location.search, name, defVal);
}

export function parseUrlParam (search, name, defVal) {
    if (search[search.length - 1] === '/') {
        search = search.substr(0, search.length - 1);
    }
    if (typeof name !== 'undefined') {
        if (search !== '') {
            const reg = new RegExp('(^|&)' + name + '=([^&]*?)(&|$)', 'i');
            const r = search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
        }
        return (typeof defVal !== 'undefined') ? defVal : null;
    }
    if (search === '') { return {}; }
    const arr = search.substr(1).split('&');
    const param = {};
    arr.forEach(item => {
        const pArr = item.split('=');
        param[pArr[0]] = pArr[1];
    });
    return param;
}