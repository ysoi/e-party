<template>
    <div class="find-wrap">
        <HeaderChild ref="head"></HeaderChild>
       
             <el-amap 
               vid="amapInstance" 
               :zoom="zoom" 
               :center="center" 
               class="my-map"
               :plugin="plugin"
               >
               <!-- <el-amap-info-window  
                 v-for="item in markers"
                 :key="item.index"
                 :content="item.pointInfo"
                 :position="item.position"  
                 class="infoTip"
               >
                  
               </el-amap-info-window> -->
               <el-amap-marker 
                      v-for="item in markers"
                      :key="item.index"
                      :position="item.position" 
                      :label="item.label"    
                    >
              </el-amap-marker>
        
            </el-amap>
           
      
           
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
import axios from "axios";
// import AMap from 'AMap';
export default {
  name: "findOrganize",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "流动党员找组织",
      plugin:[
        {
          pName:'ToolBar',//工具条插件
          position:'LT'
        },
        {
          pName:'MapType',//卫星与地图切换
          defaultType:0,
          showTraffic:true,//实时交通图层
         
        },
        {
          pName:'OverView',
          isOpen:true,//鹰眼打开
         
        },
        {
          pName:'Scale',//比例尺
           position:{
             top:10,
             left:10
           }
        },
        {
          pName:'Geolocation',
          showMarker:true,
          events:{
            init(o){
              //定位后,将标记移到定位点
              o.getCurrentPosition((status,result)=>{
                console.log(result);
                // o.center=[result.position.ing,result.position.lat]
              })
            }
          }
        }
      ],
      markers: [
        {
          index:'0',
          position:[116.209838, 40.21602],
          label:{
          content:'信息工程学院流动党支部 支部书记：高洋 电话：123455676',
          offset:[10,10]
          }
        },
        {
          index:'1',
          position: [114.006844, 33.011072],
          label:
            {
              content:'信息工程学院党支部 支部书记：杨鑫 电话：123455676',
              offset:[10,10]
            },
            
        }
      ],

      zoom: 8,
      center: [116.397477, 39.908692] //中心点
    };
  },
  created() {
    // this.getData();
  },
  mounted() {
    this.$nextTick(() => {
      this.getHead();
    });
  },
  methods: {
    getHead() {
      this.$refs.head.$refs.title.innerHTML = this.text;
    }
  }
};
</script>

<style scoped lang="scss">
.find-wrap {
  padding-top: 0.88rem;
  // .show-img img{
  //     width:7.5rem;
  //     height:3.7225rem;
  // }
  .my-map {
    width: 100%;
    height: 12.46rem;
    .infoTip{
    font-size:0.32rem;
  }
  }
 
}
</style>