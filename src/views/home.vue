<template>
    <el-container class="container">
			<el-header class="header">Header</el-header>
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
}

.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
</style>
