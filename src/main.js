// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
//全局配置axios
axios.defaults.baseURL='https://vueblog-cc8c5.firebaseio.com/'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value=='wide'){
			el.style.maxWidth="1260px";
		}else if(binding.value =='narrow'){
			el.style.maxWidth = "560px";
		}
		if(binding.arg =='column'){
			el.style.background ="#6677cc";
			el.style.padding='20px';
		}
	}
})
Vue.filter("snippet",function(value){
	return value.slice(0,100) + "...";
})
//创建路由
const router=new VueRouter({
	routes:Routes,
	mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
