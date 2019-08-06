/**
 * 浏览器缓存 工具类
 */
// 引入浏览器临时存储类
import { SessionStorage } from '@/store/SessionStorageCenter.js';

class sessionUtils {

    // session key
    // 企业管理,企业入驻.查看,缓存查看的公司code
    static KEY_COMPANY_MANAGE_JOIN_COMPANY_CODE = 'KEY_COMPANY_MANAGE_JOIN_COMPANY_CODE';
    



    // 设置缓存
    static setDataToSession(key,value) {
        return SessionStorage.setStorage(key,value);
    };

    // 从缓存中得到数据
    static getDataFromSession(key) {
        return SessionStorage.getStorage(key);
    }
}

export {
    sessionUtils
}