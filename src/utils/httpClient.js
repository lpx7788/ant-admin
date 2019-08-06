import fetch from '@/utils/fetch';
import { Loading } from 'element-ui';

/**
 * 此js 根据fetch.js 封装了一些http请求的方法
 */
class httpClient {
  /**
   * post请求
   * @param {*} postUrl 
   * @param {*} param 参数
   * @return 请求结果
   */
  static httpClientPost2(postUrl, param) {
    return new Promise((resolve, reject) => {
      fetch({
        url: postUrl,
        method: 'post',
        data: param,
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * post请求
   * @param {*} postUrl 
   * @param {*} param 参数
   * @return 请求结果
   */
  static httpClientPost(baseUrl,postUrl, param) {
    return new Promise((resolve, reject) => {
      fetch({
        baseURL: baseUrl,
        url: postUrl,
        method: 'post',
        data: param
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
        .catch((error) => {
          reject(error)
        })
    })
  }


  

  

  /**
   * get请求
   * @param {*} getUrl 
   * @param {*} param 
   * @return 请求参数
   */
  static httpClientget(getUrl,param) {
    return new Promise((resolve, reject) => {
      fetch({
        url: getUrl,
        method: 'get',
        params: param
      })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }


  static httpClientget2(getUrl,param,domId) {
    return new Promise((resolve, reject) => {
      fetch({
        url: getUrl,
        method: 'get',
        params: param,
        headers: {'domId':domId}
      })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * put请求
   * @param {*} putUrl 
   * @param {*} param 参数
   * @return 请求结果
   */
  static httpClientPut(putUrl, param) {
    return new Promise((resolve, reject) => {
      fetch({
        url: putUrl,
        method: 'put',
        data: param
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * patch请求
   * @param {*} patchUrl 
   * @param {*} param 参数
   * @return 请求结果
   */
  static httpClientPatch(patchUrl,param) {
    return new Promise((resolve, reject) => {
      fetch({
        url: patchUrl,
        method: 'patch',
        data: param
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
        .catch((error) => {
          reject(error)
        })
    })
  }

  

  /**
   * delete请求
   * @param {*} deleteUrl 
   * @param {*} param 参数
   * @return 请求结果
   */
  static httpClientDelete(deleteUrl, param) {
    return new Promise((resolve, reject) => {
      fetch({
        url: deleteUrl,
        method: 'DELETE',
        data: param
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
   * post请求,
   * 请求后台接口类型为: /getChildrenNode/{id}/{name}
   * @param 请求数组: ['11','222']
   */
  static postParamOnPath(postUrl, param) {
    if (!postUrl.endsWith('/')) {
      postUrl = postUrl + '/';
    }
    // 组装url
    for (let i = 0; i < param.length; i++) {
      postUrl += param[i];
      if (i < param.length - 1) {
        postUrl = postUrl + '/';
      }
    }
    return new Promise((resolve, reject) => {
      fetch({
        url: postUrl,
        method: 'post'
      })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
 * get请求,
 * 请求后台接口类型为: /getChildrenNode/{id}/{name}
 * @param 请求数组: ['11','222']
 */
  static getParamOnPath(getUrl, param) {
    if (!getUrl.endsWith('/')) {
      getUrl = getUrl + '/';
    }
    // 组装url
    for (let i = 0; i < param.length; i++) {
      getUrl += param[i];
      if (i < param.length - 1) {
        getUrl = getUrl + '/';
      }
    }
    return new Promise((resolve, reject) => {
      fetch({
        url: getUrl,
        method: 'get'
      })
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  /**
  * url参数替换,
  * 请求后台接口类型为: /xxx/{id}/{name}
  * @param 请求数组: ['11','222']
  * 返回替换后的url:/xxx/11/222
  */
  static urlParmHandle(url, param) {
    let urlArr = url.split('/');
    let i = 0;
    let returnURl = '';
    urlArr.forEach((value) => {
      if (value == '') {
      } else if (value.indexOf('{') != -1) {
        returnURl += '/' + param[i];
        i++;
      } else {
        returnURl += "/" + value;
      }
    });
    return returnURl;
  }


}

export {
  httpClient
};

