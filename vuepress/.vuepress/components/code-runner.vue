<template>
    <div v-show='localCode!==""' class='code-runner' ref='runner'>
        <span class='code-title'>{{title}}</span>
        <span class='code-desc'>{{desc}}</span>
        <i class='ei-play code-btn' @click='run' title='在线运行'></i>
        <i class='ei-copy code-btn' @click='copy' title='复制代码'></i>
    </div>
</template>

<script>
    import initJSBox from '../../src/jsbox';
    import {copy} from '../../src/util';
    let jsbox = null;
    export default {
        props: {
            title: {
                type: String,
                default: 'JsBox'
            },
            desc: {
                type: String,
                default: '点击右侧按钮运行'
            },
        },
        data () {
            return {
                localCode: '',
                localLang: '',
            };
        },
        mounted () {
            jsbox = initJSBox();
            this.initCode();
        },
        methods: {
            initCode () {
                const el = this.$refs.runner;
                if (!el) return;
                const next = el.nextElementSibling;
                if (!next) return;

                if (next.className.indexOf('language-js') !== -1) {
                    this.localLang = 'javascript';
                } else if (next.className.indexOf('language-html') !== -1) {
                    this.localLang = 'html';
                }

                if (this.localLang)
                    this.localCode = next.innerText;
            },
            run () {
                jsbox.code(this.localCode, this.localLang);
            },
            copy () {
                if (copy(this.localCode)) {
                    this.$message.success('复制成功');
                } else {
                    this.$message.error('复制成功');
                }
            }
        }
    };
</script>

<style lang="less" scoped>
.code-runner{
    margin-top: 10px;
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
</style>
