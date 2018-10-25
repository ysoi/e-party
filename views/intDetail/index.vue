<template>
    <div class="intDet-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <div class="detail-item"
        v-for="item in rows"
        :key="item.id"
        >
            <div class="item-first">
               <span v-text="item.typeName" ></span> 
               <span v-text="item.singleDesc" ></span>
            </div>
            <span class="item-second" v-text="item.timeFormat"></span>
        </div>
           
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
export default {
  name: "intDet",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "积分明细",
      path: "/userInt",
      rows:[],
      page:1,
      size:10
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
      this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=${this.size}`).then(res=>{
          console.log(res);
          if(res.code==1){
            this.rows=res.rows;
          }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.intDet-wrap {
  padding-top: 0.88rem;
  .detail-item {
    padding: 0.32rem;
    width: 6.96rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 0.04rem solid #e9e9e9;
    .item-first {
      width:100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        font-size: 0.36rem;
        font-weight: 400;
      }
      span:nth-child(2) {
        font-size: 0.32rem;
        color: rgb(255,0,0);
        font-weight: 400;
      }
    }
    .item-second{
        font-size:0.28rem;
        font-weight: 400;
        margin-top:0.2rem;
    }
  }
}
</style>