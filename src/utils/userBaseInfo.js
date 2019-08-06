/**
 * 登录成功后,获得用户的基本信息,然后保存到浏览器的session里面,当会话结束,信息删除
 */

import { SessionStorage } from '@/store/SessionStorageCenter.js';

// 遮罩层组件
import { Loading } from 'element-ui';

class userBaseInfo {

    /**
     * 缓存用户信息到浏览器
     */
    static setUserInfo(userData) {
        return SessionStorage.setStorage('userInfo', userData);
    }

    /**
     * 得到用户信息
     */
    static getUserInfo() {
        return SessionStorage.getStorage('userInfo');
    }

    /**
     * 退出登录时候,将用户信息设置为空
     */
    static cleanUserBase() {
       this.setUserInfo('');
    }

}

export {
    userBaseInfo
};






