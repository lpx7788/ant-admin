import { asyncRouterMap, constantRouterMap } from '@/router/index';
import { userBaseInfo } from '@/utils/userBaseInfo'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
	if (route.meta && route.meta.role) {
		if (roles.indexOf(route.meta.role) >= 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return true
	}
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
	const accessedRouters = asyncRouterMap.filter(route => {
		if (hasPermission(roles, route)) {
			if (route.children && route.children.length) {
				route.children = filterAsyncRouter(route.children, roles)
			}
			return true
		}
		return false
	})
	return accessedRouters
}

const permission = {
	state: {
		routers: constantRouterMap,
		addRouters: []
	},
	mutations: {
		SET_ROUTERS: (state, routers) => {
			state.addRouters = routers;
			state.routers = constantRouterMap.concat(routers);
		}
	},
	actions: {
		GenerateRoutes({ commit }, data) {
			return new Promise(resolve => {
				const { user } = data
				let accessedRouters

				// 判断当前的登录用户是否超级用户
				let isSpuerAdmin = 1;

				if (isSpuerAdmin == 1) {
					accessedRouters = asyncRouterMap;
				} else {
					// 得到功能菜单列表
					const roles = '';
					if (roles.length > 0) {
						accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
					} else {
						accessedRouters = asyncRouterMap;
					}
				}
				commit('SET_ROUTERS', accessedRouters);
				resolve();
			})
		}
	}
};

export default permission;
