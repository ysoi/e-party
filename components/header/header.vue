<template>
    <div class="wrap">
        <div class="left"><img src="@/public/imgs/logo.png" ></div>
        <div class="right">登录</div>
    </div>
</template>

<script>
    export default {
        name:"myHead",
    }
</script>

<style scoped lang="scss">
    .wrap{
        z-index:1;
        padding:0.1rem;
        width:7.3rem;
        height:0.68rem;
        line-height:0.68rem;
        background:rgb(219,0,0);
        position:fixed;
        top:0;
        display:flex;
        justify-content:space-between;

        .left img{
            width:2.92rem;
            height:0.68rem;
        }
        .right{
            
           
            font-size:0.45rem;
           
            color:#fff;
      
        }
        
       
    }

</style>