<template>
    <el-container class="container">
			<el-header class="header">
				<el-row :gutter="20">
					<el-col :span="4"><div class="grid-content bg-purple">
							<img src="/static/logo.png">
						</div></el-col>
					<el-col :span="16"><div class="grid-content bg-purple">
							<div class="title">电商后台管理</div>
						</div></el-col>
					<el-col :span="4"><div class="grid-content bg-purple">
							<a href="#" class="logout">退出</a>
						</div></el-col>
				</el-row>
			</el-header>
			<el-container class="container">
				<el-aside class="aside" width="200px">Aside</el-aside>
				<el-main class="main">Main</el-main>
			</el-container>
  </el-container>  
</template>

<script>
export default {
	// 判断是否登录data不能用
	beforeCreate() {
		// 通过sessionStorage中是否有token
		const token = sessionStorage.getItem('token');
		if(!token) {
			// 如果token不存在跳转登录页面
			this.$router.push({ name:'login'});
			// 提示登录
			this.$message.warning('请先登录!');
		}
		
	}
};
</script>

<style>
.container {
  height: 100%;
}

.header {
	background-color: #b3c0d1;
	padding-left: 40px;
}
.header .title {
	text-align: center;
	line-height: 60px;
	font-size: 24px;
	color: #fff;
}
.header .logout {
	position: absolute;
	right: 10px;
	color: orange;
	line-height: 60px;
	text-decoration: none;
}
.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
