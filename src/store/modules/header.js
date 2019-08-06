/**
 * 头部菜单栏事件监听
 * create by xyr on 2017/09/25
 */

 const header = {
    state: {
		namespace: ''
    },
    
    mutations: {
		SET_NAMESPACE: (state, namespace) => {
			state.namespace = namespace;
		}
    },
    
    actions: {
        changNamespace({ commit }, namespace) {
			commit('SET_NAMESPACE', namespace);
		},
    }

 };

 export default header;