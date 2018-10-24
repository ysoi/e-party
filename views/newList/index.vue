<template>
    <div class="new-wrap">
      <HeaderChild ref="head" id="head"></HeaderChild>
      <div class="new-list">
          <router-link class="new-item" 
           v-for="item in rows"
           :key="item.newsId"
        
           :to="{name:'articalDetail',params:{newsId:item.newsId}}"
          >
          <!-- path query -->
          <!--name params  --> 
              <div class="new-link">
                 <div class="new-left">
                     <img :src="item.pic" alt="">
                 </div>
                 <div class="new-right">
                     <div class="right-first">
                         <h3>{{item.title}}</h3>
                     </div>
                     <div class="right-second">
                         <div class="second-left">
                             <span>{{item.currentTime}}</span>
                         </div>
                         <div class="second-right">
                             <img src="@/public/imgs/icon/eye.png" alt="">
                             <span>{{item.count}}</span>
                         </div>
                     </div>
                 </div>
              </div>
          </router-link>
      </div>
      <div class="new-footer">没有更多数据了</div>
    </div>
</template>

<script>
    import HeaderChild from "@/components/headerChild/index"
    export default {
        name:'newList',
        components:{
            HeaderChild
        },
        data(){
              return{
                page:1,
                rows:10,
                type:0,
                path:'',
                text:'',
                rows:[],
                to:'/',
            }
            
            
        },
        
        //vue实例创建成功之后
        created(){
            this.getData();
            
        },
        mounted(){
            
            this.$nextTick(()=>{
                this.getHead();
            })
        },
        methods:{
            //取相应数据
            getData(){
                // page=1&rows=10&type=0

                //相关消息列
                ///news/newsList.do?page=1&rows=10&type=3 党建一点通
                //news/newsList.do?page=1&rows=10&type=0 信工新闻眼
                //党员亮身份 news/newsList.do?page=1&rows=10&type=5
                //news/newsList.do?page=1&rows=10&type=6随时随地学
                //news/newsList.do?page=1&rows=10&type=4 制度建设
                //news/newsList.do?page=1&rows=10&type=1 特色活动
                 
                //news/newsList.do?page=1&rows=10&type=7 随时随地拍
               


              
                // console.log(this.$router.history.current.path);
                this.path=this.$router.history.current.path;
                switch(this.path){
                    case '/newList':
                        this.type=0;
                        this.text="信工新闻眼";
                        
                    break;
                    case '/studyGoing':
                        this.type=1;
                        this.text="特色活动";
                    break;
                    // case '/studyGoing':
                    //     this.type=2;
                    // break;
                    case '/partyBulid':
                        this.type=3;
                        this.text="党建一点通";
                    break;
                    case '/studyDoing':
                         this.type=4;
                         this.text="制度建设";
                    break;
                    case '/showIndentify':
                         this.type=5;
                         this.text="党员亮身份";
                    break;
                    case '/anyStudy':
                        this.type=6;
                        this.text="随时随地学";
                    break;
                    case '/policyStudy':
                        this.type=8;
                        this.text="政治学习";
                        this.to="/handLife";
                    default:
                    break;
                    
                }               
                this.$axios.get(`news/newsList.do?page=${this.page}&type=${this.type}`).then(res=>{
                    // console.log(res);
                    if(res.code==1){
                        this.rows=res.rows;
                    }
                })
            },

            getHead(){
               this.$refs.head.$refs.title.innerHTML=this.text;
               this.$refs.head.$refs.goback.to=this.to;
             
            },
            // handleDetail(key){
            //   console.log(key);
            //   console.log(event);
            // //   this.$router.push("/articalDetail")
            // }
        }
    }
</script>

<style scoped lang="scss">
    .new-wrap{
        padding-top:0.88rem;
        .new-list{
            .new-item{
                border-bottom: solid 0.02rem #e1e1e1;
                
            }
            .new-item .new-link{
                padding:0.2rem;
                display:flex;
                justify-content:flex-start;
                .new-left img{
                    width:1.6rem;
                    height:1.6rem;
                    margin-right:0.2rem;
                    display:block;
                }
                .new-right{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    height:1.6rem;
                }
                .new-right .right-first h3{
                    font-size:0.32rem;
                    font-weight:500;
                    color:#333;
                }
                .new-right .right-second{
                    
                    display:flex;
                     width:5.3rem;
                    // width:100%;
                    justify-content:space-between;
                    align-items:flex-end;
                }
                .new-right .right-second .second-left{
                    font-size:0.24rem;
                    color:#333;
                }
                 .new-right .right-second .second-right {
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-end;
                 
                    img{
                        padding-top:0.2rem;
                        // display:block;
                        margin-right:0.2rem;
                    }
                    span{
                       font-size:0.24rem;
                       color:#333;
                    }
                }
            }
        }
        .new-footer{
            width:100%;
            font-size:0.28rem;
            line-height:0.8rem;
            text-align:center;
        }
        
    }

</style>