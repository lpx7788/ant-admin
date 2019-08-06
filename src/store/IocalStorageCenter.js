// 储存
class LocalStorage {

    /**
     * [setStorage 设置存储]
     * @param {[type]} name  [description]
     * @param {[type]} value [description]
     */
  static setStorage(name, value) {
      let _store = localStorage.getItem('_community_Storage');
      if (_store) {
          _store = JSON.parse(_store);
        } else {
          _store = {};
        }

      _store[name] = value;

      localStorage.setItem('_community_Storage', JSON.stringify(_store));
    }

    /**
     * [getStorage 获取储存]
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
  static getStorage(name) {
      let _store = localStorage.getItem('_community_Storage'),
          _value = '';

      if (_store) {
          _store = JSON.parse(_store);
          _value = _store[name];

          try {
              _value = JSON.parse(_value);
            } catch (e) {
              _value = _store[name];
            }
        }

      return _value;
    }

    /**
     * [deleteStorage 删除一个值]
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
  static deleteStorage(name) {
      let _store = localStorage.getItem('_community_Storage');
      if (_store) {
          _store = JSON.parse(_store);
          _store[name] = '';
        }

      localStorage.setItem('_community_Storage', JSON.stringify(_store));
    }

    /**
     * [clear 清楚所有储存]
     * @return {[type]} [description]
     */
  static clear() {
      localStorage.removeItem('_community_Storage');
    }
}

export {
    localStorage
};
