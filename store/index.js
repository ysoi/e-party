//构建vuex核心仓库
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        id:'1002',
        isLogin:"",
      
    },
    //改变
    mutations:{
        newAuthor(state,msg){
            state.id=msg;
            
        },
        // changePwd(state,msg){
        //     state.password=msg;
        // },
        isLogin(state,msg){
            state.isLogin=msg;
            window.localStorage.setItem('isLogin',msg);
        }
    }
});
//定义状态
export default store;

