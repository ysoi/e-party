<template>
    <div class="payFee-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div>
            <h6>请选择支付方式</h6>
            <div class="info-item"  @click="handleWx">
             <div class="info-left">
               <img src="@/public/imgs/icon/微信.png" alt="">
               <div>微信</div>
             </div>
             <div class="info-right" >
                 <img src="@/public/imgs/icon/userRight.png" alt=""> 
             </div>
          </div>
          <div class="info-item" @click="handleZf">
             <div class="info-left">
               <img src="@/public/imgs/icon/支付宝.png" alt="">
               <div>支付宝</div>
             </div>
             <div class="info-right" >
                 <img src="@/public/imgs/icon/userRight.png" alt=""> 
             </div>
          </div>
            
        </div>
        <div v-if="isShow1" class="zhiFu" @click="handleMc1">
           <img src="../../public/imgs/party/wx.png" >
        </div>
        <div v-if="isShow2" class="zhiFu" @click="handleMc2">
           <img src="../../public/imgs/party/zfb.png" >
        </div>
       
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
export default {
  name: "payFee",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "缴纳党费",
      path: "/myParty",
      isShow1: false,
      isShow2: false,
      image: ''
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$nextTick(() => {
      this.getHead();
    });
  },
  methods: {
    getHead() {
      this.$refs.head.$refs.title.innerHTML = this.text;
      this.$refs.head.$refs.goback.to = this.path;
    },
    getData() {
      // this.$axios.get('').then(res=>{
      //     console.log(res);
      //     this.html=res
      // })
    },
    handleWx() {
    
     
      this.isShow1 = true;
    },
    handleZf() {
     
    
      this.isShow2= true;
    },
    handleMc1(){
       this.isShow1 = false;
    },
     handleMc2(){
       this.isShow2 = false;
    },
  }
};
</script>

<style scoped lang="scss">
.payFee-wrap {
  padding-top: 0.88rem;
  // .show-img img{
  //     width:7.5rem;
  //     height:3.7225rem;
  // }
  h6 {
    font-size: 0.3rem;
    font-weight: 400;
    line-height: 1rem;
    border-bottom: 0.04rem solid #e9e9e9;
  }
  .info-item {
    padding: 0.2rem;
    width: 7.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.04rem solid #e9e9e9;

    .info-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .info-left img {
      width: 0.64rem;
      height: 0.64rem;
      margin-right: 0.2rem;
    }
    .info-left div {
      font-size: 0.32rem;
      font-weight: 400;
      //    margin:0;
      //    padding:0;
    }
  }
  .zhiFu {
    z-index:998;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
  
    
    img {
      width:6rem;
      height:6rem;
      position:fixed;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  }
}
</style>