import React , {Component} from 'react';
import {Recursion} from '../../assets/component/recursion'

export  class Section extends Component{
  handleScroll(e) {
    // 点击a之后， 先让浏览器滚动好，然后再作这个偏移，所以需要setTimeout
    let _top = e.target.offsetTop;
    let _height = document.querySelector('.poster').offsetHeight;
    setTimeout(function() {
      
      window.scrollTo({ 
        top: (_top + _height), 
        behavior: "smooth" 
      });
    }, 100);
  }
  render(){
    let data = this.props.abc;
    return (
      <div className="post" onClick={this.handleScroll.bind(this)}>
        <div className="date">
          13 <div className="small">2019.8</div>
        </div>
        <div className="time">
          <span>15:02</span>
          |
          <span>
            <a href="#">权限</a>
            ,
            <a href="#">用户</a>
          </span>
        </div>
        <div className="title">
          <a href="#">独立产品权限设计</a>
        </div>
        <div className="cont">
          <div>
            <Recursion data={data}/>
          </div>
        </div>
      </div>
    )
  }
}