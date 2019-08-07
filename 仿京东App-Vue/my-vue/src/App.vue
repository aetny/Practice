<template>
  <div id="app">
    <!-- <select name="" id="" @change="changeLocalLanguage" v-model="localLanguage">
      <option value="zh-CN">中文</option>
      <option value="en-US">英文</option>
    </select>
    {{$t('m.music')}} -->
    <router-view/>
    <navBottom />
  </div>
</template>

<script>
import navBottom from './components/navBottom'
export default {
  name: 'App',
  data(){
    return {
      localLanguage:''
    }
  },
  methods:{
    changeLocalLanguage(){
      console.log(this.localLanguage);
      this.$i18n.locale = this.localLanguage;
    }
  },
  components:{
    navBottom
  }
}
</script>

<style>
.active{
  color:rgb(240, 45, 45);
}
</style>
