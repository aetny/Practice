<template>
  <div class="detail">
    <div class="detail_header">
      <a class="icon_back" href="#" @click="$router.go(-1)"></a>
      <div class="detail_header_title"><input type="search" placeholder="点击搜索" @click="$router.push({path:'/find'})" v-model="input_data" class="search"></div>
      <a class="icon_menu" href="#" @click="$router.push({path:'/home'})"></a>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      input_data:''
    }
  },
  methods:{
    _submit(){
      console.log(this.input_data)
    }
  }
}
</script>
<style scoped>
.detail{
  margin:0;
  padding:0;
}
[class^='icon']{
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
.detail .detail_header .detail_header_title input{
  height: 35px;
  width: 80%;
  border-radius: 5px;
  outline: none;
  text-shadow: none;
  border: 1px solid #bfbfbf;
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
