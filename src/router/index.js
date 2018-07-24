import Vue from 'vue';
import Router from 'vue-router';

// 导入登录组件
import Login from '@/views/login';
// 导入home组件
import Home from '@/views/home';

Vue.use(Router);

export default new Router({
  routes: [
    // 添加默认路由
    { name: 'l', path: '/', redirect: { name: 'login' } },
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/home', component: Home } 
  ]
});
