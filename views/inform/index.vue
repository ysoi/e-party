<template>
    <div class="new-wrap">
      <HeaderChild ref="head"></HeaderChild>
      <div class="new-list">
          <div class="new-item"
          v-for="item in rows" 
          :key="item.newsId"
          >
              <router-link :to="{name:'articalDetail',params:{newsId:item.newsId}}" class="new-link">
                 <div class="new-left">
                     <img src="@/public/imgs/icon/inform.png" alt="">
                 </div>
                 <div class="new-right">
                     <div class="right-first">
                         <h3>{{item.title}}</h3>
                     </div>
                     <div class="right-second">
                         <div class="second-left">
                             <span>{{item.currentTime}}</span>
                         </div>
                     </div>
                 </div>
              </router-link>
          </div>
      </div>
      <div class="new-footer">没有更多数据了</div>
      <TabBar></TabBar>
    </div>
</template>

<script>
    import TabBar from "@/components/footer/footer";
    import HeaderChild from "@/components/headerChild/index"
    export default {
        name:'newList',
        components:{
            HeaderChild,
            TabBar 
        },
          data(){
            return{
                text:"通知",
                type:2,
                rows:[]
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
                this.$axios.get(`news/newsList.do?type=${this.type}`).then(res=>{
                    console.log(res);
                   this.rows=res.rows;
                })
            }
          
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
                justify-content:space-between;
               
                .new-left img{
                    
                    padding:0.4rem;
                    display:block;
                }
                .new-right{
                    display:flex;
                    flex-direction:column;
                    justify-content:flex-start;
                    // height:1.6rem;
                }
                .new-right .right-first h3{
                    font-size:0.32rem;
                    font-weight:500;
                    color:#333;
                    margin-bottom:0.2rem;
                }
                // .new-right .right-second{
                //     display:flex;
                //     justify-content:flex-start;
                //     align-items:flex-end;
                // }
                .new-right .right-second .second-left{
                    font-size:0.24rem;
                    color:#333;
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