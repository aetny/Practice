<template>
  <div class="nav_wrapper" v-if="$store.state.flags">
    <ul>
      <li>
        <router-link :to="'/home'">
          <i class="iconfont iconshouye"></i>
          <label class="tab-item-icon">首页</label>
        </router-link>
      </li>
      <li>
        <router-link :to="'/classify'">
          <i class="iconfont iconfenlei"></i>
          <label class="tab-item-icon">分类</label>
        </router-link>
      </li>
      <li>
        <router-link :to="'/discover'">
          <i class="iconfont iconfaxian"></i>
          <label class="tab-item-icon">发现</label>
        </router-link>
      </li>
      <li>
        <router-link :to="'/shopCar'">
          <i class="iconfont icongouwuchekong"></i>
          <label class="tab-item-icon">购物车</label>
        </router-link>
      </li>
      <li>
        <router-link :to="'/mine'">
          <i class="iconfont iconwode1"></i>
          <label class="tab-item-icon">我的</label>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {} from '../store/index'
export default {
  data(){
    return {
      
    }
  }
}
</script>
<style>
  .nav_wrapper{
    position: fixed;
    bottom:0;
    width:100%;
    background-color:#eee;
    z-index:10;
  }
  .nav_wrapper ul{
    padding-inline-start:0;
    width:100%;
    height:50px;
    /* line-height:50px; */
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .nav_wrapper ul li{
    text-align:center;
    width:20%;
    float:left;
    list-style: none;
    height:100%;
  }
  .nav_wrapper ul li a{
    text-decoration:none;
    display:inline-block;
    overflow: hidden;
    height: 50px;
    line-height: 25px;
  }
  .nav_wrapper ul li a .tab-item-icon{
    display:block;
  }
  /* .nav_wrapper ul:hover{
    background-color:red;
  } */
</style>
