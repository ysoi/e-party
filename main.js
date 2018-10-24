// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {$axios} from "./utils"
import Vuex from "vuex";
import store from "./store";

//引入mini-ui组件
import MintUI from  "mint-ui";
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Vuex);
Vue.prototype.$axios=$axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created(){
    if(window.localStorage.getItem("isLogin")===null){
      window.localStorage.setItem('isLogin','');
    }
    this.$store.state.isLogin=window.localStorage.getItem('isLogin');
  },
  template: '<App/>'
})
