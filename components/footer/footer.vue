<template>
    <div class="footer-wrap">
        <mt-tabbar :fixed="true" selected.sync="selected" class="tabbar">
          <router-link :to='{name:"home"}' class="a-item"  @click="handleIcon">
             <mt-tab-item id="home" class="item"  @click="handleIcon">
                <img slot="icon" 
                
                src="@/public/imgs/tabbar/party1.png"
                alt="">
                首页
             </mt-tab-item>
          </router-link>
          <router-link  :to='{name:"inform"}'>
              <mt-tab-item id="inform">
                <img slot="icon" src="@/public/imgs/tabbar/message1.png" alt="">
                通知早知道
             </mt-tab-item>
          </router-link>
          <router-link  :to='{name:"myParty"}'>
               <mt-tab-item id="myPatry">
                    <img slot="icon" src="@/public/imgs/tabbar/my1.png" alt="">
                    我的党建
                </mt-tab-item> 
          </router-link>
       
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name:'myFooter',
        data(){
            return{

            }
        },
        methods:{
            handleIcon(){
                console.log('asss');
                const home=document.getElementById("home");
                console.log(home);
            }
        }
    }
</script>

<style scoped lang="scss">
   .footer-wrap .tabbar{
       width:7.5rem;
       display:flex;
       justify-content:space-around;
   }
   
</style>