<template>
    <div class="detail-wrap">
        <HeaderChild ref="head"></HeaderChild>
         <h3>{{detailData.title}}</h3>
         <!-- <img :src="detailData.pic" > -->
         <div v-html="detailData.content" class="content">
         </div>
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
export default {
  name: "articalDetail",
  components: {                                                                                         
    HeaderChild
  },
  data() {
    return {
      text: "",
      newsId: "",
      detailData: {},
      type: '',
      path:''
    };
  },
  created() {
    this.getData();
    // this.$nextTick(()=>{
    //     this.getHeader(); 
    // })
  },

  methods: {
    getData() {
      this.newsId = this.$router.history.current.params.newsId;

      this.$axios
        .get(`/news/newsContent.do?newsId=${this.newsId}`)
        .then(res => {
          if (res.code == 1) {
            // console.log(res.data);
            this.detailData = res.data;
            // console.log(res.data);
            this.type =res.data.type;
            console.log(this.type);
            this.getHeader();
         
          }
      });
      // console.log(this.type);
    
      // this.path=this.$router.history.current.path
    },

    //获取头部html
    getHeader() {
          
          // console.log(this.type);
          // console.log("...")
          switch (this.type) {
              case 0:
                this.text = "信工新闻眼";
                this.path="/newList";
                // console.log(this.type);
                // console.log(this.text);
                break;
              case 1:
                this.text = "特色活动";
                this.path="/studyGoing";
                break;
              case 2:
                  this.text="通知早知道";
                  this.path="/inform";
                  break;
              case 3:
                this.text = "党建一点通";
                this.path="/partyBulid";
                break;
              case 4:
                this.text = "制度建设";
               this.path="/studyDoing";
                break;
              case 5:
                this.text = "党员亮身份";
                this.path="/showIndentify";
                break;
              case 6:
                this.text = "随时随地学";
                this.path="/anyStudy";
                break;
               case 7:
                this.text = "随时随地拍";
                this.path="/anyPhoto";
                break;
              case 8:
                this.text = "政治学习";
               this.path="/policyStudy";
                break;
              default:
                break;
            }
      // console.log(this.$router);
      // console.log("999");
      // console.log(this.text);
       this.$nextTick(()=>{

        this.$refs.head.$refs.goback.to=this.path;
         console.log( this.$refs.head.$refs);
       this.$refs.head.$refs.title.innerHTML = this.text; 
    })
     
    }
    // console.log(this.$router.history.current.params.newsId);
    ///news/newsContent.do?newsId=2729
  }
};
</script>

<style scoped lang="scss">
.detail-wrap {
  padding-top: 0.88rem;
  h3 {
    font-size: 0.48rem;
    font-weight: 500;
  }
  .content /deep/ img {
    width: 7.1rem;
    padding: 0.2rem;
    display: block;
    margin: 0 auto;
  }
  .content /deep/ p {
    font-size: 0.36rem;
    text-indent: 2em;
  }
  .content /deep/ h4 {
    font-size: 0.36rem;
    font-weight: 400;
  }
}
</style>