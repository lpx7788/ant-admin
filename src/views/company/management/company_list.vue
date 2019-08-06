
/*
  企业管理-企业列表
 */
<template>
  <div class="app-container">
    222
    <!-- <el-row class="wrapper page">
      <el-col :span="24" class="warp-main">
        <div class="el-bar">
          <p style="margin-bottom:10px;">
            <i class="iconfont icon-users"></i>企业列表
          </p>

          <el-form :inline="true" class="demo-form-inline">
            <el-radio-group v-model="queryStatusRadio" @change="handleQueryStatus"  size="small"  style="margin-right:10px;">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="待审核"></el-radio-button>
                <el-radio-button label="已通过"></el-radio-button>
                <el-radio-button label="已拒绝"></el-radio-button>
            </el-radio-group>
            <el-form-item>
              <el-input prefix-icon="el-icon-search" style="width:300px" v-model="listQuery.queryKey" maxlength="100" clearable placeholder="请输入企业名称/简称"  size="small"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" class="iconfont icon-sousuo2"  @click="queryCompany"  size="small">搜索</el-button>
            </el-form-item>

            <el-form-item style="text-align: right;">
                <el-button style="text-align: right;" type="success" icon="el-icon-plus"  @click="toAddCompanyPage"  size="small">添加企业</el-button>
            </el-form-item>

            <el-form-item>
              <a :href="exportDataUrl">
                  <el-button type="primary" icon="el-icon-upload2" @click="exportData" size="small">导出</el-button>
              </a>
            </el-form-item>

          </el-form>

          <el-table :data="manageData"
		  		v-loading="loadingAppTable"
                border
			  	highlight-current-row
				style="width: 100%;" class="search-list">
            <el-table-column  align="center" prop="id" :show-overflow-tooltip="true" label="编号" width="100" sortable></el-table-column>
            <el-table-column  align="center" prop="companyName" :show-overflow-tooltip="true" label="公司" sortable></el-table-column>
            <el-table-column  align="center" prop="companyShortName" :show-overflow-tooltip="true" :align="eltablecolumn"  label="公司简称" sortable></el-table-column>
            <el-table-column  align="center" prop="superUserName"  label="超级管理员" width="120" ></el-table-column>
            <el-table-column  align="center" prop="superUserPhone"  label="手机号码" ></el-table-column>
            <el-table-column  align="center" prop="companyStatusName"  label="审核状态" width="120" sortable></el-table-column>
            <el-table-column  prop="createDate"  label="入驻时间" sortable></el-table-column>
            <el-table-column  prop="verifyUserName"  label="审核人/添加人" width="120"></el-table-column>
            <el-table-column  prop="opration"  label="操作"   width="100">
              <template slot-scope="scope">
                <el-button type="primary" plain icon="el-icon-view" @click="manageCompany(scope.$index, scope.row)" size="mini">查看</el-button>
              </template>
            </el-table-column>
          </el-table>

            <div v-show="showPagination" class="block" style="text-align:right;margin:10px 0;">
              	<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="listQuery.pageNum"
					:page-sizes="[10, 15, 50, 100]"
					:page-size="listQuery.pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="queryTotal">
				</el-pagination>
            </div>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
import { sessionUtils } from '@/utils/sessionUtils'
 import { appManagement } from '@/utils/appManagement'
