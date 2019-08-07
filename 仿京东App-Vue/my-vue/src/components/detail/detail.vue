<template>
  <div class="detail">
    <div class="detail_header">
      <a class="icon_back" href="#" @click="$router.go(-1)"></a>
      <h3 class="detail_header_title">商品详情</h3>
      <a class="icon_menu" href="#" @click="$router.push({path:'/home'})"></a>
    </div>
    <div class="detail_content">
      <div class="detail_sub">
        <Banner :list="list" v-if="flag"/>
        <div class="detail_info">
          <p class="detail_product_name">{{curDa.product_name}}</p>
          <div class="detail_pri">
            <span>￥</span>
            <span style="font-weight:700;font-size:20px;">{{curDa.product_price}}</span>
            <span>.00</span>
          </div>
          <div class="detail_depreciate">降价通知</div>
        </div>
        <div class="detail_intro">
          {{curDa.product_detail}}
        </div>
      </div>
    </div>
    <div class="detail_footer">
      <div class="cart">
        <div class="cart_left">
          <ul class="cart_ul">
            <li><a href="#">
              <i class=""></i>
              <span>卖家</span>
            </a></li>
            <li><a href="#">
              <i></i>
              <span>关注</span>
            </a></li>
            <li><a href="#">
              <i></i>
              <span>购物车</span>
            </a></li>
          </ul>
        </div>
        <div class="cart_right">
          <a href="#" style="background-color:#FFB03F" @click="addCarList">加入购物车</a>
          <div @click="addCarList">
            <router-link :to="'/shopCar'" href="" style="background-color:#F23030;">立即购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from './banner'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
      list:[],
      curDa:{},
      flag:false,
    }
  },
  mounted(){
    this.getDetailData();
    // console.log(this.$store)
    this.$store.dispatch('hideNav');
  },
  methods:{
    ...mapActions(['addProduct']),
    ...mapMutations({'ADD':'ADDPRODUCT'}),
    getDetailData(){
      this.$http.get('/detail',{params:{mId:this.$route.params.id}}).then(res=>{
        this.list = res.data[0];
        this.curDa = res.data[1][0];
        this.flag = true;
        console.log(this.curDa)
      }).catch(error=>{
        console.log(error);
      })
    },
    name(){
      alert('1');
    },
    addCarList(){
      console.log(this.curDa);
      // this.$store.dispatch("addProduct",this.curDa);
      // this.addProduct(this.curDa);
      this.ADD(this.curDa);
    }
  },
  components:{
    Banner,
  },
  beforeDestroy(){
    this.$store.dispatch('showNav');
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
.detail .detail_content{
  margin:0;
  padding:0;
  width:100%;
}
.detail .detail_content .detail_sub{
  width:100%;

}
.detail .detail_content .detail_info{
  padding:5px;
  box-sizing: border-box;
  width:100%;
  position: relative;
  margin-top:5px;
  background-color:#e2dede;
}
.detail .detail_content .detail_info .detail_product_name{
  font-weight:600;
  color:#484848;

}
.detail .detail_content .detail_info .detail_pri{
  color:#F23434;
}
.detail .detail_content .detail_info .detail_depreciate{
  position:absolute;
  right:10px;
  bottom:10px;
  border:1px solid #bfbfbf;
  border-radius:5px;
  padding:10px;
  box-sizing: border-box;
  font-size:12px;
  box-shadow: 1px 1px 1px 1px #bfbfbf;
  cursor: pointer;
}
.detail .detail_content .detail_intro{
  margin-top:5px;
  background-color:#e2dede;
  padding:10px;
  font-size:14px;
}
.detail .detail_footer{
  width:100%;
  position: fixed;
  bottom: 0;
  z-index:4;
}
.detail .detail_footer .cart{
  width:100%;
  height:60px;
  display:-webkit-flex;
  display:flex;
}
.detail .detail_footer .cart .cart_left,
.detail .detail_footer .cart .cart_right{
  width:50%;
}
.detail .detail_footer .cart .cart_left{
  background-color:#eee;
}
.detail .detail_footer .cart .cart_left .cart_ul{
  float:left;
  margin:0;
  padding:0;
  list-style: none;
  width:100%;
  height:100%;
  line-height: 100%;
  text-align:center;
}
.detail .detail_footer .cart .cart_left .cart_ul li{
  float:left;
  width:33%;
  height:100%;
  color:#000;
}
.detail .detail_footer .cart .cart_left .cart_ul li a{
  text-decoration: none;
  display:block;
}
.detail .detail_footer .cart .cart_left .cart_ul li a i{
  height:20px;
  width:20px;
  background:url('../../assets/images/cart_sprits_all.png') no-repeat no-repeat center;
  display:block;
  background-size:100px 100px;
  background-position: -26px 0;
  margin:10px auto 0;
}
.detail .detail_footer .cart .cart_right a{
  height:100%;
  width:50%;
  float:left;
  text-decoration: none;
  text-align:center;
  line-height:60px;
  color:#fff;
}
</style>
