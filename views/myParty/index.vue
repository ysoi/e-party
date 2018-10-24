<template>
    <div class="party-wrap">
      <HeaderChild ref="head"></HeaderChild>
      <div class="party-middle">
          <div class="party-user"> 
              <img :src="header" alt="">
              <router-link class="login" to="/login" v-text="myText">            
             </router-link>
          </div>
      </div>
      
      <div class="user-info">
          <div class="info-item">
             <div class="info-left">
               <img src="@/public/imgs/icon/user1.png" alt="">
               <div>个人信息</div>
             </div>
             <router-link class="info-right" to="/userInfo">
                 <img src="@/public/imgs/icon/userRight.png" alt=""> 
             </router-link>
          </div>
          <div class="info-item">
             <div class="info-left">
               <img src="@/public/imgs/icon/user2.png" alt="">
               <div>个人量化积分</div>
             </div>
             <router-link class="info-right" to="/userInfo">
                 <img src="@/public/imgs/icon/userRight.png" alt=""> 
             </router-link>
          </div>
          <div class="info-item">
             <div class="info-left">
               <img src="@/public/imgs/icon/user3.png" alt="">
               <div>修改密码</div>
             </div>
             <router-link class="info-right" to="/login">
                 <img src="@/public/imgs/icon/userRight.png" alt=""> 
             </router-link>
          </div>
          <div class="info-item"> 
              <div class="info-left">
                <img src="@/public/imgs/icon/user4.png" alt="" >
                <div>党费缴纳</div>
              </div>
              <router-link class="info-right" to="/login" >
                <img src="@/public/imgs/icon/userRight.png" alt="">
              </router-link>
          </div>     
        </div>
        <mt-button type="danger" size="large" class="button" v-if="isLogin">退出登录</mt-button>
      <TabBar></TabBar>
    </div>
</template>

<script>
    import TabBar from "@/components/footer/footer";
    import HeaderChild from "@/components/headerChild/index"
    export default {
        name:"myParty",
        components:{
            HeaderChild,
            TabBar 
        },
        data(){
            return{
                text:"我的党建",
                myText:"你还没登录，请登录",
                header:"@/public/imgs/icon/user1.png",
                isLogin:false
               
            }
        },
        created(){
            this.getData();
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
            getData(){
                this.$axios.get('user/userInfo.do').then(res=>{
                    if(res.code==1){
                        this.header=res.data.header;
                        this.myText=res.data.username;
                        this.isLogin=true;
                    }
                })
            }
          
        }
    }
</script>

<style scoped lang="scss">
    .party-wrap{
        padding-top:0.88rem;
        
        .party-middle{
           height:2.8rem;
           width:7.5rem;
           background:rgb(197,2,6);
         
        }
       .party-middle .party-user {
          
        //   width:2.220rem;
        //   margin:0 auto;
        //   padding-top:0.50rem;

           display:flex;
           flex-direction:column;
           justify-content:space-between;
           align-items:center;
            img{
                width:1.25rem;
                height:1.25rem;
                border-radius:50%;
                display:block;
                margin-top:0.50rem;
                margin-bottom:0.2rem;
            }
            .login{
                font-size:0.14rem;
                font-weight:500;
                color:#fff;
                // text-align:center;
            }
        }
        .user-info .info-item{
            padding:0.2rem;
            width:7.1rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            border-bottom:0.04rem solid #e9e9e9;
           .info-left{
              display:flex;  
              justify-content:flex-start;
              align-items:center;
           }
           .info-left img{
               width:0.64rem;
               height:0.64rem;
               margin-right:0.2rem;
           }
           .info-left div{
               font-size:0.32rem;
               font-weight:400;
            //    margin:0;
            //    padding:0;
           }
            
        }
        .button{
            margin-top:0.4rem;
        }
        
        
    }

</style>