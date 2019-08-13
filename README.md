# litadmin
> A Vue.js project for backend

## 介绍

   1.0 后台管理系统

### 说明

　　这是一个用vuejs2.x和element-ui搭建的后台管理界面。
    使用了github的vueAdmin-template-master项目基础模板,
    基础模板地址: https://github.com/PanJiaChen/vueAdmin-template
    
    后续开发可以继续参考该作者的另外一个项目
    源码地址: https://github.com/PanJiaChen/vue-element-admin
    项目浏览地址: http://panjiachen.github.io/vue-element-admin/#/login

### 相关技术：


	1. vuejs(2.4.2)：一套构建用户界面的渐进式框架，易用、灵活、高效。
	2. element-ui(1.4.3)：一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库。
	3. vue-router(2.7.0)：官方的路由组件，配合vue.js创建单页应用（SPA）非常简单。
	4. axios(0.16.2): 基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用。
	5. localStorage,浏览器存储,存储token等
	6. webpack,项目模板

### 相关技术文档地址

	1. vuejs: https://cn.vuejs.org/
	2. element-ui: http://element.eleme.io/#/zh-CN/component/quickstart
	3. vue-router: https://router.vuejs.org/zh-cn/
	4. axios: https://www.npmjs.com/package/axios,https://www.kancloud.cn/yunye/axios/234845
	5. webpack: http://www.css88.com/doc/webpack2/guides/development/
	6. localStorage: https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/Storage,http://www.jianshu.com/p/fb758398268a
	7. es6: http://es6.ruanyifeng.com/

    项目使用的js语法是es6,比如箭头函数等,不懂的可以看es6的语法文档

    vue 开源项目插件库汇总
    https://segmentfault.com/p/1210000008583242/read?from=timeline

### 项目目录结构
    ├── build                      // 构建相关  
    ├── config                     // 配置相关
    ├── src                        // 源代码
    │   ├── api                    // 所有请求
    │   ├── assets                 // 主题 字体 样式等静态资源
    │   ├── components             // 全局公用组件
    │   ├── directive              // 全局指令
    │   ├── router                 // 路由
    │   ├── store                  // 全局store管理
    │   ├── styles                 // 全局样式
    │   ├── utils                  // 全局公用方法
    │   ├── views                  // vue文件页面目录
    |   |   ├──dashboard           // 首页vue目录
    |   |   ├──layout              // 侧边栏vue目录
    |   |   ├──login               // 登录vue目录
    │   ├── App.vue                // 入口页面
    │   └── main.js                // 入口 加载组件 初始化等
    ├── static                     // 第三方不打包资源
    ├── .babelrc                   // babel-loader 配置
    ├── favicon.ico                // favicon图标
    ├── index.html                 // html模板
    └── package.json               // 依赖配置文件package.json

## Build Setup

``` bash
# 安装依赖
# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install
// or
npm install --registry=https://registry.npm.taobao.org

# 本地开发,开启服务
## 三种模式启动,任意选择一种
## 连接开发服务器
npm run start dev 
## 连接生产服务器
npm run start prod 
## 连接测试服务器
npm run start test


# 打包发布项目,最终的打包文件在/dist
## 打包发布测试
npm run build dev
## 打包发布生产 
npm run build prod
## 打包发布调试模式
npm run build test
```
