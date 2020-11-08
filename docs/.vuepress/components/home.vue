<template>
    <div class='home-wrapper'>
        <div>
            <img class='logo' src='../../images/logo.png' alt='' srcset=''>
        </div>
        <div class='title'>cnchar</div>
        <div class='desc'>功能全面、多端支持的汉字拼音笔画js库</div>
        <div class='test'>
            <el-input v-model='text' class='test-input' type='text' placeholder='输入一些汉字试试' @input='input'></el-input>
            <div class='show-area' v-show='text!==""'>
                <div>{{spell}} <span class='split'>|</span> 共{{stroke}}笔</div>
                <div>繁体: {{trad}} <span class='split'>|</span> 火星文: {{spark}}</div>
                <div>笔顺: {{order}}</div>
                <div id='draw-area'></div>
            </div>
        </div>
        <div class='start-w'>
            <el-button type='primary' @click='start'>开始 <i class='ei-location-arrow'></i></el-button>
            <el-button type='primary' @click='run'>运行 <i class='ei-play'></i></el-button>
        </div>
        <div class='feature-w'>
            <div class='f-i'>
                <div class='f-t'><i class='ei-rocket'></i>功能全面</div>
                <div class='f-des'>拼音、笔画数</div>
                <div class='f-des'>多音字词</div>
                <div class='f-des'>繁体字、火星文</div>
                <div class='f-des'>汉字笔顺、偏旁部首</div>
                <div class='f-des'>多种模式绘制汉字</div>
                <div class='f-des'>汉字推算、拼音排序</div>
                <div class='f-des'>...</div>
            </div>
            <div class='f-i'>
                <div class='f-t'><i class='ei-tablet'></i>多端支持</div>
                <div class='f-des'>浏览器</div>
                <div class='f-des'>nodejs</div>
                <div class='f-des'>小程序/小游戏</div>
                <div class='f-des'>ReactNative/Weex/Uniapp/Electron</div>
                <div class='f-des'>webpack</div>
                <div class='f-des'>typescript支持</div>
                <div class='f-des'>...</div>
            </div>
            <div class='f-i'>
                <div class='f-t'><i class='ei-cubes'></i>按需取用</div>
                <div class='f-des'>功能分包</div>
                <div class='f-des'>体积小巧</div>
                <div class='f-des'>简单易用</div>
                <div class='f-des'>npm</div>
                <div class='f-des'>cdn</div>
            </div>
        </div>
        <div class='copy-right'>MIT Licensed | Copyright © 2020 present <a href='https://www.github.com/theajack' target='view_window'>theajack</a></div>
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
            };
        },
        methods: {
            input () {
                if (this.text) {
                    this.spell = this.text.spell('array', 'tone').join(' ');
                    this.stroke =  this.text.stroke();
                    this.trad =  this.text.convertSimpleToTrad('trad');
                    this.spark =  this.text.convertSimpleToSpark('spark');
                    this.order =  JSON.stringify(this.text.stroke('order', 'shape')).replace(/"/g, '').replace(/null/g, '无');
                    let str = this.pickCnChar(this.text);
                    let el = document.getElementById('draw-area');
                    el.innerHTML = '';
                    if (str !== '') {
                        window.cnchar.draw(str, {el});
                    }
                }
            },
            isCnChar (word) {
                let unicode = word.charCodeAt(0);
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
                window.location.href = '/cnchar/v2/guide/';
            },
            run () {
                window.open('https://theajack.gitee.io/jsbox/?theme=dark&lang=html&lib=cnchar-all&code=DwZwLgngNgpgfAWAFAAI0oMQGMB2WAWAhgE4C0JMhA3sunSlAJY4yn4yMDm+YAXCgGYADAAcAHgG5a6AL7JgAenDR48gCaMAbikZqAvAHJcBEuWKUDcRRs2IkwGzv0G1xQgHczFqwpt3QWMSMImB2dJokKK4eAILmhCh6UQD2WACuALYwOGAAdJwwYACisFk5AEIQAJJqABQubp4UhAYAlFKo6NHucZS5zCzEABIAKgCyADKJKAYGHeGRySGMyTjTNJ30KFiwJPwAZoRQIDAANNJbMFD83b2E55v0yrD8G1tbbhpYRwDCyVDJYj8AwYAAsoP2Bge73oACNCFgANacYjJNI4NR-AFAmYYGD4qEXGEMbKcMD4fgANiERLocke9LoSzAKxwuUgIhg02MRGIuW6uRGAE0AApFXIAOQA8gAlMYxCbzdA8kj8xr1QAG8oBfTShKGZrPayCJ+tW7IgnO5eF5ao8gtF4oAyiMZVKANJFJVoFV87r1QCSNoB1bV1JpwhqQxuWpo5XKS3pt7jtYtyMQlVXlIyqUolnu2VtVvoMgAj9QDuicHI6GOkSIsQUOYQNMANq05V5vngVGImD1QAAcoAqOV1BkBahgxDa0PecfbyU79UA7qmAOfUB1g0TkB0ORwOcIQsmPm17W7l18QRskAOpD2oNgyAKisB4BwkwHgC9jAwAXVa462BkAcf5awAhboAGdUATtMDFyEBOSgKB6jAVYYF3R46AMQB-VMAck1ADC5ECwKuSD3z3GYUPQ0DwMggwRH+CA4JhScwA7GAT3PYg6gAJgAVlOGYQEYDIRFgCiJwPXQVgyS8DEAFLkBwHQBBZXEt8P3oOMxHwCB6mQwAWG0AJsVUMATPzAGjnQBMvV4rY40+RhvmI7VAAEVAyUBfIk1FSTJsjyApilKRzKhqepvS8FpWn6HBBhGGAxDAaY61yAArZJmHqAAdHA2iJZccBAf4YFyAFOFqOtWnkJRAmCUIgA');
            }
        },
        mounted () {
            let timer = setInterval(() => {
                let comment = document.getElementById('vcomments');
                if (comment) {
                    comment.className += ' home-comment';
                    clearInterval(timer);
                }
            }, 500);
        }
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
        .start-w{
            max-width: 1000px;
            padding: 1.5rem 0;
            border-top: 1px solid #eee;
            margin: 0 auto;
        }
        .el-button{
            font-size: 1rem;
            padding: 0.8rem 1.2rem;
        }
    }
</style>
