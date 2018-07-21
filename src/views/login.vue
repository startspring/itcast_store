<template>
	<div class="login-wrap">
		<el-form class="login-form" ref="form" label-position="top" :model="form" label-width="80px">
			<h2>用户登录</h2>
			<el-form-item label="用户名">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label-position="top" label="密码" prop="pass">
				<el-input type="password" v-model="form.password" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn" type="primary" @click="onSubmit">登 录</el-button>
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
	}
};
</script>

<style>
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
