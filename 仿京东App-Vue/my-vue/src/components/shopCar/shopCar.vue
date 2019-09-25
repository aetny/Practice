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

[class^='icon']{
  background:url(../../assets/images/sprites.png) no-repeat;
  background-size:200px 200px;
}

</style>
