// catButton 的type属性 示例
<template>
  <!-- 注意这里代码必须再包裹一层div，否则会解析报错 -->
  <div>
    <cat-button text="default"></cat-button>
    <cat-button text="primary"
                type="primary"></cat-button>
    <cat-button text="success"
                type="success"></cat-button>
    <cat-button text="info"
                type="info"></cat-button>
    <cat-button text="warning"
                type="warning"></cat-button>
    <cat-button text="danger"
                type="danger"></cat-button>
    <cat-button text="text"
                type="text"></cat-button>
  </div>
</template>
<script>
export default {
}
</script>



