<template>
    <div class="content-wrap">
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
                                <span v-text="item.timeFormat"></span>
                            </div>
                        </div>
                    </div>
                 
                </div>
                <div v-text="item.comment" class="item-second"></div>
            </div>
        </div>
        <div class="content" >
             <input type="text" placeholder="添加评论" v-model="content">
             <mt-button size="small" type="danger" @click="handleSubmit">评论</mt-button>
        </div>
       
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
import {MessageBox} from "mint-ui";
export default {
  name: "content",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "党员云互动",
      rows: [],
      path:'/cloudInteract',
      content:'',
      rows:[]
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
      this.$refs.head.$refs.goback.to=this.path;
    },
    handleSubmit(){
        const id=this.$route.query.forum_id
        let form=new FormData();
        form.append('forum_id',id);
        form.append('comment',this.content);
        this.$axios.post('/forum/addComment.do',form).then(res=>{
             if(res.code==1){   
                 this.content='';     
                 MessageBox.alert(res.msg);
                 //从前到后添加数据
                 this.rows.unshift(res.data);
                
               
            }
        })
       
    },
   
    // handleAdd(){
       
    // },
    // handleSend(){
    //     let form=new FormData();
    //     form.append('content',this.interact);
    //     form.append('type',1);
    //     this.$axios.post('/forum/saveForum.do',form).then(res=>{
    //          if(res.code==1){
    //            this.isShow=false;
    //            this.getData();
    //            MessageBox.alert(res.msg);
               
    //         }
    //     })
    // },
    // handleCancel(){
    //     this.isShow=false;
    // }
  }
};
</script>

<style scoped lang="scss">
.content-wrap {
  padding-top: 0.88rem;
  background:#e9e9e9;
  .content{
       z-index:1;
       position:absolute;
       bottom:0;
       padding:0.2rem;
       display: flex;
       justify-content:space-between;
       border-top:0.02rem solid #e9e9e9;
       input{       
           width:5.7rem;
           margin-right:0.3rem;
           border:0.02rem solid rgb(197,2,6);
           border-radius:0.06rem;
       }
  }
   .interact-det{
     
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

     .interact-det .interact-item .item-second{
        font-size:0.32rem;
        margin-bottom:0.2rem;
    }
}
</style>