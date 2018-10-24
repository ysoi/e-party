<template>
    <div class="user-wrap">
        <HeaderChild ref="head" >
           
        </HeaderChild>
        <div class="topRight" v-text="rightText" @click="handleEdite"></div>
        <form action="" method="post" class="user-info" :model="formData" >
            <div class="info-item">
                <span>头像</span>
                <img  class="text" :src="formData.header" :readonly="isRead"/>
            </div>
             <div class="info-item">
                <span>姓名</span>
               
                <input type="text" class="text"  v-model="formData.username" :readonly="isRead"/>
            </div>
            <div class="info-item">
                <span>身份证</span>
                <input type="text" class="text"   v-model="formData.branchId" :readonly="isRead"/>
            </div>
             <div class="info-item">
                <span>家庭住址</span>
                <input type="text" class="text"  v-model="formData.hometown" :readonly="isRead"/>
            </div>
             <div class="info-item">
                <span>民族</span>
                <input type="text" class="text" v-model="formData.nation" :readonly="isRead"/>
            </div>
             <div class="info-item">
                <span>微信号</span>
                <input type="text" class="text" v-model="formData.wxNum" :readonly="isRead"/>
            </div>
             <div class="info-item">
                <span>qq号</span>
                <input type="text" class="text" v-model="formData.qqNum" :readonly="isRead"/>
            </div>
            <div class="info-item">
                <span>性别</span>
                <div>
                     <span>男</span>
                     <input type="radio"  value="1" class="text" v-model="formData.sex" :readonly="isRead"/> 
                     <span>女</span>
                    <input type="radio"  value="0" class="text" v-model="formData.sex" :readonly="isRead"/>
                </div>
              
            </div>
             <div class="info-item">
                <span>最高学历</span>
                <input type="text" class="text"  v-model="formData.education" :readonly="isRead" />
            </div>
             <div class="info-item">
                <span>职称</span>
                <input type="text" class="text"  v-model="formData.jobRank " :readonly="isRead"/>
            </div>
             <div class="info-item">
                <span>薪资水平</span>
                <input type="text" class="text"  v-model="formData.salary" :readonly="isRead"/>
            </div>
            <div class="info-item">
                <span>入党时间</span>
                <input type="date" class="text"  v-model="formData.joinPartyTime" :readonly="isRead"/>
            </div>
            <div class="info-item">
                <span>党费最后缴纳时间</span>
                <input type="date" class="text" v-model="formData.lastPayTime" :readonly="isRead"/>
            </div>
            <div class="info-item">
                <span>当前身份</span>
                <select name="partyForm"  v-model="formData.partyIdentity" :readonly="isRead" >
                    <option value="党员">党员</option>
                    <option value="预备党员">预备党员</option>
                    <option value="积极分子">积极分子</option>
                </select>
            </div>
        </form>
        
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
export default {
  name: "userInfo",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "个人信息",
      isRead:true,
      rightText:"编辑",
      formData:{
      }
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
    },
    getData(){
        this.$axios.get('user/userInfo.do').then(res=>{
            if(res.code==1){
                console.log(res);  
                this.formData=res.data;
            }
          
           
        })
    },
    handleEdite(){
        if(this.rightText=="编辑"){
           this.rightText="保存";
           this.text="修改个人信息"; 
           this.isRead=false;
        }else{
           this.rightText="编辑";
           this.text="个人信息"; 
           this.isRead=true; 
           this.$axios.post('user/modifyInfo.do',this.formData).then(res=>{
            if(res.code==1){
                  this.getData();
            }
        })

        }
       
      
        
       
        
       
    }
  }
};
</script>

<style scoped lang="scss">
.user-wrap {
  padding-top: 0.88rem;
  .topRight{
      position:fixed;
      top:0.2rem;
      right:0.2rem;
      font-size:0.4rem;
      color:#fff;
      font-weight:700;
  }
        
  .user-info {
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items:center;
      font-size: 0.28rem;
      padding:0.32rem;
      border: 0.02rem solid rgb(221,221,221);
      img{
          width:0.56rem;
          height:0.56rem;
      }
    }
  }
   .user-info  .info-item  .text{
       border: 0.04rem solid rgb(255,255,255);
       direction:rtl;
       outline:none;
      
   }
}
</style>

