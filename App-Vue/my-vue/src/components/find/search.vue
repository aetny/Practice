<template>
    <div class="search_header">
        <ul class="search_form">
            <li class="search_item">
                <div class="icon_back"></div>
            </li>
            <li class="search_item" style="width:80%">
                <input type="text">
            </li>
            <li class="search_item">
                <div class="icon_menu"></div>
            </li>
        </ul>
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
    width:100%;
    box-sizing:border-box;
    background-color:#fff;
    border:1px solid #000;
    box-shadow:2px #000;
    line-height:50px;
}
.search_form{
    margin:0;
    padding:0;
}
.search_form .search_item{
    float:left;
    
    list-style:none;
    overflow: hidden;
}
.search_form .search_item{
    width:80%;
    /* position: relative; */
}
.search_form .search_item:first-child,.search_form .search_item:last-child {
    width:10%;
}
.search_form .search_item input{
    width: 94%;
    padding: 5px;
    font-size: 20px;
    margin: 5px;
    vertical-align: top;
}
[class^='icon']{
    background: url(/static/img/sprites.62fff39.png) no-repeat;
    background-size: 200px 200px;
}
.search_form .search_item .icon_back{
    /* position: absolute; */
    display: block;
    height: 20px;
    width: 20px;
    left: 0;
    top: 0;
    background-position: -20px 0;
    margin: 14px;
    cursor: pointer;
}
.search_form .search_item .icon_menu{
    height: 45px;
    width: 40px;
    /* position: absolute; */
    right: 0;
    top: 0;
    display: block;
    background-position: -60px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    background-origin: content-box;
    background-clip: content-box;
    cursor: pointer;
}
</style>