<template>
  <div class="detail">
    <div class="detail_header">
      <a class="icon_back" href="#" @click="$router.go(-1)"></a>
      <h3 class="detail_header_title">购物车</h3>
      <a class="icon_menu" href="#" @click="$router.push({path:'/home'})"></a>
    </div>
    <div class="s_list">
      <div class="item_box" v-for="(item,index) in shopData" :key="index">
        <div class="s_logo">
          <input type="checkbox" class="cart_shop" :value="item" v-model="checkArr">
          <img style="width:16px;height:13px;" src="../../assets/images/buy-logo.png" alt="" class="s_icon">
          <div class="s_more">
            优惠券>
          </div>
        </div>
        <div class="s_item_content">
          <div style="padding-left:10px;float:left;">
            <a href="" style="display:block;padding:10px;width:100px;height:100px;box-sizing: border-box;border: 1px solid #eee;border-radius: 4px;background-color: #fff;">
              <img style="width:100%;height:100%;" :src="item.product_img_url" alt="">
            </a>
          </div>
          <div class="s_item_detail">
            <div class="s_item_ti"><a href="#">{{item.product_name}}</a></div>
            <div class="s_item_weight">重量:0.45kg 颜色:AT800/16</div>
            <div style="color:#f40;">￥<span style="font-weight:700;font-size:16px">{{item.product_uprice}}</span>.00</div>
          </div>
          <div class="s_item_count">
            <div class="s_item_input">
              <span style="border-right:none;cursor: pointer;border-top-left-radius: 4px;border-bottom-left-radius: 4px;">+</span><input type="text" :value="item.shop_id"/><span style="border-left:none;cursor: pointer;border-top-right-radius: 4px;border-bottom-right-radius: 4px;" >-</span>
            </div>
            <div class="s_item_del" @click="name">
              <div class="del_top"></div>
              <div class="del_bot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="s_footer">
      <div class="s_checkAll" @click="changeAll($event)" >
        <input type="checkbox" :value="checkValue" :checked="checkArr.length==shopData.length?true:false">全选
      </div>
      <div class="s_total">
        <div class="s_total_count">合计：￥</div>
        <div class="s_rental">总额：￥ 立减：￥</div>
      </div>
      <div class="s_account">
        <router-link :to="''">去结算</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default{
  data(){
    return {
      checkArr:[],
      checkValue:false,
    }
  },
  computed:{
    ...mapState(['shopData']),
  },
  mounted(){
    this.$store.dispatch('hideNav');
  },
  beforeDestroy(){
    this.$store.dispatch('showNav');
  },
  methods:{
    ...mapActions(['']),
    name(){
      alert('1')
    },
    changeAll(event){
      this.checkValue = !this.checkValue;
      if(this.checkValue == false){
        this.checkArr = [];
      }else{
        this.checkArr = this.shopData
        // JSON.parse(JSON.stringify(this.shopData)).forEach(element => {
        //   this.checkArr.push(element);
        // });
      }
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
.detail .s_list{
  width:100%;
  padding:45px 10px 0 10px;
  box-sizing: border-box;
}
.detail .s_list .item_box{
  width:100%;
  background-color: #eee;
  margin-bottom: 10px;
}
.detail .s_list .item_box .s_logo{
  padding:10px;
  position:relative;
}
.detail .s_list .item_box .s_logo .s_more{
  position:absolute;
  right:0;
  top:0;
  line-height:40px;
  color:#f40;
}
.detail .s_list .item_box .s_item_content{
  width:100%;
  height:100px;
  position: relative;
}
.detail .s_list .item_box .s_item_content .s_item_detail{
  float:left;
  font-size:13px;
}
.detail .s_list .item_box .s_item_content .s_item_count{
  position:absolute;
  bottom:5px;
  right:5px;
  float:right;
}
.detail .s_list .item_box .s_item_content .s_item_count .s_item_input{
  width:100%;
}
.detail .s_list .item_box .s_item_content .s_item_count .s_item_input span,
.detail .s_list .item_box .s_item_content .s_item_count .s_item_input input{
  border:1px solid #CBCBCB;
  height:24px;
  width:25px;
  display:inline-block;
  text-align: center;
}
.detail .s_list .item_box .s_item_content .s_item_count .s_item_input input{
  padding:0;
}
.detail .s_list .item_box .s_item_content .s_item_count .s_item_del{
  float:right;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.detail .s_list .item_box .s_item_content .s_item_count .del_top{
  height:5px;
  width:20px;
  background:url('../../assets/images/delete_up.png');
  background-size:20px 5px;
  margin-left: -1px;
}
.detail .s_list .item_box .s_item_content .s_item_count .del_bot{
  height:18px;
  width:18px;
  background:url('../../assets/images/delete_down.png');
  background-size:18px 18px;
}
.detail .s_list .item_box .s_item_content .s_item_detail>div{
  margin-bottom:5px;
}
.detail .s_list .item_box .s_item_content  .s_item_ti a{
  text-decoration: none;
  color:#000;
}
.detail .s_list .item_box .s_item_content .s_item_weight{
  color:#BCCCCA;
}
.detail .s_footer{
  height:50px;
  width:100%;
  position:fixed;
  bottom:0;
  background-color:#fff;
  border-top: 1px solid #aaa4a4;
  border-bottom: 1px solid #aaa4a4;
}
.detail .s_footer>div{
  float:left;
}
.detail .s_footer .s_checkAll{
  height:50px;
  width:80px;
  text-align: center;
  line-height: 50px;
}
.detail .s_footer .s_total{
  height:50px;
}
.detail .s_footer .s_total .s_total_count{
  font-size:16px;
  font-weight:700;
  margin-top: 5px;  
}
.detail .s_footer .s_total .s_rental{
  font-size:14px;
  color: #aaa;
}
.detail .s_footer .s_account{
  position: absolute;
  z-index: 2;
  height:50px;
  width:80px;
  top:0;
  right:0;
  text-align:center;
  line-height:50px;
  background-color:rgb(240, 72, 72);
}
.detail .s_footer .s_account a{
  color:#fff;
  text-decoration: none;
}

</style>
