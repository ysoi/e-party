<template>
    <div class="headerChild">
        <router-link ref="goback" to="/" class="left"><img src="@/public/imgs/icon/04.png" alt=""></router-link>
        <h6 ref="title"></h6>
    </div>
</template>

<script>
    export default {
        name:"headerChild",
        data(){
            return{
              
            }
        }
        
    }
</script>

<style scoped lang="scss">
    .headerChild{
        position:fixed;
        top:0;
        padding:0.1rem;
        background:rgb(219,0,0);
        height:0.68rem;   
        width:7.3rem;
        display:flex;
        justify-content:flex-start;
        h6{
            line-height:0.68rem;
            padding:0 0.02rem;
            font-size:20px;
            color:#fff;
            margin: 0 auto;
        }
        .left{
            img{
                padding:0 0.02rem;
                //  margin:0 auto;
                 display:block;
                //  padding:0.1rem;
                //  width:
            }
           
        }
    }
</style>