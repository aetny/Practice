<template>
  <div>
    <!-- 搜索 -->
    <Search />
    <!-- 轮播组件 -->
    <Banner :list="list"/>
    <!-- 导航 -->
    <Nav />
    <!-- 展示 -->
    <list />
  </div>
</template>
<script>
import Banner from './banner'
import Search from './search'
import List from './list'
import Nav from './nav'
export default {
  data(){
    return{
      list:[{src:require('../../assets/images/l1.jpg')},
      {src:require('../../assets/images/l2.jpg')},
      {src:require('../../assets/images/l3.jpg')},
      {src:require('../../assets/images/l4.jpg')},
      {src:require('../../assets/images/l5.jpg')},],
    }
  },
  mounted(){
    // this.getListData();
  },
  methods:{
    getListData(){
      this.$http.get('/home').then(res=>{
        
      }).catch(error =>{

      })
    }
  },
  components:{
    Banner,
    List,
    Search,
    Nav
  }
}
</script>
<style>

</style>
