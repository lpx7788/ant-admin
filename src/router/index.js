import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading small page will cause webpack hot update too slow.so only in production use Lazy Loading


/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/login');

/* home */
const home = _import('home/index');

/* error page */
const Err404 = _import('404');

Vue.use(Router);

/**
 * 此处的map不需要做权限,通配
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/

export const constantRouterMap = [

    { path: '/login', component: Login, hidden: true },
    { path: '/404', component: Err404, hidden: true },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        hidden: true,
    },
    {
        path: '/home',
        component: Layout,
        redirect: '/home/index',
        icon: 'index-home',
        noDropdown: true,
        children: [
            { path: 'index', component: _import('home/index'), name: '平台主页' },
        ]
    }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});

/**
 * 权限菜单map 
 * meta:{} 元数据信息的role路径和系统功能菜单维护的url一致,否则,无法筛选
 */
export const asyncRouterMap = [
    {
        path: '/company',
        component: Layout,
        redirect: 'noredirect',
        name: '企业管理',
        icon: 'fuwupeizhi',
        meta: { role: ['/company'] },
        children: [
            {
                path: '/company/management',
                component: _import('company/management/index'),
                icon: 'jiankong',
                noDropdown: true,
                meta: { role: ['/company/management'] },
                children: [
                    { path: 'company_join', meta: { role: ['/company/management/company_join'] }, component: _import('company/management/company_join'), name: '入驻申请' },
                ]
            },
            {
                path: '/company/management',
                component: _import('company/management/index'),
                icon: 'jiedian',
                noDropdown: true,
                meta: { role: ['/company/management'] },
                children: [
                    { path: 'company_list', meta: { role: ['/company/management/company_list'] }, component: _import('company/management/company_list'), name: '企业列表' },
                ]
            },
            {
                path: '/company/management',
                component: _import('company/management/index'),
                icon: 'uesr-manage',
                noDropdown: true,
                meta: { role: ['/company/management'] },
                children: [
                    { path: 'user_company_list', meta: { role: ['/company/management/user_company_list'] }, component: _import('company/management/user_company_list'), name: '用户列表' },
                ]
            }

        ]
    },

    { path: '*', redirect: '/404', hidden: true }
];