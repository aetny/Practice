<template>
    <div class="s_footer">
      <div class="s_checkAll">
        <input type="checkbox" @click="changeAll($event)" :checked="checkAllState">全选
      </div>
      <div class="s_total">
        <div class="s_total_count">合计：{{totalCount}}￥</div>
        <div class="s_rental">总额：￥{{totalCount}} 立减：￥</div>
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
            this.$router.dispatch('allCheckStatue')
        },
    },
}
</script>
<style lang="">
    
</style>