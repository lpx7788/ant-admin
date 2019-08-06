<template>
  <!-- <a-layout class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <div class="sidebar-wrapper">
            <sidebar class="sidebar-container"></sidebar>
        </div>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
  </a-layout>-->
  <a-layout class="components-layout-demo-custom-trigger" style="height: 100% !important;">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="sidebar-wrapper">
        <sidebar class="sidebar-container"></sidebar>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <navbar></navbar>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <app-main></app-main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "@/views/layout";

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
