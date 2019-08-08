<template>
	<div class="top">
		<a-breadcrumb class="app-levelbar" separator="/">
			<a-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
                <span v-if='item.redirect==="noredirect"||index==levelList.length-1'>{{item.name}}</span>
                <span v-else >{{item.name}}</span>
			</a-breadcrumb-item>
		</a-breadcrumb>
		
	</div>
</template>

<script>
export default {
	created() {
		this.getBreadcrumb();

	},
	data() {
		return {
			levelList: null,
			headerFormInline: {
				team: '',
				namespace: ''
			}
		}
	},
	methods: {
		getBreadcrumb() {
			let matched = this.$route.matched.filter(item => item.name)
			const first = matched[0]
			if (first && (first.name !== '首页' || first.path !== '')) {
				matched = [{ name: '首页', path: '/' }].concat(matched)
			}
			this.levelList = matched
		}

	},
	watch: {
		$route() {
			this.getBreadcrumb()
		}
	}
}
</script>

<style rel="stylesheet/less" lang="less">
.app-levelbar.el-breadcrumb {
	display: inline-block;
	font-size: 13px;
	.no-redirect {
		color: #97a8be;
		cursor: text;
	}
}
.top {
	.all-team {
		position: absolute;
		top:-2px;
		width: 152px;
		margin-left: 20px;

	}

	.all-space {
		position: absolute;
		top:-2px;
		width: 152px;
		margin-left:170px;
	
	}
	.popper__arrow{
		left:66px;
	}

}
</style>