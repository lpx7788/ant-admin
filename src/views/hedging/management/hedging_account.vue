/*
套保账号管理
*/


<template>
  <div class="app-container">
    <el-row class="wrapper page">
      <el-col :span="24" class="warp-main">
        <div class="el-bar">
          <p style="margin-bottom:10px;">
            <i class="iconfont icon-users"></i>套保账号
          </p>
          <el-form :inline="true" class="demo-form-inline">
            <el-row>
              <el-col>
                <el-form-item>
                  <el-input
                    v-model="listQuery.queryKey"
                    style="width:400px"
                    placeholder="请输入企业名称/简称/期货账户"
                    size="small"
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button
                    type="primary"
                    class="iconfont icon-sousuo2"
                    @click="queryOrderList"
                    size="small"
                  >搜索</el-button>
                </el-form-item>
                <el-form-item>
                  <p>
                    <span>
                      共
                      <span>{{queryTotal}}</span>条
                    </span>
                  </p>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col>
                <el-form-item label="审核状态：">
                  <el-radio-group
                    v-model="listQuery.approvalStatus"
                    @change="handChangeApprovalStatus"
                    size="small"
                    style="margin-right:10px;margin-top:4px;"
                  >
                    <el-radio-button label>全部</el-radio-button>
                    <el-radio-button label="0">未审核</el-radio-button>
                    <el-radio-button label="1">已审核</el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="连接情况：">
                  <el-radio-group
                    v-model="listQuery.connectionStatus"
                    @change="handChangeConnectionStatus"
                    size="small"
                    style="margin-right:10px;margin-top:4px;"
                  >
                    <el-radio-button label>全部</el-radio-button>
                    <el-radio-button label="0">未连接</el-radio-button>
                    <el-radio-button label="1">已连接</el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item label="使用情况：">
                  <el-radio-group
                    v-model="listQuery.operatingStatus"
                    @change="handChangeOperatingStatus"
                    size="small"
                    style="margin-right:10px;margin-top:4px;"
                  >
                    <el-radio-button label>全部</el-radio-button>
                    <el-radio-button label="0">已停用</el-radio-button>
                    <el-radio-button label="1">使用中</el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>

          <!--数据列表-->
          <el-table
            :data="manageData"
            id="outTableData"
            v-loading="loadingAppTable"
            highlight-current-row
            border
            style="width: 100%;"
            class="search-list"
          >
            <el-table-column align="center" prop="companyShortName" label="企业简称"></el-table-column>
            <el-table-column align="center" prop="brokerName" label="期货公司"></el-table-column>
            <el-table-column align="center" prop="account" label="期货账户"></el-table-column>
            <el-table-column align="center" prop label="账号审核状态">
              <template slot-scope="scope">
                <span v-if="scope.row.approvalStatus==0">未审核</span>
                <span v-if="scope.row.approvalStatus==1">已审核</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop label="连接情况">
              <template slot-scope="scope">
                <span v-if="scope.row.connectionStatus==0">未连接</span>
                <span v-if="scope.row.connectionStatus==1">已连接</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop label="账号使用状态">
              <template slot-scope="scope">
                <span v-if="scope.row.operatingStatus==0">已停用</span>
                <span v-if="scope.row.operatingStatus==1">使用中</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="createUserName" label="创建人"></el-table-column>
            <el-table-column align="center" prop="createDate" label="创建时间"></el-table-column>
            <el-table-column align="center" prop="lastUpdateDate" label="修改时间"></el-table-column>
            <el-table-column prop="opration" align="center" label="操作" width="200">
              <!-- 以下是操作按鈕 -->
              <template slot-scope="scope">
                  
                <el-button
                  v-if="scope.row.operatingStatus == '1'"
                   type="primary" plain
                  @click="editAccountStatus(scope.row.companyAutoHedgeId,'3',scope.row.brokerName,scope.row.account)"
                  size="mini"
                >恢复使用</el-button>
                <el-button
                  v-if="scope.row.operatingStatus == '0'"
                  type="primary" plain
                  @click="editAccountStatus(scope.row.companyAutoHedgeId,'2',scope.row.brokerName,scope.row.account)"
                  size="mini"
                >停止使用</el-button>
                <el-button
                  type="primary" plain
                  v-if="scope.row.approvalStatus != '1'"
                  @click="openEditDialog(scope.$index,scope.row)"
                  size="mini"
                >修改密码</el-button>

                <div v-if="scope.row.status == '1'">
                  <span>-</span>
                </div>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页.start -->
          <div v-show="showPagination" class="block" style="text-align:right;margin:10px 0;">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="listQuery.pageNum"
              :page-sizes="[20, 40, 60, 100]"
              :page-size="listQuery.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="queryTotal"
            ></el-pagination>
          </div>
          <!-- 分页.end -->
        </div>
      </el-col>
    </el-row>

    <!-- 修改期货账户密码.start -->

    <el-dialog title="修改套保账户密码" :visible.sync="editPassDialogVisible" width="40%" center>
      <el-form
        :model="editPassForm"
        :rules="editPassFormRules"
        ref="editPassForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="企业简称：">
          <span>{{editPassForm.companyShortName}}</span>
        </el-form-item>
        <el-form-item label="期货公司：">
          <span>{{editPassForm.companyName}}</span>
        </el-form-item>
        <el-form-item label="交易账户：">
          <span>{{editPassForm.account}}</span>
        </el-form-item>
        <el-form-item label="交易密码：" prop="password">
          <el-input type="password" size="mini" v-model="editPassForm.password"></el-input>
        </el-form-item>
        <el-form-item label="交易席位：">
          <template>
            <el-radio v-model="seat" label="1">主席</el-radio>
            <el-radio v-model="seat" label="2">次席</el-radio>
          </template>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editPassDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="editPassword"
          v-loading.fullscreen.lock="fullscreenLoading"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改期货账户密码.end -->
  </div>
