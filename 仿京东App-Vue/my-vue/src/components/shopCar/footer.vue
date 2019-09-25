<template>
    <div class="s_footer">
      <div class="s_checkAll">
        <input type="checkbox" @click="changeAll($event)" :checked="checkAllState">全选
      </div>
      <div class="s_total">
        <div class="s_total_count">合计：￥{{totalCount||0}}元</div>
        <div class="s_rental">总额：￥{{totalCount||0}}元 立减：￥0元</div>
      </div>
      <div class="s_account">
        <router-link :to="''">去结算</router-link>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            checkValue:false,
        }
    },
    computed: {
        ...mapGetters(['checkAllState','totalCount']),
    },
    methods: {
        changeAll(event){
            this.$store.dispatch('allCheckStatue')
        },
    },
}
</script>
<style>
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