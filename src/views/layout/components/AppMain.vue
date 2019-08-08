<template>
    <section >
        <transition-group name="fade" class="app-main" mode="out-in">
            <Levelbar :key="key"></Levelbar>
            <router-view :key="key"></router-view>
        </transition-group>
    </section>
</template>

<script>
   import Levelbar from "./Levelbar";
    export default {
      name: 'AppMain',
      components: {
        Levelbar,

     
    },
      computed: {
        key() {
          return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        }
      }
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
      .app-main{
       display: block;
       margin: 24px 16px;
       padding: 24px;
       background: #fff;
       
    }
</style>
