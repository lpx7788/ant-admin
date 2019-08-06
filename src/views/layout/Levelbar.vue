<template>
	<div class="top">
		<el-breadcrumb class="app-levelbar" separator="/">
			<el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
				<!-- <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
				<router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link> -->
                <span v-if='item.redirect==="noredirect"||index==levelList.length-1'>{{item.name}}</span>
                <span v-else >{{item.name}}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
		
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

<style rel="stylesheet/scss" lang="scss">
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
		.el-input__inner{
			text-align: center;
		}
	}
		
	.el-input__icon+.el-input__inner {
		height: 30px;
	}
    .el-input{
		font-size:13px;
	}
	.el-input__inner {
		border: 0;
		background: none;
	}
	.all-space {
		position: absolute;
		top:-2px;
		width: 152px;
		margin-left:170px;
		.el-input__inner{
			text-align: center;
		}
	}
	.popper__arrow{
		left:66px;
	}

}
</style>