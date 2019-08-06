/**
 * 应用管理 工具类
 */
// 引入浏览器临时存储类
import { SessionStorage } from '@/store/SessionStorageCenter.js';
import { Loading } from 'element-ui';
class appManagement {

    /**
     * 创建应用,保存当前选择
     * first 编排文件
     * second 应用商店
     * third 镜像仓库
     */
    static setAppDeploySelected(deploySelected) {
        return SessionStorage.setStorage('deploySelected', deploySelected);
    };

    /**
     * 获得当前部署方式
     */
    static getAppDeploySelected() {
        return SessionStorage.getStorage('deploySelected');
    };

    /**
     * 将应用ID,存储到浏览器中
     */
    static setAppId(appId) {
        return SessionStorage.setStorage('appId', appId);
    };

    /**
     * 获得应用ID
     */
    static getAppId() {
        return SessionStorage.getStorage('appId');
    };

    /**
     * 点击镜像,设置,动作: 设置镜像参数,根据选择的镜像部署应用
     */
    static setPageAction(pageAction) {
        return SessionStorage.setStorage('imagePageAction', pageAction);
    };

    /**
     * 得到页面动作
     */
    static getPageAction() {
        return SessionStorage.getStorage('imagePageAction');
    };

    /**
     * 部署应用,设置选择的镜像名称到缓存
     */
    static setImageNameOnDeploy(imageName) {
        this.setPageAction('deploy_image')
        return SessionStorage.setStorage('imageNameOnDeploy', imageName);
    };

    /**
     * 部署应用,得到镜像的名称
     */
    static getImageNameOnDeploy() {
        return SessionStorage.getStorage('imageNameOnDeploy');
    };


    /**
     * 清楚缓存,用户登出的时候
     */
    static cleanAppManagement() {
        this.setAppDeploySelected('');
        this.setAppId('');
        this.setPageAction('');
        this.setImageNameOnDeploy('');
    }

    /**
     * 全局加载
     */
    static createLoading(str) {
        const loadingInstance1 = Loading.service({ 
            fullscreen: true ,
            lock: true,
            text: str,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        return loadingInstance1;
    }

}


export {
    appManagement
};