import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
import { getToken } from '@/utils/auth';
import { projectConfig } from '@/utils/projectConfig'
import { MessageBox } from 'element-ui';
// import router from '@/router'
// 数据加载条显示组件
import NProgress from 'nprogress';
// 遮罩层组件
import { Loading } from 'element-ui';
// 消息通知组件
import { Notification } from 'element-ui';

// 用户公共方法
import { userBaseInfo } from '@/utils/userBaseInfo'


// 创建axios实例,用于请求后台,进行数据的交换
const service = axios.create({
	baseURL: process.env.HOST_NAME,
	timeout: 50000  // 请求超时时间
});


// request拦截器
service.interceptors.request.use(config => {
	// 获得请求的URL何请求的方法
	const requestUrl = config.url;
    const requestMethod = config.method;
    
    // 请求url上面加上时间戳
    if (requestUrl.indexOf('?') == -1 && requestUrl.lastIndexOf('&') == -1) {
        config.url = requestUrl + "?timestamp=" + new Date().getTime();
    } else if (requestUrl.lastIndexOf('&') != -1) {
        config.url = requestUrl + "timestamp=" + new Date().getTime();
    } else {
        config.url = requestUrl + "&timestamp=+" + new Date().getTime();
    }

	// 登录请求遮罩不显示
	if (store.getters.token) {
		config.headers['access_token'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    

	return config;
}, error => {
	// Do something with request error
	Promise.reject(error);
})

let _this = this;
// response,服务器端返回拦截器
service.interceptors.response.use(
	response => {
		/**
		* code为非200是抛错 可结合自己业务进行修改
        */
		let res = response.data;
		if (res.errorCode == projectConfig.CODE_UNAUTHORIZED) {
			// 456: 非法的token;其他客户端登录了;Token 过期了
			// 回到登录页面
			MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
				confirmButtonText: '重新登录',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				store.dispatch('FedLogOut').then(() => {
					location.reload();// 为了重新实例化vue-router对象 避免bug
				});
			})

			return Promise.reject('error');
		} else if (res.errorCode == projectConfig.CODE_SYSTEM_EXCEPTION) {
			// 平台异常
			Notification.error({
				title: '错误',
				message: res.errorMsg
			});
		} else if (res.errorCode == projectConfig.CODE_VENUS_EXCEPTION) {
			//  平台业务事件异常 warning
			Notification.warning({
				title: '警告',
				message: res.errorMsg
			});
        } else if (res.errorCode == 500) {
            Notification.warning({
				title: '警告',
				message: res.errorMsg
			});
        } else {
			// 业务处理成功信息 success
			// 200 正常
			const _message = res.errorMsg;
			if ( res.errorCode != '0000' && _message != '') {
				Notification.error({
					message: _message
				});
            }
            
			return response.data;
			
		}

		// 全局返回状态码拦截.end
	},
	error => {
		
		Notification.error({
			title: '错误',
			message: error.message
        });

		return Promise.reject(error);
	}
)

export default service;
