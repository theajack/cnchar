// 组件api说明 表格
<template>
  <div class="api-wrap">
    <h3>{{title}}</h3>
    <el-table :data="tableData"
              v-bind="$attrs"
              v-on="$listeners"
              style="width: 100%">
      <template v-for="(item, index) in tableHeader">
        <el-table-column :prop="index+''"
                         :label="item">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DemoApi",
  props: {
    type: {
      type: String,
      default: 'attr'
    },
    title: {
      type: String,
      default: '属性'
    },
    tableBody: Array,
    tableHead: String
  },
  computed: {
    tableHeader () {
      return this.tableHead.split("|").map(s => s.replace(/^\s*|\s*$/g, ""))
    },
    tableData () {
      return this.tableBody.map(str => {
        let data = {}
        str.split("|").map((s, i) => data[i] = s.replace(/^\s*|\s*$/g, ""))
        return data
      })
    },
  }
}
</script>

<style lang="less">
.api-wrap {
  padding: 40px 0;
  + .api-wrap {
    margin: 40px 0;
  }
  &:first-child {
    margin-top: 80px;
  }
  &:last-child {
    margin-bottom: 80px;
  }
}
.el-table {
  table {
    border-collapse: collapse;
    margin: 0;
  }

  th,
  td,
  th.is-leaf {
    border: none;
  }

  .el-table__body,
  .el-table__footer,
  .el-table__header {
    border-collapse: collapse;
  }
}
</style>
