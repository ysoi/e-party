<template>
    <div class="login-wrap">
        <HeaderChild ref="head"></HeaderChild>
        
        <div class="unique-img"><img src="../../public/imgs/logo.png" alt=""></div>
        <div class="login-form">
            <form >
                <input type="text" placeholder="身份证号" v-model="formData.id">
                <input type="password" placeholder="密码" v-model="formData.password">
                <mt-button type="primary" size="large" class="mt-button" @click=handleLogin>登录</mt-button>
                <!-- <button type="primary" size="large" class="mt-button" @click=handleLogin>登录</button> -->
            </form>
        </div>
    
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
import {MessageBox} from "mint-ui";
export default {
  name: "login",
  components: {
    HeaderChild
  },
  data(){
      return{
          text:"登录",
          formData:{
             id:'',
             password:'',
             
          }
      }
  },
   mounted(){
      this.$nextTick(()=>{
        this.getHead();
       })
    },
  methods:{
       getHead(){
         this.$refs.head.$refs.title.innerHTML=this.text;
        },
        //token的作用
        handleLogin(){
            const form=new FormData();
            form.append('id_card',this.formData.id);
            form.append('password',this.formData.password);
            this.$axios.post('user/userLogin.do', form).then(res=>{
                if(res.code==1){
                  MessageBox.alert(res.msg);
                  this.$store.commit('isLogin',res.token);
                //   this.$store.commit('changePwd',this.formData.password);
                  this.$router.push('/userInfo');
                //   console.log(this.$store.state.password);
                 
                  
                  
                    // this.$router.push('/myParty');
                }
            })
        }

  }
};
</script>

<style scoped lang="scss">
    .login-wrap{
        padding-top:0.88rem;
        background:rgb(197,2,6);
        height:100vh;
        .unique-img {
          
            img{
                display:block;
                margin:0.6rem auto;
            }  

        }
        .login-form form{
            margin:0 0.64rem;
            input{
                width:100%;
                background:rgb(197,2,6);
                padding:0.1rem 0;
                height:0.67094rem;
                // margin-bottom:0.2rem;
                border:solid 0.02rem yellow;
                border-radius:0.08rem;
               
                font-size:0.36rem;
                font-weight:400;
                // ::-wbkit-input-placeholder{
                //     color:#fff;
                // }  
              
            }
            input::-webkit-input-placeholder{
                color:#fff;
                font-size:0.36rem;
            }
            .mt-button{
                 margin-top:0.4rem;
            }
        }
    }
</style>