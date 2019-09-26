<template>
    <div class="search_header">
        <div class="goBack"></div>
        <input type="text" value="1">
        <div class=""></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
input{outline:none}

.search_header{
    position: fixed;
    height: 50px;
    width:auto;
    background-color:#fff;
    border:1px solid #000;
    box-shadow:2px #000;
    line-height:50px;
}
.search_header>div{
    display:inline-block;
    border:1px solid #000;
    height:28px;
    width:10%;
}
.search_header>input{
    height:40px;
    line-height:40px;
    vertical-align:top;
    width:80%;
    border:1px solid #000;
}
.goBack{
    background:url() no-repeat no-repeat;
    background-position: center center;
    
}
</style>