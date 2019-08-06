import { login, logout, getInfo } from '@/api/login/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { userBaseInfo } from '@/utils/userBaseInfo'

const user = {
	state: {
		token: getToken(),
		name: '',
		avatar: '',
		roles: ''
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_NAME: (state, name) => {
			state.name = name;
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar;
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles;
		}
	},

	actions: {
		// 登录
		// 此action 调用了/src/api/login/login.js 中的方法请求后台接口,用Promise,操作返回的数据
		Login({ commit }, userInfo) {
			const userPhone = userInfo.userPhone.trim();
			return new Promise((resolve, reject) => {
				/* login(userPhone,userInfo.userPassword, userInfo.equipmentNo).then(response => {
					const code = response.errorCode
					if (code == '0000') {
						const data = response.returnObject;
						setToken(data.access_token);
                        commit('SET_TOKEN', data.access_token);
                        // 缓存登录信息
                        userBaseInfo.setUserInfo(data.user);
						resolve();
					} else {
						reject();
					}
				}).catch(error => {
					reject(error);
                }); */

                let loginData

                if(process.env.ENV_NAME == 'prod'){
                    // 正式环境
                    loginData = {
                        "access_token": "e9b68b96ef3648adb99c1a8a9a3b12c3_f3914e67123e47b8acb46e557e9243dc",
                        "user": {
                            "qq": null,
                            "businessDirection": "3",
                            "auths": {
                                "companyCode": "f3914e67123e47b8acb46e557e9243dc",
                                "userCompanyStatus": "2",
                                "companyIdentity": "3",
                                "userCompanyStatusExp": "已认证",
                                "companyName": "广州众咖信息科技服务有限公司",
                                "roleCode": "1",
                                "companyIdentityExp": "买家与卖家",
                                "roleCodeExp": "管理员"
                            },
                            "userPhone": "18126823343",
                            "userEmail": null,
                            "id": 156,
                            "userIdentity": "440881199103303114",
                            "userName": "何景明",
                            "allowPricing": "1",
                            "userCode": "e9b68b96ef3648adb99c1a8a9a3b12c3",
                            "userWechat": null,
                            "status": "2"
                        }
                    }
                }else{
                    // 测试环境
                    loginData = {
                        "access_token": "c8d573fa037e4d56bd504c7e6e827241_f3914e67123e47b8acb46e557e9243dc",
                        "user": {
                            "qq": null,
                            "auths": {
                                "companyCode": "f3914e67123e47b8acb46e557e9243dc",
                                "userCompanyStatus": "2",
                                "companyIdentity": "3",
                                "userCompanyStatusExp": "已认证",
                                "autoHedgeSwitch": "1",
                                "companyName": "广州众咖信息科技服务有限公司",
                                "roleCode": "0",
                                "companyIdentityExp": "买家与卖家",
                                "roleCodeExp": "超级管理员",
                                "signAutoHedgeProtocol": "1"
                            },
                            "userPhone": "18310808142",
                            "userIdentity": "230622198501158544",
                            "userName": "韩婧潇",
                            "allowPricing": "1",
                            "userCode": "c8d573fa037e4d56bd504c7e6e827241",
                            "userWechat": null,
                            "openNewsPopup": "1",
                            "businessDirection": "3",
                            "userEmail": null,
                            "id": 43,
                            "status": "2"
                        }
                    }
                }



                setToken(loginData.access_token);
                commit('SET_TOKEN', loginData.access_token);
                // 缓存登录信息
                userBaseInfo.setUserInfo(loginData.user);
                resolve();


			});
        },
        
        GetInfo({ commit, state }) {
			return new Promise((resolve, reject) => {
				if (getToken()) {
                    commit('SET_ROLES', '超级管理员');
                    commit('SET_NAME', userBaseInfo.getUserInfo().userName);
                    resolve(userBaseInfo.getUserInfo());
				}

			});
		},

		// 登出
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				/* logout(getToken()).then(response => {
					const code = response.errorCode;
					if (code == 0000) {
						commit('SET_TOKEN', '');
						commit('SET_ROLES', []);
						removeToken();
						// 将用户信息设置为空
						userBaseInfo.cleanUserBase();
						resolve();
						
					} else {
						reject();
					}
				}).catch(error => {
					reject(error);
                }); */
                commit('SET_TOKEN', '');
                commit('SET_ROLES', []);
                removeToken();
                // 将用户信息设置为空
                userBaseInfo.cleanUserBase();
                resolve();

			});
		},

		// 前端 登出
		FedLogOut({ commit }) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '');
				removeToken();
				// 将用户信息设置为空
				userBaseInfo.cleanUserBase();
				resolve();
			});
		}
	}
};

export default user;
