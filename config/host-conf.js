/**
 * Created by liuyiman on 2017/7/12.
 * 公司的接口环境有好几个，不同环境要不同的包，因此打包和开发的时候需要配置一下
 */
'use strict'
const chalk = require('chalk')

/*
* 环境列表，第一个环境为默认环境
* envName: 指明现在使用的环境
* dirName: 打包的路径，只在build的时候有用
* apiHostname: 这个环境下面的api 请求的域名
* assetHostname: 静态资源存放的域名，未指定则使用相对路径
* */
const ENV_LIST = [
  { // 开发环境接口地址
    envName: 'dev',
    dirName: 'dev',
    apiHostname: 'http://192.168.0.233:8080', // 测试环境 商城后台接口连接地址
    assetHostname:'http://192.168.0.233:8080', // 测试环境 商城后台接口连接地址 
    //apiHostname: 'http://127.0.0.1:8080', // 测试环境 商城后台接口连接地址
    //assetHostname:'http://127.0.0.1:8080', // 测试环境 商城后台接口连接地址 
    //adminHostName: 'http://127.0.0.1:9090',     // 本地测试 运营后台接口连接地址
    adminHostName: 'http://192.168.0.233:9090',     // 本地测试 运营后台接口连接地址
    authOrizationUrl: 'http://192.168.0.233:8080/company/authorizationFile' // 认证授权书地址下载
  },
  { // 测试环境接口地址
    envName: 'test',
    dirName: 'test',
    apiHostname: 'http://192.168.0.233:8080',   // 测试环境 商城后台接口连接地址
    assetHostname: 'http://192.168.0.233:8080', // 测试环境 商城后台接口连接地址
    adminHostName: 'http://192.168.0.233:9090', // 测试环境 运营后台接口连接地址
    authOrizationUrl: 'http://192.168.0.233:8080/company/authorizationFile' // 认证授权书地址下载
  },
  { // 生产环境接口地址
    envName: 'prod',
    dirName: 'prod',
    apiHostname: 'https://aio.manytrader.net', // 商城后台接口连接地址
    assetHostname:'https://aio.manytrader.net', // 商城后台接口连接地址
    adminHostName: 'https://adminapi.manytrader.net', // 运营后台接口连接地址
    authOrizationUrl: 'https://aio.manytrader.net/company/authorizationFile' // 认证授权书地址下载
  }
]

const HOST_ENV = process.env.HOST_ENV
let HOST_CONF
if (HOST_ENV === undefined) {
    // 没有设置环境，则默认为第一个
    HOST_CONF = ENV_LIST[0]
    console.log(chalk.bgYellow('缺少参数，默认使用 host-conf.js 的 ENV_LIST的第一个参数'))
} else {
    for (let i = 0; i < ENV_LIST.length; i++) {
        if (ENV_LIST[i].envName === HOST_ENV) {
            HOST_CONF = ENV_LIST[i]
            break
        }
    }
}
// 如果没有匹配，发出警告，使用第一个
if (HOST_CONF === undefined) {
    HOST_CONF = ENV_LIST[0]
    console.log(chalk.bgRed('参数错误，默认使用 host-conf.js 的 ENV_LIST的第一个参数'))
    console.log(chalk.red('参数错误，默认使用 host-conf.js 的 ENV_LIST的第一个参数'))
}
// 把apiHostname设置到 node 的环境中 方便客户端使用
// 此处配置和 ./build/webpack.base.conf.js 的配置要一致,通过webpack传入客户端中
process.env.HOST_NAME = HOST_CONF.apiHostname         // 商城后台接口地址
process.env.ADMIN_HOST_NAME = HOST_CONF.adminHostName // 运营后台接口地址
process.env.AUTHORIZATION_URL = HOST_CONF.authOrizationUrl // 认证授权书下载地址
process.env.ENV_NAME = HOST_CONF.dirName   //指明现在使用的环境



// log选中的变量
console.log(chalk.green('你将访问的后台服务地址为：'))
console.log(HOST_CONF)

module.exports.HOST_CONF = HOST_CONF
module.exports.ENV_LIST = ENV_LIST