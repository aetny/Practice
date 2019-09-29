<template>
  <div>
    <div class="c_header">
      <Search />
    </div>
    <div class="c_box clearfix">
      <div class="c_aisde">
        <Aside />
      </div>
      <div class="c_content">
        <Content />
      </div>
    </div>
    
    
  </div>
</template>
<script>
import Search from './search'
import Aside from './aside'
import Content from './content'
export default {
  data(){
    return{
      
    }
  },
  components:{
    Search,
    Aside,
    Content
  }
}
</script>
<style>
.clearfix::before{
  content:'';
  height:0;
  line-height:0;
  clear:both;
  display:block;
  visibility: hidden;
}
.c_header{
  height:45px;
  width:100%;
}
.c_box{
  display:-webkit-flex;
  display: flex;
}
.c_box .c_aisde{
  margin-bottom: 50px;
  height:100%;
  width:90px;
}
.c_box .c_content{
  
}
</style>
