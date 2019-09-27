<template>
  <div class="list">
    <div class="list_wrapper">
      <div class="list_top">
        <div style="cursor:pointer;" @click="a_click" class="list_point">
          <img src="../../assets/images/jd_skill.png" alt="" class="list_img">
          <span class="list_seckill">六点场</span>
          <span class="list_time">距离到点剩下{{day}}天{{hr}}小时{{min}}分钟{{sec}}秒</span>
        </div>
      </div>
      <div class="list_content">
        <div class="list_shows">
          <ul class="list_ul">
            <li class="list_li" v-for="(item,index) in list_arr" :key="index">
              <!-- <router-link class="list_design" :to="{path:'/detail/'+ item.product_id}"> -->
              <router-link class="list_design" :to="{path:'/detail/'+ item.product_id}" v-lazy-container="{ selector: 'img' }">
                <img :data-src="item.product_img_url" alt="" class="product_img">
                <!-- <img src="images/loading.gif" :data-src="item.product_img_url" alt="" class="product_img"> -->
                <span class="current_price">￥{{item.product_uprice}}</span>
                <span class="older_price">￥{{item.product_price}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="list_recommennd">
          <div><span>为你推荐</span></div>
          <div class="list_box clearbox">
            <ul class="list_ul">
              <li class="list_li" v-for="(item,index) in mainData" :key="index">
                <router-link class="list_container" :to="{path:'/detail/'+ item.product_id}" v-lazy-container="{ selector: 'img' }">
                  <img :data-src="item.product_img_url" alt="" class="list_img">
                  <div class="list_content">
                    <div>{{item.product_name}}</div>
                    <span class="older_price">￥{{item.product_price}}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // timeDate:'',
      day: 0, hr: 0, min: 0, sec: 0,
      list_arr:[],
      mainData:[]
    }
  },
  mounted(){
    this.autoPlay();
    this.$http.get('/home').then(res=>{
      this.list_arr = res.data.slice(0,4);
      this.mainData = res.data;
    });
    
    // this.$nextTick(function(){
    //   this.lazyload();
    // })
    
  },
  methods:{
    lazyload(){
      // const allImg = selector=>{ //vue里面如何解决
      //   return Array.from(document.querySelectorAll(selector));
      // }
      // console.log(allImg('img'));
      // var io = new IntersectionObserver(function(items){
      //   items.forEach(function(item){
      //     var target = item.target;
      //     if(target.getAttribute('src')=='images/loading.gif'){
      //       target.src = target.getAttribute('data-src');
      //     }
      //   })
      // })
      // allImg('.product_img').forEach(function(item){
      //   console.log(item);
      //   io.observe(item);
      // })
      const throlle = (fn,delay,atleast)=>{
        var timeout = null,startTime = new Date();
        return ()=>{
          var curTime = new Date();
          clearTimeout(timeout);
          if(curTime -startTime >= atleast){
            fn();
            startTime = curTime;

          }else{
            timeout = setTimeout(fn, delay);
          }
        }
      }
      const lazy = ()=>{
        var contain = document.getElementsByClassName('list_shows')[0];
        var img = contain.getElementsByTagName('img');
        var len = img.length;
        var n = 0;
        console.log(img)
        return (()=>{
          var seeHeight = document.documentElement.clientHeight;
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          for(var i = n;i < len ;i++){
            if(img[i].scrollTop < seeHeight + scrollTop ){
              if(img[i].getAttribute('src') === 'images/loading.gif'){
                img[i].src = img[i].getAttribute('data-src');
                // console.log(n)
              }
              n = n + 1;
            }
          }
        })();
      }
      lazy();
      document.addEventListener('scroll',throlle(lazy,1000,3000),false);
    },
    a_click(){

    },
    autoPlay(){
      const end = Date.parse(new Date(2019,4,28,18,0,0));
      const start = Date.parse(new Date());
      const msec = end - start;
      if(msec<=0){return this.day =0,this.hr = 0,this.min = 0,this.sec = 0;}
      let day = Math.floor(msec / 1000 / 60 / 60 / 24);
      let hr = Math.floor(msec / 1000 / 60 / 60 % 24);
      let min = Math.floor(msec / 1000 / 60 % 60 );
      let sec = Math.floor(msec / 1000 % 60);
      this.day = day<10?'0'+day:day;
      this.hr = hr<10?'0'+hr:hr;
      this.min = min<10?'0'+min:min;
      this.sec = sec<10?'0'+sec:sec;
      setTimeout(()=>{
        this.autoPlay();
      },1000)
    },
    // autoPlay(){
    //   var data = new Date(),
    //   y = data.getFullYear(),
    //   m = (data.getMonth()+1)<10?('0'+(data.getMonth()+1)):data.getMonth()+1,
    //   d = data.getDate()<10?'0'+data.getDate():data.getDate(),
    //   h = data.getHours()<10?'0'+data.getHours():data.getHours(),
    //   M = data.getMinutes()<10?'0'+data.getMinutes():data.getMinutes(),
    //   s = data.getSeconds()<10?'0'+data.getSeconds():data.getSeconds();
    //   this.timeDate = `${y}-${m}-${d} ${h}:${M}:${s}`;
    //   setTimeout(()=>{
    //     this.autoPlay()
    //   },1000);
    // },
  }
}
</script>
<style>
.clearbox{
  overflow: hidden;
  clear:both;
}



