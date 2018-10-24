<template>
    <div class="hand-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div class="party-menu">
            <div class="party-item" 
             v-for="item in rows"
            :key="item.newsId"
            >
                <router-link :to="{name:'articalDetail',params:{newsId:item.newsId}}"  class="router-link">
                    <img :src="item.pic" alt="">
                    <div>{{item.title}}</div>
                </router-link>          
           </div>
         
        </div>
    </div>
</template>

<script>
    import HeaderChild from "@/components/headerChild/index";
    export default {
        name:"anyPhoto",
        components:{
            HeaderChild
        },
           data(){
            return{
                text:"随时随地拍",
                type:7,
                rows:[]
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.getHead();
            })
        },
        created(){
            this.getData();
        },
        methods:{
            getHead(){
               this.$refs.head.$refs.title.innerHTML=this.text;
            },
            getData(){
                this.$axios.get(`news/newsList.do?type=${this.type}`).then(res=>{
                   if(res.code==1){
                       this.rows=res.rows
                   }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .hand-wrap{
        padding-top:0.88rem;
        // .show-img img{
        //     width:7.5rem;
        //     height:3.7225rem;
        // }
        .party-menu{
            display:flex;
            flex-flow: row wrap;
            justify-content:flex-start;  
            
        }
        .party-menu .party-item{
            padding: 0.32rem;
        }
        .party-menu .party-item .router-link { 
            img{
                display:blcok;
                width:3.11rem;
                height:2.3325rem;
            }
            div{
                width:3.11rem;
                font-size:0.26rem;
                text-align:center;
                color:#333;
                font-weight:400;
            }
            
        }

    }
</style>