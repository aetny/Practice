<template>
    <div class="detail_header">
      <a class="icon_back" href="#" @click="$router.go(-1)"></a>
      <h3 class="detail_header_title">购物车</h3>
      <a class="icon_menu" href="#" @click="$router.push({path:'/home'})"></a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
[class^='icon_']{
  background:url(../../assets/images/sprites.png) no-repeat;
  background-size:200px 200px;
}
.detail .detail_header{
  height:45px;
  width:100%;
  position:fixed;
  text-align:center;
  border-bottom:1px solid #bfbfbf;
  z-index:10;
}
.detail .detail_header .icon_back{
  position: absolute;
  display: block;
  height:20px;
  width:20px;
  left:0;
  top:0;
  background-position: -20px 0;
  margin:12px;
}
.detail .detail_header .detail_header_title{
  width:100%;
  margin:0;
  padding:0;
  font-size:16px;
  font-weight:400;
  height:45px;
  line-height: 45px;
}
.detail .detail_header .icon_menu{
  height:45px;
  width:40px;
  position: absolute;
  right:0;
  top:0;
  display:block;
  background-position:-60px 0;
  box-sizing: border-box;
  padding:10px;
  background-origin: content-box;
  background-clip: content-box;
} 
</style>