.list{
  margin:0;
  padding:0;
  width:100%;
}
.list .list_wrapper{
  margin:0 10px;
  
}
.list .list_wrapper .list_top{
  box-shadow:0 0 1px 1px #e0e0e0;
  height:30px;
  border-bottom:1px solid #ccc;
}
.list .list_wrapper .list_top .list_point{
  height:30px;
  display:flex;
  /* align-items: center;
  display:-webkit-flex; */
}
.list .list_wrapper .list_top .list_point .list_img{
  height:30px;
  width:60px;
  margin-left:5px;
}
.list .list_wrapper .list_top .list_point .list_seckill{
  font-weight:bold;
  height:30px;
  line-height:30px;
  margin-left:5px;
}
.list .list_wrapper .list_top .list_point .list_time{
  font-size:13px;
  height:30px;
  line-height: 30px;
  margin-left:5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list .list_wrapper .list_content{
  margin-top:8px;
}
.list .list_wrapper .list_content .list_shows{
  width:100%;

}
.list .list_wrapper .list_content .list_shows .list_ul{
  width:100%;
  margin:0;
  padding:0;

}
.list .list_wrapper .list_content .list_shows .list_ul .list_li{
  float:left;
  list-style: none;
  width:25%;
  text-align: center;
}
.list .list_wrapper .list_content .list_shows .list_ul .list_li .list_design{
  display:block;
  text-decoration: none;
  color: rgb(182, 179, 179);
  padding: 10px;
}
.list .list_wrapper .list_content .list_shows .list_ul .list_li .list_design .product_img{
  display:block;
  height:80px;
  width:80px;
  margin: 0 auto;
}
.list .list_wrapper .list_content .list_shows .list_ul .list_li .list_design .current_price{
  display:block;
  color:rgb(233, 16, 16);
  font-weight:700;
}
.list .list_wrapper .list_content .list_shows .list_ul .list_li .list_design .older_price{
  display:block;
  text-decoration: line-through;
}
.list .list_wrapper .list_content .list_recommennd{
  margin:0;
  padding:0;
}
.list .list_wrapper .list_content .list_recommennd .list_box{
  width:100%;
  
}
.list .list_wrapper .list_content .list_recommennd .list_box .list_ul{
  margin:0;
  padding:0;
  list-style: none;
}
.list .list_wrapper .list_content .list_recommennd .list_box .list_ul .list_li{
  float:left;
  width:48%;
  margin:0 1% 20px 1%;
}
.list .list_wrapper .list_content .list_recommennd .list_box .list_ul .list_li .list_container{
  display:block;
  text-align:center;
  text-decoration: none;
  color:#000;
}
.list .list_wrapper .list_content .list_recommennd .list_box .list_ul .list_li .list_container .list_img{
  width:100%;
  max-width: 300px;
}
.list .list_wrapper .list_content .list_recommennd .list_box .list_ul .list_li .list_container .list_content{
  text-align:left;
}
.list .list_wrapper .list_content .list_recommennd .list_box .list_ul .list_li .list_container .list_content .older_price{
  color:#f40;
}
</style>
