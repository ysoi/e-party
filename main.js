// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {$axios} from "./utils"
import Vuex from "vuex";
import store from "./store";
import VueAMap from "vue-amap";

//引入mini-ui组件
import MintUI from  "mint-ui";
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(VueAMap);
Vue.prototype.$axios=$axios;
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'f74ee7d362b89a1ae178614d9d82157d',
  // 插件集合
  plugin: [
    'AMap.Autocomplete', //输入提示
    'AMap.PlaceSearch', //POI搜索
    'AMap.Scale', //缩略图 比例尺
    'AMap.OverView', //鹰眼
    'AMap.ToolBar', //工具条
    'AMap.MapType', //类别切换，
    'AMap.PolyEditor',//编辑 折线图 多边形
    'AMap.CircleEditor',//原型编辑器插件
    'AMap.Geolocation' //定位
    ],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

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
