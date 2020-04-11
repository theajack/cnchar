<template>
    <div class='frame-mask' v-show='visible'>
        <div class='header'>
            Powered by <a class='link' target='view_window' href='https://github.com/theajack/jsbox'><i class='ei-cube-alt'></i> JSbox</a>
            <i @click='close' class='ei-times'></i>
        </div>
        <div class='loading-w'><i class='ei-spinner-indicator ei-spin'></i></div>
        <iframe class='frame-c' ref='container' src='' frameborder='0'></iframe>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                visible: false,
                src: '',
            };
        },
        methods: {
            open (src = 'https://theajack.gitee.io/jsbox') {
                if (this.src !== src) {
                    this.src = src;
                    this.$refs.container.src = 'https://theajack.gitee.io/jsbox';
                }
                this.visible = true;
                document.body.style.overflow = 'hidden';
            },
            close () {
                this.visible = false;
                document.body.style.overflow = 'auto';
            }
        }
    };
</script>
<style lang="less" scoped>
    .frame-mask{
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000d;
        .header{
            height: 5%;
            vertical-align: middle;
            font-size: 1rem;
            color: #eee;
            display: flex;
            align-items: center;
            padding: 0 5px;
            .link{
                margin-left: 5px;
            }
            .ei-times{
                cursor: pointer;
                position: absolute;
                right: 10px;
                font-size: 1.5rem;
                &:hover{
                    color: #e88;
                }
            }
        }
        .frame-c{
            width: 100%;
            height: 95%;
            box-shadow: 0 0 15px #000;
            position: relative;
        }
        .loading-w{
            position: absolute;
            font-size: 3rem;
            color: #aaa;
            top: 50%;
            transform: translate(-50%,-50%);
            left: 50%;
        }
    }

</style>
