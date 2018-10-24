import axios from "axios";
import store from "../store";

const baseURL = 'http://211.67.177.56:8080/hhdj';
const instance = axios.create({
    baseURL,
    timeout: 20000
});
const xhr = {
    //封装get方法
    get(url, data, config) {
        // console.log(store.state);
        
        return new Promise((resolve, reject) => {
            if (store.state.isLogin) {
                config = {
                    ...config,
                    headers: {
                        'token': store.state.isLogin
                    }
                }
            };

            instance.get(url, { params: data,...config} ).then(res => {

                // if(res){
                resolve(res.data);
                //  }
            }).catch(error => {
                reject(error)
            })

        })
    },
    //封装post方法
    post(url, data, config) {
        return new Promise((resolve, reject) => {
            console.log(store);
            if (store.state.isLogin) {
                config = {
                    ...config,
                    headers: {
                        'token': store.state.isLogin
                    }
                }
            };
            instance.post(url, data, config).then(res => {
                // if(res.code==1){
                resolve(res.data);
                // }
            }).catch(error => {
                reject(error);
            })
        })
    }
}
export const $axios = xhr;



