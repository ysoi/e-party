import Vue from 'vue';
import Router from 'vue-router';
import Home from "../views/home/home";
import NewList from "@/views/newList/index";
import HandLife from "@/views/handLife/index";
import ArticalDetail from "@/views/articalDetail/index";
import Login from "@/views/login/index";
import AnyPhoto from "@/views/anyPhoto/index";
import Inform from "@/views/inform/index";
import MyParty from "@/views/myParty/index";
import MapToday from "@/views/mapToday/index";
import FindOrganize from "@/views/findOrganize/index";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:Home
    },
    {
      path:'/newList',
      name:'newList',
      component:NewList
    },
    {
      path:'/anyStudy',
      name:'anyStudy',
      component:NewList
    },
    {
      path:'/studyDoing',
      name:'studyDoing',
      component:NewList
    },
    {
      path:'/studyGoing',
      name:'studyGoing',
      component:NewList
    },
    {
      path:'/policyStudy',
      name:'policyStudy',
      component:NewList
    },
    {
      path:'/handLife',
      name:'handLife',
      component:HandLife
    },
    {
      path:'/partyBulid',
      name:'partyBulid',
      component:NewList
    },
    {
      path:'/showIndentify',
      name:'showIndentify',
      component:NewList
    },
    {
      path:'/articalDetail/:newsId',
      name:'articalDetail',
      component:ArticalDetail
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/anyPhoto',
      name:'anyPhoto',
      component:AnyPhoto
    },
    {
      path:'/inform',
      name:'inform',
      component:Inform
    },
    {
      path:'/myParty',
      name:'myParty',
      component:MyParty
    },
    //党史今天
    {
      path:'/mapToday',
      name:'mapToday',
      component:MapToday
    },
    {
      path:'/findOrganize',
      name:'findOrganize',
      component:FindOrganize
    },
    //login之后
    {
      path:'/userInfo',
      name:'userInfo',
      component:()=>import("@/views/userInfo/index")
    },
    //个人量化积分
    {
      path:'/userInt',
      name:'userInt',
      component:()=>import("@/views/userInt/index")
    },
    //积分明细
    {
      path:'/intDet',
      name:'intDet',
      component:()=>import("@/views/intDetail/index")
    },
    //修改密码
    {
      path:'/changeSecret',
      name:'changeSecret',
      component:()=>import("@/views/changeSecret/index")
    },
    //党费缴纳
    {
      path:'/payFee',
      name:'payFee',
      component:()=>import("@/views/payFee/index")
    },
   
    //党员云互动
    {
      path:'/cloudInteract',
      name:'cloudInteract',
      component:()=>import("@/views/cloudInteract/index")
    },
    //针对某主题评论
    {
      path:'/content',
      name:'content',
      component:()=>import("@/views/content/index")
    },
  ]
})
