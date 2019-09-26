<template>
  <div class="nav">
    <ul class="nav_ul">
      <li v-for="(item,index) in arr" :key="index" class="nav_li">
        <span style="cursor:pointer" @click="foo()" class="nav_box">
          <img :src="item.src" alt="" class="nav_img">
          <span class="nav_name">{{item.plateName}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data(){
    return{
      arr:[{plateName:'京东超市',src:require('../../assets/images/nav0.png')},
        {plateName:'全球购',src:require('../../assets/images/nav1.png')},
        {plateName:'服装城',src:require('../../assets/images/nav2.png')},
        {plateName:'京东生鲜',src:require('../../assets/images/nav3.png')},
        {plateName:'京东到家',src:require('../../assets/images/nav4.png')},
        {plateName:'充值中心',src:require('../../assets/images/nav5.png')},
        {plateName:'惠赚钱',src:require('../../assets/images/nav6.png')},
        {plateName:'领券',src:require('../../assets/images/nav7.png')},
        {plateName:'物流查询',src:require('../../assets/images/nav8.png')},
        {plateName:'我的关注',src:require('../../assets/images/nav9.png')}
      ]
    }
  },
  methods:{
    foo(){
      return false;
    }
  }
}
</script>
<style>
.nav{
  width:100%;
  height:140px;
  margin:0;
  padding:0;
}
.nav .nav_ul{
  width:100%;
  margin:0;
  padding:0;
}
.nav .nav_ul .nav_li{
  float:left;
  list-style:none;
  width:20%;

}
.nav .nav_ul .nav_li .nav_box{
  text-align:center;
  margin:0 auto;
  display: block;
  font-size:12px;
  padding: 10px;
}
.nav .nav_ul .nav_li .nav_box .nav_img{
  width:30px;
  height:30px;
}
.nav .nav_ul .nav_li .nav_box .nav_name{
  display:block;
  
}
</style>
