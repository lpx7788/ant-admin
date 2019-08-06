<template>
  <a-menu class="navbar" mode="horizontal" style="background:fff;font0size:13px;">
    <div class="avatar-container">
        <span class="el-dropdown-link">
            用户 : <span>{{loginName}}</span>
        </span>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">注销登陆<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="logout" style="display:block;">退出</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
  </a-menu>
</template>

<script>
import { mapGetters } from "vuex";
import Hamburger from "@/components/Hamburger";
import { mapState, mapActions } from 'vuex'
import Socket from '@/utils/plugin/socket'
import $bus from '@/utils/global-bus'
import iData from '@/utils/iData'
import { getToken } from '@/utils/auth';

let socketService;

export default {
    data() {
        return {
        loginName: this.userBaseInfo.getUserInfo().userName,
        companyName: this.userBaseInfo.getUserInfo().auths.companyName,
        userPhone: this.userBaseInfo.getUserInfo().userPhone,
        // 企业入驻信息
        orderMsg: null
        };
    },
    components: {
        Hamburger,
    },
    computed: {
        ...mapGetters(["sidebar"]),


    },
    methods: {
  
        logout() {
            // 操作审计
        this.$store.dispatch("LogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
        },

        // 监听工作台信息
        listenService() {
            $bus.$on('recive:getInfoCount', data => {
                let msgs = data.returnObject
               
            })
            // 全局消息提示
            $bus.$on('recive:receiveMessage', async data => {
                let notify = this.$notify.info({
                    title: data.returnObject.title,
                    message: data.returnObject.content,
                    duration: 0,
                    // 点击消息跳转
                    onClick:function(){
                        notify.close()
                        // 判断是否为合同消息
                        if(data.returnObject.messageType == '9'){
                            if(order.contractType == '1'){
                                this.$router.push({path: '/app/sell/salesContractDetails?id=' + order.purSalesContractId})
                            }
                            if(order.contractType == '2'){
                                this.$router.push({path: '/app/buy/buyContractDetails?id=' + order.purSalesContractId})
                            }
                        }
                }.bind(this)
                });

                // 桌面通知
                var n = new Notification(data.returnObject.title, {  
                    body: data.returnObject.content 
                });
            });

            
        },

    },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {

  border-radius: 0px !important;
  border-bottom:1px solid #eaeaea;
  box-shadow: 1px 0px 4px #efeeee;
  .hamburger-container {
    height: 52px;
    float: left;
    padding: 0 10px;
  }
  .help-center{
    background: url(../../../assets/images/help.png) no-repeat left center;
    padding-left: 14px;
    background-size: 12px 12px;
  }

  .tuichu .el-dropdown-link:hover {
    cursor: pointer;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    display: inline-block;
    position: fixed;
    top: 0;
    color: #5a5e66;
    right: 28px;
    font-size: 13px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}


</style>
