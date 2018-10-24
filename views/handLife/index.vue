<template>
    <div class="hand-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div class="show-img">
            <img src="../../public/imgs/party/02.jpg" alt="">
        </div>
        <div class="party-menu">
            <div class="party-item">
                <router-link to="/policyStudy"  class="router-link">
                    <img src="../../public/imgs/icon/icon1.png" alt="">
                    <div>政治学习</div>
                </router-link>
                
            </div>
             <div class="party-item">
                <router-link to="/newList" class="router-link">
                    <img src="../../public/imgs/icon/icon2.png" alt="">
                    <div>思想汇报</div>
                </router-link>
                
            </div>
             <div class="party-item">
                <router-link to="/newList"  class="router-link">
                    <img src="../../public/imgs/icon/icon3.png" alt="">
                    <div>心得总结</div>
                </router-link>
                
            </div>
            <div class="party-item">
                <router-link to="/newList"  class="router-link">
                    <img src="../../public/imgs/icon/icon4.png" alt="">
                    <div>民主评议</div>
                </router-link>
                
            </div>
            <div class="party-item">
                <router-link to="/findOrganize"  class="router-link">
                    <img src="../../public/imgs/icon/icon5.png" alt="">
                    <div>流动党员找组织</div>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderChild from "@/components/headerChild/index";
    export default {
        name:"handLife",
        components:{
            HeaderChild
        },
        data(){
            return{
                text:"掌上组织生活",
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
        }
    }
</script>

<style scoped lang="scss">
    .hand-wrap{
        padding-top:0.88rem;
        .show-img img{
            width:7.5rem;
            height:3.7225rem;
        }
        .party-menu{
            display:flex;
            flex-flow: row wrap;
            justify-content:flex-start;  
            
        }
        .party-menu .party-item{
            padding: 0.3rem 0.4rem;
        }
        .party-menu .party-item .router-link { 
            img{
                display:blcok;
                width:1.7rem;
                height:1.7rem;
            }
            div{
                width:1.7rem;
                font-size:0.28rem;
                text-align:center;
                color:#333;
                font-weight:400;
            }
            
        }

    }
</style>