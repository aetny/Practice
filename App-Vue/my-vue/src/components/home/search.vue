<template>
  <div class="search_header">
    <div class="search_container">
      <a href="javascript:;" class="icon_logo"></a>
      <form action="" class="search_form">
        <span></span>
        <input type="search" placeholder="点击搜索" v-model="input_data" class="search" @click="$router.push('find')">
      </form>
      <a href="javascript:;" class="search_button" @click="_submit">搜索</a>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      input_data:''
    }
  },
  methods:{
    _submit(){
      console.log(this.input_data)
    }
  }
}
</script>
<style scoped>
.search_header{
  position: fixed;
  height:40px;
  padding:0;
  margin:0 auto;
  z-index:2;
  width:100%;
}
[class^='icon']{
  background:url('../../assets/images/sprites.png');
  background-size: 200px 200px;
}
.search_header .search_container{
  position:relative;
  margin:0 auto;
  background-color:rgba(201,21,35,0);
}
.search_header .search_container .icon_logo{
  height:36px;
  width:60px;
  position: absolute;
  background-position: 0 -103px;
  left:8px;
  top:5px;
}
.search_header .search_container .search_form{ 
  position:relative;
  padding-left:75px;
  padding-right:60px;
  height:40px;
}
.search_header .search_container .search_form span{
  width:37px;
  height:40px;
  position: absolute;
  left:85px;
  top:10px;
  background-position:-60px -109px;
  display:block;
}
.search_header .search_container .search_form input{
  width:100%;
  height:30px;
  margin-top:5px;
  border-radius: 15px;
  padding-left:30px;
  outline:none;
  border: 1px solid #bfbfbf;
}
.search_header .search_container .search_button{
  display:block;
  height:40px;
  width:40px;
  top:0;
  right:8px;
  font-weight:400;
  position: absolute;
  line-height: 40px;
  text-decoration: none;
  color:#fff;
}
</style>
