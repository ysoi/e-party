<template>
    <div class="int-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div ></div>
           
    </div>
</template>

<script>
    import HeaderChild from "@/components/headerChild/index";
    export default {
        name:"useInt",
        components:{
            HeaderChild
        },
           data(){
            return{
                text:'个人量化积分',
               
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
                // this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70506%2Findex.html').then(res=>{
                //     console.log(res);
                //     this.html=res
                // })
            }
          
        }
    }
</script>

<style scoped lang="scss">
    .int-wrap{
        padding-top:0.88rem;
      


    }
</style>