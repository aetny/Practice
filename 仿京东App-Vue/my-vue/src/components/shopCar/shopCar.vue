<template>
  <div class="detail">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>
<script>
import Header from './header'
import Content from './content'
import Footer from './footer'

export default{
  
  components:{
    Header,
    Content,
    Footer
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
