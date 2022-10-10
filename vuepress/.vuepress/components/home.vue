<template>
    <div class='home-wrapper'>
        <div class='title'>
            <img src='https://shiyix.cn/cnchar3.png' alt=''>
        </div>
        <div class='desc'>功能全面、多端支持的汉字拼音笔画js库</div>
        <div class='test'>
            <el-input v-if='loaded' v-model='text' class='test-input' type='text' placeholder='输入一些汉字试试' @input='input'></el-input>
            <div v-else>
                <i style='vertical-align: middle;' class='ei-spinner-snake ei-spin'></i>
                <span style='vertical-align: middle;'>cnchar 正在加载中</span>
            </div>
            <div class='btn-w' v-show='supportVoice'>
                <el-button type='default' @click='regonize'>语音识别 <i class='ei-music'></i></el-button>
                <el-button type='default' @click='speak'>语音合成 <i class='ei-volume-up'></i></el-button>
            </div>
            <div class='show-area' v-show='text!==""'>
                <div>{{spell}} <span class='split'>|</span> 共{{stroke}}笔</div>
                <div>繁体: {{trad}} <span class='split'>|</span> 火星文: {{spark}}</div>
                <div>笔顺: {{order}}</div>
                <div id='draw-area'></div>
            </div>
        </div>
        
        <div class='start-w'>
            <el-button type='primary' @click='start'>开始 <i class='ei-location-arrow'></i></el-button>
            <el-button type='primary' @click='run'>运行 <i class='ei-cube-alt'></i></el-button>
        </div>
        <div class='feature-w'>
            <div class='f-i'>
                <a style='font-weight: normal;' href='/cnchar/guide/intro.html#_2-%E5%8A%9F%E8%83%BD'><div class='f-t'><i class='ei-rocket'></i>功能全面</div></a>
                <div class='f-des'>拼音/笔画数/多音字词</div>
                <div class='f-des'>多种模式绘制汉字</div>
                <div class='f-des'>语音识别/语音合成</div>
                <div class='f-des'>繁体字/火星文</div>
                <div class='f-des'>笔顺/偏旁部首/推算/排序</div>
                <div class='f-des'>随机生成/输入法</div>
                <div class='f-des'>...</div>
            </div>
            <div class='f-i'>
                <div class='f-t'><i class='ei-tablet'></i>多端支持</div>
                <div class='f-des'>浏览器</div>
                <div class='f-des'>nodejs</div>
                <div class='f-des'>小程序/小游戏</div>
                <div class='f-des'>ReactNative/Weex/Uniapp/Electron</div>
                <div class='f-des'>webpack</div>
                <div class='f-des'>typescript开发</div>
                <div class='f-des'>...</div>
            </div>
            <div class='f-i'>
                <div class='f-t'><i class='ei-cubes'></i>按需取用</div>
                <div class='f-des'>自定义插件</div>
                <div class='f-des'>自定义数据</div>
                <div class='f-des'>自定义部署/离线使用</div>
                <div class='f-des'>功能分包/简单易用</div>
                <div class='f-des'>体积小巧/支持IE9+</div>
                <div class='f-des'>npm+cdn</div>
                <div class='f-des'>...</div>
            </div>
        </div>
        <div class='copy-right'>MIT Licensed | Copyright © 2020 - present <a href='https://www.github.com/theajack' target='view_window'>theajack</a></div>
        <div id='comment'>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text: '',
                spell: '',
                stroke: '',
                trad: '',
                spark: '',
                order: '',
                supportVoice: false,
                loaded: false,
            };
        },
        mounted () {
            if (window.cnchar) {
                this.init();
            } else {
                window.addEventListener('load', () => {
                    this.init();
                });
            }
        },
        methods: {
            init () {
                this.loaded = true;
                this.supportVoice = window.cnchar.voice && window.cnchar.voice.speak.supported && window.cnchar.voice.recognize.supported;
                if (location.hash) {
                    this.text = decodeURIComponent(location.hash).substring(1);
                    this.applyText();
                }
            },
            input () {
                if (this.text) {
                    location.hash = this.text;
                    this.applyText();
                }
            },
            applyText () {
                if (this.text) {
                    this.spell = this.text.spell('array', 'tone').join(' ');
                    this.stroke =  this.text.stroke();
                    this.trad =  this.text.convertSimpleToTrad('trad');
                    this.spark =  this.text.convertSimpleToSpark('spark');
                    this.order =  JSON.stringify(this.text.stroke('order', 'shape')).replace(/"/g, '').replace(/null/g, '无');
                    const str = this.pickCnChar(this.text);
                    const el = document.getElementById('draw-area');
                    if (el) {
                        el.innerHTML = '';
                        if (str !== '') {
                            window.cnchar.draw(str, {el});
                        }
                    }
                }
            },
            isCnChar (word) {
                const unicode = word.charCodeAt(0);
                return unicode >= 19968 && unicode <= 40869;
            },
            pickCnChar (text) {
                let v = '';
                for (let i = 0; i < text.length; i++) {
                    if (this.isCnChar(text[i])) {
                        v += text[i];
                    }
                }
                return v;
            },
            start () {
                window.location.href = '/cnchar/guide/intro';
            },
            run () {
                window.open('https://theajack.github.io/jsbox/?github=theajack.cnchar@master');
            },
            regonize () {
                window.cnchar.voice.recognize({
                    onstart: () => {
                        this.$toast('录音中，请说一些中文');
                    },
                    onend: (s) => {
                        this.text = s;
                        this.applyText();
                    }
                });
            },
            speak () {
                if (!this.text) {
                    this.$toast('请先输入一些中文');
                } else {
                    window.cnchar.voice.speak(this.text);
                }
            }
        },
    };
</script>

<style lang="less">
    .home-wrapper{
        text-align: center;
        img.logo{
            width: 100%;
            max-width: 240px;
        }
        .title{
            font-weight: bold;
            font-family: Microsoft Yahei;
            font-size: 3.5rem;
            margin-bottom: 10px;
            margin-top: 80px;
            img{
                width: 220px;
            }
        }
        .desc{
            font-size: 1.1rem;
            font-weight: bold;
        }
        .test{
            margin: 1.4rem 0;
        }
        .test-input{
            max-width:800px;
            font-size: 1.1rem;
            .el-input__inner{
                text-align: center;
            }
        }
        .show-area{
            line-height: 2rem;
            margin: 1rem 0;
            .split{
                margin: 0 1rem;
            }
            #draw-area{
                margin-top: 0.8rem;
            }
        }
        .feature-w{
            display: flex;
            justify-content: center;
            max-width: 1000px;
            margin: 0 auto;
            .f-i{
                align-items: center;
                width: 33.3333333%;
                padding: 0 10px;
                .f-t{
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                    color: #007acc;
                    i{
                        margin-right: 4px;
                    }
                }
                .f-des{
                   line-height: 1.6rem;
                }
            }
        }
        .copy-right{
            margin-top: 1rem;
            color: #aaa;
            font-size: 0.9rem;
        }
        .btn-w{
            max-width: 1000px;
            padding: 0.5rem 0;
            margin: 0 auto;
        }
        .start-w{
            max-width: 1000px;
            padding: 1.5rem 0;
            border-top: 1px solid #eee;
            margin: 0 auto;
        }
        .el-button{
            // font-size: 1rem;
            // padding: 0.8rem 1.2rem;
        }
    }
</style>
