// 包裹示例组件
<template>
  <div class="code">
    <div class="code--title">
      <h2>{{title}}</h2>
      <small>{{description}}</small>
    </div>
    <div class="code--demo">
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    <div v-if="isShow"
         class="code--segment">
      <slot name="codeText"></slot>
    </div>
    <div v-if="$slots.codeText"
         class="code--button">
      <div @click="handleToggleShow"
           class="code--show">
        {{codeTextBtn}}
      </div>
      <div v-if="onlineLink"
           class="code--online"
           @click="handleOnline">
        {{codeTextBtnOnline}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    onlineLink: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      codeTextBtn: '显示代码',
      codeTextBtnOnline: '在线运行'
    }
  },
  methods: {
    handleToggleShow () {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    },
    handleOnline () {
      window.open(this.onlineLink)
    }
  }
}
</script>

<style lang="less" scoped>
.code {
  padding: 40px 0;
  .code--title {
    h2 {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 18px;
    }

    small {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      color: #5e6d82;
    }
  }
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
      0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .code-content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
  .code--button {
    // display: flex;
    position: relative;
    background: #fafbfc;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);

    .code--show {
      // flex: 3;
      display: flex;
      justify-content: center;
    }
    .code--show:hover {
      font-size: 17px;
    }
    .code--online {
      position: absolute;
      top: 0;
      right: 0;
      padding-left: 5px;
      padding-right: 25px;
    }
    .code--online:hover {
      font-size: 17px;
    }
  }

  & + .code {
    margin-top: 40px;
  }

  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>
