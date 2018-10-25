<template>
    <div class="int-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div class="image">
            <img src="@/public/imgs/party/03.png" >
            <div v-text="totalScore"></div>
        </div>
        <div class="middle">
             <div class="info-left">
               <img src="@/public/imgs/icon/user2.png" alt="">
               <div>积分明细</div>
             </div>
             <router-link class="info-right" to="/intDet">
                 <img src="@/public/imgs/icon/userRight.png" alt=""> 
             </router-link> 
        </div>
        <div class="rule"> 
            <span>积分规则</span>
            <img src="@/public/imgs/icon/wenhao.png" alt="">     
        </div>
        <div class="intInfo"> 
            <div class="int-item"
             v-for="item in intData"
             :key="item.id"
             >
               <span v-text="item.name"></span>
               <span v-text="item.value"></span>  
            </div>
           
        </div> 
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
export default {
  name: "useInt",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "个人量化积分",
      totalScore: 0,
      path: "/myParty",
      intData:[
         {id:'01',name:'登录App',value:5},
         {id:'02',name:'完善个人信息',value:2},
         {id:'03',name:'查看积分',value:1},
         {id:'04',name:'按时交纳党费',value:10},
         {id:'05',name:'查看通知',value:2},
         {id:'06',name:'了解学院工作动态',value:5},
         {id:'07',name:'上交思想汇报经审核通过',value:5},
         {id:'08',name:'主动学习相关文件',value:10},
         {id:'09',name:'提交个人总结，并参与评议',value:2},
         {id:'10',name:'积极参加互动',value:5},
         {id:'11',name:'学习党建知识',value:5},
         {id:'12',name:'学习党史',value:10},
         {id:'13',name:'创先争优事迹',value:10},
         {id:'14',name:'学党章，学习习近平总书记系列讲话',value:10},
         {id:'15',name:'用镜头记录两学一做过程中令人感动的人和事',value:3},
         {id:'16',name:'关注并积极参与特色活动',value:5},
         {id:'17',name:'制度化、常态化建设',value:5},  
      ],
         
      
    }
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
      this.$axios.get('user/userInfo.do').then(res=>{
         
      this.totalScore=res.data.totalScore;
      })
    }
  }
};
</script>

<style scoped lang="scss">
.int-wrap {
  padding-top: 0.88rem;
  .image {
    position: relative;
    img {
      width: 7.5rem;
      display: block;
    }
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 0.32rem;
      color: #fff;
      font-weight: 600;
      //利用c3实现距离自身高度的50%
      transform: translate(-50%, -50%);
    }
  }
  .middle {
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
      display: block;
    }
    .info-left div {
      font-size: 0.32rem;
      font-weight: 400;
      //    margin:0;
      //    padding:0;
    }
  }
  .rule {
    padding: 0.2rem;
    width: 7.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.04rem solid #e9e9e9;
    font-size: 0.32rem;
    background:rgb(238,238,238);
  }
  .int-item{
    padding: 0.2rem;
    width: 7.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.04rem solid #e9e9e9;
    font-size: 0.32rem; 
    font-weight: 400;
    background:rgb(255, 255, 255);
    span:nth-child(2){
        color:rgb(255,0,0);
    }
  }
}
</style>