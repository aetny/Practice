<template>
  <div>
    <ul class="a_ul">
      <li v-for="(item,index) in lists" :key="index" :class="{'active':cur==index?true:false}">
        <router-link :to="'/classify/'+item.category_id" @click="cur=index">{{item.category_name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      lists:[],
      cur:0,
    }
  },
  mounted(){
    this.getDatas();
  },
  methods:{
    getDatas(){
      this.$http.get('/category').then(res=>{
        this.lists = res.data
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  components:{
    
  },

}
</script>
<style scoped>
.a_ul li a.active{
  color:blue;
}
.a_ul{
  margin:0;
  padding:0;
  list-style: none;
  
}
.a_ul li{
  float:left;
  height:50px;
  width:90px;
  font-size:12px;
  font-family:sans-serif;
}
.a_ul li a{
  color:#000;
  text-decoration: none;
  height: 50px;
  width: 90px;
  display: block;
  text-align: center;
  line-height: 50px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
</style>
