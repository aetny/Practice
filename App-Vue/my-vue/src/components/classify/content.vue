<template>
  <div class="c_bod">
    <div class="c_pic">
      <a href="#">
        <img src="../../assets/images/banner_1.png" alt=""> 
      </a>
    </div>
    <div class="c_content">
      <h3 class="c_title">Hot Category Goods</h3>
      <ul class="c_bodyer">
        <li v-for="(item,index) in rightList" :key="index">
          <router-link :to="'/detail/'+item.category_id">
            <img :src="item.product_img_url" alt="" class="c_clickImg">
            <div class="c_detail">{{item.product_name}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      rightList:[]
    }
  },
  mounted(){
    console.log(this.$route.params.id);
  },
  watch:{
    '$route.params.id'(to,from){
      this.getDatas(to);
    }
  },
  methods:{
    getDatas(id){
      this.$http.get('/categorygoods',{params:{mId:id}}).then(res=>{
        console.log(res);
        this.rightList = res.data;  
      }).catch(error=>{
        console.log(error);
      })
    }
  },
}
</script>
<style>
.c_bod{
  height:100%;
  margin:0;
  padding:10px;

}
.c_bod .c_pic a{
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.c_bod .c_pic a img{
  width:100%;
}
.c_bod .c_content .c_title{
  margin-bottom:10px;
  color:#888;
  font-size:16px;
}
.c_bod .c_content .c_bodyer{
  margin:0;
  padding:0;
  list-style: none;
}
.c_bod .c_content .c_bodyer li{
  float:left;
  width:33%;
  
}
.c_bod .c_content .c_bodyer li a{
  display: block;
  text-align: center;
  text-decoration: none;
  color:#000;
  
}
.c_bod .c_content .c_bodyer li a .c_clickImg{
  height:62px;
  width:62px;
}
.c_bod .c_content .c_bodyer li a .c_detail{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
