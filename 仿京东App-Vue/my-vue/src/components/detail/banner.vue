<template>
  <div class="banner clearfix">
    <ul class="banner_box">
      <li v-for="(item,index) in list" :key="index"><img :src="item.image_url" alt="" v-show="current_page==index"></li>
    </ul>
    <div class="banner_count">
      <span class="banner_slide">{{current_page+1}}</span>
      <span>/</span>
      <span>{{list.length}}</span>
    </div>
    <!-- <ul class="banner_point">
      <li v-for="(v,i) in list" :key="i" @click="current_page=i" :class="{'active':current_page == i}"></li>
    </ul> -->
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      current_page:0,
    }
  },
  props:['list'],
  mounted(){
    this.autoPlay();
  },
  methods:{
    autoPlay(){
      setInterval(()=>{
        if(this.current_page == this.list.length-1){
          return this.current_page = 0;
        }
        this.current_page++;
      },2000)
    }
  }
}
</script>
<style scoped>
.banner{
  width:100%;
  overflow: hidden;
  position: relative;
}
.clearfix::before{
  content:'';
  height:0;
  line-height:0;
  clear:both;
  display:block;
  visibility: hidden;
}
.banner .banner_box{
  width:100%;
  margin:0;
  padding:0;
  margin-top:45px;
  text-align: center;
}
.banner .banner_count{
  position:absolute;
  border-radius:50%;
  height:40px;
  width:40px;
  background-color:rgba(0, 0, 0, 0.15);
  right:10px;
  bottom:10px;
}
.banner .banner_count span{
  display: inline-block;
  line-height: 40px;
  font-size:12px;
  color:#fff;
}
.banner .banner_count .banner_slide{
  margin-left:5px;
  font-size:14px;
}
.banner .banner_box li{
  float:left;
  list-style:none;
  width:100%;
  background:cornsilk;
}
.banner .banner_box li img{
  width:100%;
  max-width:400px;
  margin:auto;
}
.banner .banner_point{
  position: absolute;
  bottom:5px;
  transform:translate(-50%,-50%);
  left:50%;
  z-index:5;
}
.banner .banner_point li{
  float:left;
  list-style:none;
  height:6px;
  width:6px;
  border-radius: 100%;
  border:1px solid #fff;
  margin-right:10px;
}
.active{
  background-color:rgb(240, 138, 21);
}
</style>
