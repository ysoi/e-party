<template>
    <div class="today-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div v-html="content"></div>
           
    </div>
</template>

<script>
    import HeaderChild from "@/components/headerChild/index";
    import getUrl from "@/utils/getUrl";
    import cheerio from "cheerio";
    export default {
        name:"mapTody",
        components:{
            HeaderChild
        },
           data(){
            return{
                text:"党史今天",
                content:{},
                
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
               
                let url=getUrl();
                this.$axios.get(`/proxy/proxy.do?url=${url}`).then(res=>{
                const $=cheerio.load(res);
                this.content=$('.p1_02').html();
                })
            }
          
        }
    }
</script>

<style scoped lang="scss">
    .today-wrap{
        padding-top:0.88rem;
        // .show-img img{
        //     width:7.5rem;
        //     height:3.7225rem;
        // }
        /deep/ h1{
            font-size:0.48rem;
            font-weight:700;
            margin-bottom:0.4rem;
        }
        /deep/ h2{
             font-size:0.4rem;
            font-weight:600;
            margin-bottom:0.4rem;
        }
        /deep/ p{
             font-size:0.32rem;
            font-weight:500;
            margin-bottom:0.4rem;
        }
    }
</style>