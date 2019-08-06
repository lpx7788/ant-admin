<template>
  <a-layout class="components-layout-demo-custom-trigger" style="height: 100% !important;">
    <!-- 侧边导航 -->
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="sidebar-wrapper">
        <sidebar class="sidebar-container"></sidebar>
      </div>
    </a-layout-sider>

  <!-- 顶部导航 -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <navbar></navbar>
      </a-layout-header>

    <!-- 主体部分 -->
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <app-main></app-main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import  Navbar from "@/views/layout/components/Navbar";
import  Sidebar from "@/views/layout/components/Sidebar";
import  AppMain from "@/views/layout/components/AppMain";


export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    
    cursor: pointer;
    transition: color 0.3s;
    .trigger:hover {
    color: #1890ff;
    }
    .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    }

}

 
</style>
