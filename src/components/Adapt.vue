<template>
  <div class="adapt-container">
    <div class="btn-main">
      <el-input placeholder="昵称" style="width: 200px; margin-left: 10px" clearable size="small" />
      <el-button icon="el-icon-search" type="primary" size="small" style="margin-left: 10px">查询</el-button>
      <el-button icon="el-icon-plus" type="success" size="small">添加</el-button>
      <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button>
      <el-button type="primary" size="small" @click="toTest">到测试页</el-button>
    </div>
    <el-table v-adaptive="{ className: ['pagination'], duration: 500, custom: 2 }" height="10px" row-key="id" size="small" stripe border :data="tableData">
      <el-table-column type="index" label="序号" align="center" width="80" />
      <el-table-column prop="date" label="日期" align="center" width="180" />
      <el-table-column prop="name" label="姓名" align="center" width="180" />
      <el-table-column prop="works" label="作品" />
    </el-table>
    <el-pagination class="pagination" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script>
export default {
  name: "adapt",
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 20,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    toTest() {
      this.$router.push({ path: "/test" });
    },
    getList() {
      this.tableData = [
        {
          id: 1,
          date: "2020-05-02",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 2,
          date: "2020-05-04",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 3,
          date: "2020-05-01",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 4,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 5,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 6,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 7,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 8,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 9,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 10,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 11,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 12,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 13,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 14,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 15,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 16,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 21,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 17,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 18,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 19,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
        {
          id: 20,
          date: "2020-05-03",
          name: "龙雨溪",
          works: "vue框架",
        },
      ];
      this.total = this.tableData.length;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style>
html,
body,
.adapt-container {
  height: 100%;
}
.el-pagination {
  text-align: right;
  border-top: 10px solid #eee;
}
* {
  margin: 0;
  padding: 0;
}
.btn-main {
  padding: 10px 0;
  border-bottom: 10px solid #eee;
}
</style>
