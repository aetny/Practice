<template>
<div class="main">
    <div class="s_list">
      <div class="item_box" v-for="(item,index) in shopData" :key="index">
        <div class="s_logo">
          <input type="checkbox" class="cart_shop" @change="checkChange" v-model="item.check">
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
              <span @click="gIncrement(item.product_id)" style="border-right:none;cursor: pointer;border-top-left-radius: 4px;border-bottom-left-radius: 4px;">+</span>
              <input type="text" :value="item.goods_num"/>
              <span @click="gDecrement(item.product_id)" style="border-left:none;cursor: pointer;border-top-right-radius: 4px;border-bottom-right-radius: 4px;">-</span>
            </div>
            <div class="s_item_del" @click="showPop(item.product_id)">
              <div class="del_top"></div>
              <div class="del_bot"></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="pop_box" v-show="popStatus">
        <div class="del_info">确认删除该商品吗？</div>
        <div class="del_cancel" @click="delCancel">取消</div>
        <div class="del_ok" @click="delOk">确认</div>
    </div>
</div>
    
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
    return {
      checkArr:[],
      popStatus:false,
      curId:'',
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
    // ...mapActions(['gIncrement','gDecrement']),
    gIncrement(id){
      console.log(id)
      this.$store.dispatch('gIncrement',id)
    },
    gDecrement(id){
      this.$store.dispatch('gDecrement',id)
    },
    showPop(id){
        // console.log(id)
        this.curId = id;
        this.popStatus = true;
    },
    delCancel(){
        this.popStatus = false;
    },
    delOk(){
        this.popStatus = false;
        this.$store.dispatch('delCartData',this.curId);
    },
    checkChange(){
        this.$store.dispatch("checkChange");
    }
  },
}
</script>
<style>
.main{
    position:relative;
}
.pop_box{
    position: absolute;
    left:50%;
    top:50%;
    height:100px;
    width:200px;
    margin-left:-100px;
    margin-top:-50px;
    z-index: 999;
    background-color:#000;
    background:rgba(0, 0, 0, 0.5)
}
.del_info,.del_ok{
    border:1px solid #000;
    border-radius: 10px;

}
.detail{
  margin:0;
  padding:0;
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
</style>