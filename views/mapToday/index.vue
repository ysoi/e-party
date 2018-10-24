<template>
    <div class="today-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div v-html="html.h1"></div>
           
    </div>
</template>

<script>
    import HeaderChild from "@/components/headerChild/index";
    export default {
        name:"mapTody",
        components:{
            HeaderChild
        },
           data(){
            return{
                text:"党史今天",
                html:{}
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
                this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70506%2Findex.html').then(res=>{
                    console.log(res);
                    this.html=res
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


    }
</style>