
/*
  企业管理-企业列表
 */
<template>
<!-- 筛选 -->
  <div class="page-container" >
    <a-radio-group   size="small" :value="size" @change="handleSizeChange">
      <a-radio-button value="1">全部</a-radio-button>
      <a-radio-button value="2">待审核</a-radio-button>
      <a-radio-button value="3">已通过</a-radio-button>
      <a-radio-button value="4">已拒绝</a-radio-button>

         
    </a-radio-group>
    <!-- table -->
    <a-table 
      class="mat24"
     :pagination="false"
      size="small"
      rowKey="id"
      :columns="companyListTtitle"
      bordered
      :dataSource="companyListData"
    >
      <a-button
        size="small"
        type="primary"
        slot="action"
        slot-scope="item"
        @click="deleteClick(item)"
      >查看</a-button>
    </a-table>
    <!-- 分页 -->
    <a-pagination size="small" showQuickJumper :defaultCurrent="2" :total="totalPage" @change="onChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      companyListData: [],
      totalPage: 0,
      size: '1',
      companyListTtitle: [
        { title: "编号", dataIndex: "id", align: "center" },
        { title: "公司", dataIndex: "companyName", align: "center" },
        { title: "公司简称", dataIndex: "companyShortName", align: "center" },
        { title: "超级管理员", dataIndex: "superUserName", align: "center" },
        { title: "手机号码", dataIndex: "superUserPhone", align: "center" },
        { title: "审核状态", dataIndex: "companyStatusName", align: "center" },
        { title: "入驻时间", dataIndex: "createDate", align: "center" },
        {
          title: "审核人/添加人",
          dataIndex: "verifyUserName",
          align: "center"
        },
        {
          title: "操作",
          dataIndex: "",
          scopedSlots: { customRender: "action" },
          align: "center"
        }
      ]
    };
  },
  created() {
    this.queryCompanyList();
  },
  methods: {
    handleSizeChange(e){
        this.size = e.target.value
    },
    deleteClick(item) {
      console.log(item);
    },

    onChange(pageNumber) {
      console.log("Page: ", pageNumber);
    },

    queryCompanyList() {
      console.log(111);
      this.listQuery = {
        pageNum: 1,
        pageSize: 20
      };
      // 查询
      this.httpClient
        .httpClientPost(
          this.projectConfig.AIO_OPERATION_PLATFORM_BASE_URL,
          this.projectConfig.URL_V10_COMPANY_QUERY,
          this.listQuery
        )
        .then(res => {
          console.log(2222);
          this.companyListData = res.returnObject.list;
          console.log(this.companyListData);
          this.totalPage = res.returnObject.total;
          console.log(this.totalPage);
        })
        .catch(error => {});
    }
  }
};
</script>
<style>
</style>