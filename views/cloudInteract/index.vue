<template>
    <div class="interact-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div class="interact-det">
             <div 
             class="interact-item"
             v-for="item in rows"
             :key="item.forumId"
             >
                <div class="item-first"> 
                    <div class="first-left">
                         <img :src="item.header" alt="">
                         <div class="left-right">
                            <h6 v-text="item.username"></h6>
                            <div>
                                <img src="@/public/imgs/icon/时间.png" alt="">
                                <span v-text="item.currentTime"></span>
                                <img src="@/public/imgs/icon/声音.png" alt="">
                                <span>公开</span>
                            </div>
                        </div>
                    </div>
                   <img src="@/public/imgs/icon/党员互动.png" class="first-right">
                </div>
                <div v-text="item.content" class="item-second"></div>
                <router-link :to="{path:'/content',query:{forum_id:item.forumId}}" class="item-third">
                    <img src="@/public/imgs/icon/回复.png" alt="">
                    <span>回复</span>
                </router-link>
            </div>
        </div>
        <div class="float" @click="handleAdd">
            <img src="@/public/imgs/icon/btn.png">
        </div>
        <div class="mengCen" v-if="isShow">
            <div class="interact">
               <textarea name="interact"  cols="50" rows="6" class="editor" v-model=" interact"></textarea>
               <div>
                   <mt-button  size="small"  type="danger" @click="handleSend">发布</mt-button>
                   <mt-button  size="small"  type="primary" @click="handleCancel">取消</mt-button>
               </div>
            </div>
        </div>  
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
import {MessageBox} from "mint-ui";
export default {
  name: "cloudInteract",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "党员云互动",
      rows: [],
      isShow:false,
      interact:'',
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
      // this.$refs.head.$refs.goback.to=this.path;
    },
    getData() {
      this.$axios.get("forum/forumList.do").then(res => {
        // console.log(res);
        if (res.code == 1) {
          this.rows = res.rows;
        }
      });
    },
    handleAdd(){
        this.isShow=true;
    },
    handleSend(){
        let form=new FormData();
        form.append('content',this.interact);
        form.append('type',1);
        this.$axios.post('/forum/saveForum.do',form).then(res=>{
             if(res.code==1){
               this.isShow=false;
               this.getData();
               MessageBox.alert(res.msg);
               
            }
        })
    },
    handleCancel(){
        this.isShow=false;
    }
  }
};
</script>

<style scoped lang="scss">
.interact-wrap {
  padding-top: 0.88rem;
  background:#e9e9e9;
  .float{
      z-index:1;
      position:fixed;
      right:0.2rem;
      bottom:0.6rem;
  }
  .mengCen{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.5);
      z-index:10;
      .interact{
          background:rgb(241,241,241);
          position: absolute;;
          bottom:0;
          padding:0.2rem;
      }
      .interact .editor{
        //   margin-bottom:0.2rem;
      }
       .interact div{
           display:flex;
           justify-content:space-between;
           align-items:center;
           font-size:0.24rem;
       }
    }
  .interact-det .interact-item {
    background:#fff;
    padding: 0.32rem;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    margin-bottom:0.2rem;
    .item-first{
         display: flex;
         justify-content:space-between;
        //  width:7.18rem;
        margin-bottom:0.4rem;
        }
    }
    
  .interact-det .interact-item  .item-first .first-left{
      display: flex;
      justify-content:flex-start;
      img{
        display:block;
        width:0.68rem;
        height:0.68rem;
        border-radius:50%;
        margin-right:0.2rem;
      }
      .left-right{
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
      }
      .left-right h6{
          font-size:0.36rem;
          font-weight:400;
      }
      .left-right div{
        display: flex;
        justify-content:flex-start;
        align-items:center;
        font-size:0.24rem;
        font-weight:400;
      }
      .left-right div img{
          display:block;
          width:0.24rem;
          height:0.24rem;
        }
      
    }
    .interact-det .interact-item .item-first  img{
        height:0.52rem;
    }

     .interact-det .interact-item .item-second{
        font-size:0.32rem;
        margin-bottom:0.2rem;
    }
     .interact-det .interact-item .item-third{
        display: flex;
        justify-content:flex-end;
        align-items:center;
        font-size:0.28rem;
        font-weight:400;
    }
}
</style>