// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'
import '@/assets/iconfont/iconfont'
import IconSvg from '@/components/Icon-svg/index.vue'
import { getToken } from '@/utils/auth'
import { SessionStorage } from '@/store/SessionStorageCenter.js'
// import ProductQueryItem from '@/components/ProductQueryItem.vue'
// Vue.component('ProductQueryItem', ProductQueryItem)

// 图片预览插件
// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview)


//全局引用ant
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

// 图片预览插件2
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer) 

// 基于elementUI的多选级联选择器
// import EleMultiCascader from "ele-multi-cascader";
// import "https://github.com/webCoderJ/ele-multi-cascader/blob/master/dist/cascader.css";
// import '../src/styles/cascader.css'
// Vue.use(EleMultiCascader)

// 引用httclient全部变量
import { httpClient } from '@/utils/httpClient';
Vue.prototype.httpClient = httpClient;

// 引入项目配置
import { projectConfig } from '@/utils/projectConfig';
Vue.prototype.projectConfig = projectConfig;

// 引入登陆用户基本信息类.全局配置
import { userBaseInfo } from '@/utils/userBaseInfo'
Vue.prototype.userBaseInfo = userBaseInfo;

// 引入阿里图标库
import  './assets/aliicon/iconfont.css'


Vue.config.productionTip = false



Vue.component('icon-svg', IconSvg)

/* 全局路由控制钩子.start */
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    // 进度条加载
    NProgress.start();
    // token是否存在
    if (getToken()) {
        // 是否访问登录页面
        if (to.path === '/login') {
            next({ path: '/' });
        } else {
            if (store.getters.roles.length === 0) {
                // 获得用户的权限菜单列表
                store.dispatch('GetInfo').then(res => {
                    const data = res.data;
                    // 在全局路由中,筛选出符合规则的的菜单
                    store.dispatch('GenerateRoutes', { data }).then(() => {
                        // 添加菜单
                        router.addRoutes(store.getters.addRouters);
                        next({...to });
                    })
                })

            } else {
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login');
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});

/* 全局路由控制钩子.end */

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})