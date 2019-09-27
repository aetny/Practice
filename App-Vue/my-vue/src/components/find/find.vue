<template>
    <div class="app_wrapper">
        <search />
        <div class="find_content">
            <ul class="find_screen">
                <li class="screen_item">全部</li>
                <li class="screen_item">销量</li>
                <li class="screen_item">价格</li>
                <li class="screen_item">筛选</li>
            </ul>
            <div class="find_box">
                <ul class="find_box_section">
                    <li class="find_box_item">
                        
                    </li>
                    <li class="find_box_item">111</li>
                    <li class="find_box_item">111</li>
                    <li class="find_box_item">111</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import search from './search'
export default {
    data(){
        return{

        }
    },
    components:{
        search,
    }
}
</script>
<style>
    
    .find_content{
        padding-top:50px;
    }
    .find_content .find_screen{
        margin:0;
        padding:0;
    }
    .find_content .find_screen::after{
        content: '';
        border-bottom: 1px solid red;
        clear: both;
        display: block;
    }
    .find_content .find_screen .screen_item{
        list-style: none;
        float:left;
        width:25%;
        box-sizing: border-box;
        text-align: center;
        padding:10px 5px;
    }
    .find_content .find_box{
        
    }
    .find_content .find_box .find_box_section{
        margin:0;
        padding:0;
    }
    .find_content .find_box .find_box_section .find_box_item{
        list-style: none;
        width:auto;
        border:1px solid #000;
        padding:10px;
    }
</style>