</template>
<script>
import { Loading } from "element-ui";
import { Decrypt, Encrypt } from "@/utils/plugin/CryptoUtil";

export default {
  data() {
    return {
      seat: "1",
      queryStatusRadio: "全部",
      // 分页插件初始化
      // 搜索输入框初始化
      queryTotal: 0,
      // 是否显示分页插件
      showPagination: false,
      listQuery: {
        pageNum: 1,
        pageSize: 20,
        queryKey: "", // 查询关键字
        status: "",
        connStatus: "",
        approvalStatus: "",
        connectionStatus: "",
        operatingStatus: ""
      },

      // app 展示table
      manageData: [],
      // 是否load table
      loadingAppTable: false,
      eltablecolumn: "center",
      radio4: "today",
      dateTime: "",

      // 修改期货账户密码
      editPassDialogVisible: false,
      editPassForm: {
        companyAutoHedgeId: "",
        companyShortName: "",
        companyName: "",
        account: "",
        password: ""
      },
      editPassFormRules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 255, message: "255个字符以内", trigger: "blur" }
        ]
      },
      // 全局遮罩
      fullscreenLoading: false
    };
  },
  created() {
    this.queryOrderList();
  },
  methods: {
    // 分页size改变触发事件
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      // 查询
      this.queryOrderList();
    },
    // 分页页数改变时候触发事件
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      // 查询
      this.queryOrderList();
    },
    // 获取期货账号列表
    queryOrderList() {
      // 加载table
      this.loadingAppTable = true;

      if (this.listQuery.queryKey != "") {
        this.listQuery.pageNum = 1;
      }
      // 查询
      this.httpClient
        .httpClientPost(
          this.projectConfig.AIO_OPERATION_PLATFORM_BASE_URL,
          this.projectConfig.URL_V11_COMPANY_AUTO_HEDGE_QUERY,
          this.listQuery
        )
        .then(res => {
          // 停止加载table
          this.loadingAppTable = false;
          this.queryTotal = res.returnObject.total;
          // 赋值
          this.manageData = res.returnObject.list;

          let total = res.returnObject.total;
          if (this.listQuery.pageSize < total) {
            // 显示分页插件
            this.showPagination = true;
          } else {
            // 显示分页插件
            this.showPagination = false;
          }
        })
        .catch(error => {
          // 停止加载table
          this.loadingAppTable = false;
        });
    },
    // 查看订单
    manageApp: function(index, row) {
      this.$router.push({
        path: "/order/order_detail?orderCode=" + row.orderCode
      });
    },

    // 打开修改密码窗口
    openEditDialog: function(index, row) {
      this.editPassDialogVisible = true;
      this.editPassForm = row;
      this.editPassForm.password = "";
    },

    // 修改期货账户密码
    editPassword() {
      console.log(this.seat);
      this.$refs.editPassForm.validate(valid => {
        if (valid) {
          let param = {
            companyAutoHedgeId: this.editPassForm.companyAutoHedgeId,
            password: Encrypt(this.editPassForm.password),
            seat: this.seat
          };
          // 全屏loading
          const loadingInstance1 = Loading.service({ fullscreen: true });
          this.httpClient
            .httpClientPost(
              this.projectConfig.AIO_OPERATION_PLATFORM_BASE_URL,
              this.projectConfig.URL_V11_COMPANY_AUTO_HEDGE_EDIT_PASSWORD,
              param
            )
            .then(res => {
              if (res.errorCode == "0000") {
                this.$notify.success("修改密码成功");
                // 关闭loading
                loadingInstance1.close();
                // 关闭弹框
                this.editPassDialogVisible = false;
              }
              this.queryOrderList();
            });
        }
      });
    },

    // 修改账号状态
    editAccountStatus(id, status, brokerName, account) {
      // 2停止使用 3恢复使用

      // 是否确认停止使用广发期货的XXXXXXX账户？停止后，与该账户相关的套保规则也将停止。
      let tip =
        status == "2"
          ? "是否确认停止使用" +
            brokerName +
            account +
            "账户？停止后，与该账户相关的套保规则也将停止。"
          : "是否确认恢复使用" +
            brokerName +
            account +
            "账户？恢复后，与该账户相关的套保规则也将恢复。";
      let type = status == "2" ? "warning" : "success";
      let param = {
        companyAutoHedgeId: id,
        status: status
      };
      this.$confirm(tip, "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: type
      })
        .then(() => {
          // 全屏loading
          const loadingInstance1 = Loading.service({ fullscreen: true });
          this.httpClient
            .httpClientPost(
              this.projectConfig.AIO_OPERATION_PLATFORM_BASE_URL,
              this.projectConfig.URL_V11_COMPANY_AUTO_HEDGE_EDIT_STATUS,
              param
            )
            .then(res => {
              if (res.errorCode == "0000") {
                this.$notify.success("修改成功");
                // 关闭loading
                loadingInstance1.close();
              }
              this.queryOrderList();
            });
        })
        .catch(error => {});
    },
    handChangeApprovalStatus() {
      this.listQuery.pageNum = 1;
      this.queryOrderList();
    },
    handChangeConnectionStatus() {
      this.listQuery.pageNum = 1;
      this.queryOrderList();
    },
    handChangeOperatingStatus() {
      this.listQuery.pageNum = 1;
      this.queryOrderList();
    }
  }
};
</script>
<style>
</style>
