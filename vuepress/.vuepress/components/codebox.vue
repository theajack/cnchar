<template>
    <div class='code-box'>
        <div class='code-runner'>
            <span class='code-title'>{{title || id}}</span>
            <span class='code-desc'>{{localDesc}}</span>
            <i class='ei-play code-btn' @click='run' title='在线运行'></i>
            <i class='ei-copy code-btn' @click='copy' title='复制代码'></i>
        </div>
        <highlight-code :code='localCode' :lang='localLang'>
        </highlight-code>
        <div v-show='html!==""'>
            <div class='output-title'>运行结果</div>
            <div class='output-area' :class='{folded: localFold}'>
                <div class='show-toggle' @click='showToggle'>
                    <i :class='"ei-angle-" +(localFold?"down":"up")'></i>
                    <span class='show-text'>{{localFold?"显示结果":"隐藏结果"}}</span>
                </div>
                <div v-show='!localFold' v-html='html'></div>
            </div>
        </div>
        <div class='powered-by'>
            Powered by <a class='jsbox-link' target='view_window' href='https://github.com/theajack/jsbox'><i class='ei-cube-alt'></i> JSBox</a>
        </div>
    </div>
</template>

<script>
    import initJSBox from '../../src/jsbox';
    import {copy, extractScript, execute} from '../../src/util';
    import event from '../../src/event';
    let jsbox = null;
    export default {
        props: {
            id: {
                type: String,
                default: 'easy-use'
            },
            code: {
                type: String,
                default: ''
            },
            format: {
                type: Boolean,
                default: false
            },
            fold: {
                type: Boolean,
                default: false
            },
            lang: {
                type: String,
                default: 'javascript'
            },
            title: String,
            desc: String,
            onlineLink: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                localCode: '',
                localLang: '',
                localDesc: '',
                localFold: '',
                html: ''
            };
        },
        mounted () {
            jsbox = initJSBox();
            this.localFold = this.fold;
            if (this.code) {
                this.localCode = this.code;
                this.localLang = this.lang;
                this.localDesc = this.desc;
            } else {
                const codes = window.jsbox_config.codes;
                this.localCode = codes[this.id].code;
                this.localLang = codes[this.id].lang === 'html' ? 'html' : 'javascript';
                this.localDesc = codes[this.id].desc || this.desc;
            }
            let js = '';
            if (this.localLang === 'html') {
                const res = extractScript(this.localCode);
                js = res.js;
                this.html = res.html;
            } else {
                js = this.localCode;
            }
            this.$nextTick(() => {
                event.regist('onlog', this.onLog);
                execute({code: js});
                event.remove('onlog', this.onLog);
            });
        },
        methods: {
            onLog (args) {
                if (this.localLang === 'html') {
                    return;
                }
                let html = '';
                let attr = '';
                args.forEach((item) => {
                    if (typeof item === 'object') {
                        if (!(item instanceof Array) || this.format) {
                            attr = 'style="white-space: pre"';
                        }
                        item = JSON.stringify(item, null, 4);
                    } else {
                    }
                    html += `<div ${attr}>${item}</div>`;
                });
                this.html += html;
            },
            copy () {
                if (copy(this.localCode)) {
                    this.$message.success('复制成功');
                } else {
                    this.$message.error('复制成功');
                }
            },
            run () {
                if (this.code) {
                    jsbox.code(this.code);
                } else {
                    jsbox.id(this.id);
                }
            },
            showToggle () {
                this.localFold = !this.localFold;
            }
        }
    };
</script>

<style lang="less" scoped>
    .code-box{
        // background-color: #f4f4f4;
        // padding: 10px;
        // border-radius: 5px;
        // background-color: #f4f4f4;
        padding: 10px 0;
        border-top: 1px solid #eaecef;
        border-bottom: 1px solid #eaecef;
        .code-runner{
            .code-title{
                font-weight: bold;
                margin-right: 10px;
            }
            .code-desc{
                font-size: 0.8rem;
                color: #aaa;
            }
            .code-btn{
                float: right;
                color: #007acc;
                margin-left: 10px;
                cursor: pointer;
                transition: transform .3s ease;
                margin-top: 5px;
                &:hover{
                    transform: scale(1.2);
                }
            }
        }
        pre{
            margin: 0;
            margin-top: 10px;
        }
        .output-area{
            background-color: #2f2f2f;
            border-radius: 5px;
            color: #fff;
            line-height: 1.4;
            padding: 1.25rem 1.5rem;
            overflow-x: auto;
            padding-top: 0.35rem;
            &.folded{
                padding: 0.35rem 1.5rem;
            }
        }
        .output-title{
            margin: 5px 0;
            color: #666;
            font-size: 0.8rem;
        }
        .powered-by{
            font-size: 0.8rem;
            color: #888;
            text-align: right;
            margin-top: 5px;
        }
        .show-toggle{
            text-align: center;
            color: #0098ff;
            cursor: pointer;
            font-size: 1.3rem;
            line-height: 0;
            .show-text{
                font-size: 0.8rem;
                position: relative;
                top: -0.1rem;
                width: 0rem;
                white-space: nowrap;
                display: inline-block;
                opacity: 0;
                transition: all .3s ease;
            }
            &:hover{
                .show-text{
                    opacity: 1;
                    width: 3.2rem;
                }
            }
        }
    }

</style>
