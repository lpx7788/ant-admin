<template>

     <a-dropdown class="avatar-container">
       <span >
            用户 : <span>{{loginName}}</span>
            <span class="ant-dropdown-link loginOut">注销登陆<a-icon type="down" /></span>
        </span> 
    

    <a-menu slot="overlay"  class="navbar" style="background:fff;font-size:13px;">
      <a-menu-item>
        <span @click="logout" >退出</span>
      </a-menu-item>
      
    </a-menu>
  </a-dropdown>

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
        // ...mapGetters(["sidebar"]),

        // 企业入驻统计
        msgCount() {
        if(this.orderMsg )
            return this.orderMsg.count
        else 
            return 0
        }
    },
    methods: {

        logout() {

        this.$store.dispatch("LogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
        },
    
        listenService() {
            $bus.$on('recive:getInfoCount', data => {
                let msgs = data.returnObject
                this.orderMsg = msgs.find(msg => msg.type === 'orderMsg')
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
.loginOut{
  margin-left: 20px;
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
      .a-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }

</style>
