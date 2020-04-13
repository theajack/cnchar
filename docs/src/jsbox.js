import event from './event';
let jsbox = null;
const url = 'https://theajack.gitee.io/jsbox?theme=dark&remind=false';

function main () {
    if (jsbox !== null) {
        return;
    }
    hackConsole();
    initStyle();
    let mask = initDom();
    let iframe = mask.querySelector('.jsbox-iframe');
    let closeIcon = mask.querySelector('.jsbox-close');
    function open () {
        mask.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    function close () {
        mask.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    function id (_id = '') {
        if (jsbox._id !== _id) {
            jsbox._id = _id;
            const config = (location.host.indexOf('localhost') !== -1) ? 'http://localhost:8080/config.js' : 'https://cdn.jsdelivr.net/gh/theajack/cnchar/docs/config.js';
            jsbox.url = `${url}&config=${encodeURIComponent(config)}&id=${_id}`;
            iframe.src = jsbox.url;
        }
        open();
    }
    function code (_code = '') {
        if (jsbox._code !== _code) {
            jsbox._code = _code;
            jsbox.url = `${url}&code=${encodeURIComponent(code)}`;
            iframe.src = jsbox.url;
        }
        open();
    }
    closeIcon.onclick = close;
    jsbox = {
        open,
        close,
        code,
        id
    };
    return jsbox;
}

function hackConsole () {
    let log = console.log;
    console.log = (...arg) => {
        event.emit('onlog', arg);
        log(...arg);
    };
}

function initDom () {
    let mask = document.createElement('div');
    mask.className = 'jsbox-mask';
    mask.innerHTML = /* html*/`
    <div class='jsbox-header'>
        Powered by <a class='jsbox-link' target='view_window' href='https://github.com/theajack/jsbox'><i class='ei-cube-alt'></i> JSBox</a>
        <i class='ei-times jsbox-close'></i>
    </div>
    <div class='jsbox-loading-w'><i class='ei-spinner-indicator ei-spin'></i></div>
    <iframe class='jsbox-iframe' src='' frameborder='0'></iframe>`;
    document.body.appendChild(mask);
    return mask;
}

function initStyle () {
    let style = document.createElement('style');
    style.innerText = /* css*/`
    .jsbox-mask{
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000000dd;
        display: none;
    }
    .jsbox-header{
        height: 4%;
        vertical-align: middle;
        font-size: 1rem;
        color: #eee;
        display: flex;
        align-items: center;
        padding: 0 5px;
        background-color: #1e1e1e;
    }
    .jsbox-link{
        margin-left: 5px;
    }
    .jsbox-close{
        cursor: pointer;
        position: absolute;
        right: 10px;
        font-size: 1.5rem;
    }
    .jsbox-close:hover{
        color: #e88;
    }
    .jsbox-iframe{
        width: 100%;
        height: 96%;
        box-shadow: 0 0 15px #000;
        position: relative;
    }
    .jsbox-loading-w{
        position: absolute;
        font-size: 3rem;
        color: #aaa;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
    }`;
    document.head.appendChild(style);
}

export default main;