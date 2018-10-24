<template>
    <div class="find-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div></div>
           
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
                text:"流动党员找组织",
             
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
             
            }
          
        }
    }
</script>

<style scoped lang="scss">
    .find-wrap{
        padding-top:0.88rem;
        // .show-img img{
        //     width:7.5rem;
        //     height:3.7225rem;
        // }
    }
</style>