export default {
  	data() {
    	return {
			// 分页插件初始化
			// 搜索输入框初始化
			queryTotal: 0,
			// 是否显示分页插件
			showPagination: false,
			listQuery: {
				pageNum: 1,
				pageSize: 10,
                queryKey: '',
                companyStatus: '2'
			},

			// app 展示table
			manageData: [],
			// 是否load table
            loadingAppTable: false,
            eltablecolumn: 'center',

            queryStatusRadio: '已通过',

            // 导出企业数据url
            exportDataUrl: '',
    	};
	  },
	created() {
        // 页面进来,查询未审核的
        this.queryCompany();

        // 初始化导出url
        this.exportDataUrl = this.projectConfig.URL_V10_COMPANY_EXPORT_DATA+ '?companyStatus='+ this.listQuery.companyStatus;
	},
  	methods: {
          handleQueryStatus(val) {
            if (val == '全部') {
                this.listQuery.companyStatus = null;
                this.exportDataUrl = this.projectConfig.URL_V10_COMPANY_EXPORT_DATA+ '?companyStatus=0';
            } else if(val == '待审核') {
                this.listQuery.companyStatus = '1';
                this.exportDataUrl = this.projectConfig.URL_V10_COMPANY_EXPORT_DATA+ '?companyStatus=1';
            } else if (val == '已通过') {
                this.listQuery.companyStatus = '2';
                this.exportDataUrl = this.projectConfig.URL_V10_COMPANY_EXPORT_DATA+ '?companyStatus=2';
            } else  if (val == '已拒绝'){
                this.listQuery.companyStatus = '3';
                this.exportDataUrl = this.projectConfig.URL_V10_COMPANY_EXPORT_DATA+ '?companyStatus=3';
            }
            this.listQuery.pageNum = 1;
			// 查询
			this.queryCompany();
        },
	  	// 分页size改变触发事件
		handleSizeChange(val){
			this.listQuery.pageSize = val;
            // 查询
            this.queryCompany();
		},
		// 分页页数改变时候触发事件
		handleCurrentChange(val) {
			this.listQuery.pageNum = val;
            // 查询
            this.queryCompany();
        },
        queryCompany() {
            // 加载table
            this.loadingAppTable = true;
            if (this.listQuery.queryKey != '') {
                this.listQuery.pageNum = 1;

                //this.listQuery.companyStatus = '';
                //this.queryStatusRadio = '全部';
            }
            // 查询
            this.httpClient.httpClientPost(this.projectConfig.AIO_OPERATION_PLATFORM_BASE_URL,this.projectConfig.URL_V10_COMPANY_QUERY,this.listQuery).then(res => {
                // 停止加载table
                this.loadingAppTable = false;
                this.queryTotal = res.returnObject.total;
                this.manageData = res.returnObject.list;
                let total = res.returnObject.total;
                if (this.listQuery.pageSize < total) {
                    // 显示分页插件
					this.showPagination = true;
                } else{
                    // 显示分页插件
					this.showPagination = false;
                }
            }).catch(error => {
                // 停止加载table
                this.loadingAppTable = false;
            })
        },
        // 查看企业
        manageCompany: function(index,row) {
            // 将公司code缓存到浏览器
            //sessionUtils.setDataToSession(sessionUtils.KEY_COMPANY_MANAGE_JOIN_COMPANY_CODE,row.companyCode);
            // 跳转到公司详情页面
            this.$router.push({
                path: '/company/management/company_detail?companyCode=' + row.companyCode
            });
        },
        
        // 跳转到添加企业页面
        toAddCompanyPage() {
            this.$router.push({
                path: '/company/management/company_add'
            });
        },

        // 导出企业数据
        exportData() {
            this.$message({
                message: '数据正在导出,请耐心等候',
                type: 'success'
            });
        },
		
		

	}
};
</script>
<style>

.el-table .close-row {
    background: #FFFFFF;
}

.el-table .running-row {
    background: #40E0D0;
}

.el-table .error-row {
    background: #FF0000;
}


.page .el-table th > .cell {
	padding:0 18px;
	/*text-align:left;*/
}

.page .selected {
  width: 120px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.page .el-select {
  border-radius: 2px;
}

.page .el-table__expanded-cell {
  padding: 0;
}

.page .extend .el-table {
  padding-left: 20px;
}

.page .extend {
  border: none;
}
.page .el-table .running-row{
    background:#fff;
}
/*.page .el-table td, .page .el-table th.is-leaf{*/
	/*text-align: left;*/
/*}*/
.page .icon-sousuo2:before{
	padding-right:4px;
}
.page .el-icon-circle-check:before,
.page .el-icon-circle-cross:before,
.page .el-icon-information:before,
.page .el-icon-loading:before{
    color: #888;

}

.display_n{
  display: none;
}

</style>