<template>
  <div class="banner clearfix">
    <ul class="banner_box">
      <li v-for="(item,index) in list" :key="index"><img :src="item.src" alt="" v-show="current_page==index"></li>
    </ul>
    <ul class="banner_point">
      <li v-for="(v,i) in list" :key="i" @click="current_page=i" :class="{'active':current_page == i}"></li>
    </ul>
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

}
.banner .banner_box li{
  float:left;
  list-style:none;
  width:100%;
}
.banner .banner_box li img{
  width:100%;
  display:block;
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
