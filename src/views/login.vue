<template>
	<div class="login-wrap">
		<el-form class="login-form" ref="form" label-position="top" :model="form" label-width="80px">
			<h2>用户登录</h2>
			<el-form-item label="用户名">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label-position="top" label="密码" prop="pass">
				<el-input type="password" v-model="form.password" auto-complete="off" @keyup.enter.native="handleLogin"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn" type="primary" @click="handleLogin">登 录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
  data() {
	  return {
			form: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		async handleLogin() {
			const res = await this.$http.post('login',this.form);
			const data = res.data;
			if(data.meta.status === 200) {
				// 存储token
				sessionStorage.setItem('token',data.data.token);
				// 提示
				this.$message.success('恭喜您,登录成功!');
				// 跳转
				this.$router.push({ name:'home' });
			} else{
				this.$message.error('抱歉,登录失败!');
			}
		}
	}
};
</script>

<style scoped>
	.login-wrap {
		background-color: #324152;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-wrap .login-form {
		background-color: #ffffff;
		width: 400px;
		padding: 30px;
		border-radius: 5px;
	}
	.login-wrap .login-form .login-btn {
		width: 100%;
	}
</style>
