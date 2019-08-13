import React , {Component} from 'react';
import {Recursion} from '../../assets/component/recursion'
import './Home.scss'

export  class Section extends Component{
  
  render(){
    let data = this.props.abc;
    return (
      <div className="post">
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